/* =====================================================================
   sync-prices.js  —  synchronise db/prestige.txt vers index.html
   ---------------------------------------------------------------------
   Met a jour SUR TOUTE LA PAGE D'ACCUEIL :
     1) les <span data-amz-game="Nom" data-amz-kind="..."> (prix codes en dur)
     2) les cartes du catalogue (#catalog .game-card)  -> par nom (h3)
     3) le tableau recapitulatif (#recapBody)
     4) le graphique Import vs Local (#chart)
   Des qu'un prix local change dans business-plan.html (admin) et que le
   prestige.txt est commit, la page d'accueil se met a jour au rechargement.
   ===================================================================== */
(async function(){
  var data;
  try{
    var r = await fetch('db/prestige.txt', {cache:'no-store'});
    if(!r.ok) return;
    data = JSON.parse(await r.text());
  }catch(e){ return; }

  var rate = ((data.meta && data.meta.amzPartnerRate) || 50) / 100;
  var cur  = (data.meta && data.meta.currency) || 'FCFA';
  var fmt  = function(n){ return Number(n||0).toLocaleString('fr-FR'); };
  var find = function(name){ return (data.games||[]).filter(function(x){return x.name===name;})[0]; };

  /* 1) spans data-amz-game / data-amz-kind */
  document.querySelectorAll('[data-amz-game]').forEach(function(el){
    var g = find(el.getAttribute('data-amz-game')); if(!g) return;
    var local=g.price||0, imp=g.import||0, save=imp?(imp-local):0, partner=Math.round(local*rate);
    var k=el.getAttribute('data-amz-kind')||'local', val='';
    if(k==='local')            val=fmt(local);
    else if(k==='import')      val=imp?fmt(imp):'—';
    else if(k==='partner')     val=fmt(partner);
    else if(k==='save')        val=save>0?fmt(save):'—';
    else if(k==='saving-pct')  val=imp?Math.round(save/imp*100):'—';
    if(val!=='') el.textContent=val;
  });
  document.querySelectorAll('[data-amz-currency]').forEach(function(el){ el.textContent=cur; });

  /* 2) cartes du catalogue (best-effort, par nom <h3>) */
  document.querySelectorAll('#catalog .game-card').forEach(function(card){
    var h=card.querySelector('h3'); if(!h) return;
    var g=find((h.textContent||'').trim()); if(!g) return;
    var local=g.price||0, imp=g.import||0, save=imp?(imp-local):0;
    var iE=card.querySelector('.imp'), lE=card.querySelector('.loc'), eE=card.querySelector('.ec');
    if(iE) iE.textContent = imp ? ('Import : '+fmt(imp)+' '+cur) : 'Fabrication locale uniquement';
    if(lE) lE.textContent = 'Local : '+fmt(local)+' '+cur;
    if(eE) eE.textContent = save>0 ? ('Économie : '+fmt(save)+' '+cur) : '';
  });

  /* 3) tableau recapitulatif (#recapBody) */
  var rb=document.getElementById('recapBody');
  if(rb){
    var html='';
    (data.games||[]).forEach(function(g){
      var local=g.price||0, imp=g.import||0, save=imp?(imp-local):0;
      var hl = save>0 ? ' class="highlight"' : '';
      html+='<tr'+hl+'>'
          +'<td class="name">'+(g.name||'')+'</td>'
          +'<td>'+(imp?fmt(imp):'—')+'</td>'
          +'<td class="loc">'+fmt(local)+'</td>'
          +'<td class="eco">'+(save>0?fmt(save):'—')+'</td>'
          +'</tr>';
    });
    rb.innerHTML=html;
  }

  /* 4) graphique Import vs Local (#chart) — top economies */
  var chart=document.getElementById('chart');
  if(chart){
    chart.querySelectorAll('.bar-row').forEach(function(e){e.remove();});
    var rows=(data.games||[]).filter(function(g){return (g.import||0)>0;})
      .map(function(g){return {n:g.name, imp:g.import, local:g.price||0, save:(g.import-(g.price||0))};})
      .sort(function(a,b){return b.save-a.save;}).slice(0,7);
    var maxImp=Math.max.apply(null, rows.map(function(r){return r.imp;}).concat([1]));
    rows.forEach(function(r){
      var row=document.createElement('div'); row.className='bar-row';
      row.innerHTML='<div class="bar-label"><span>'+r.n+'</span><span class="eco">Éco : '+fmt(r.save)+' '+cur+'</span></div>'
        +'<div class="bar-track"><div class="bar-fill bar-import" style="width:'+Math.round(r.imp/maxImp*100)+'%">'+fmt(r.imp)+'</div></div>'
        +'<div class="bar-track"><div class="bar-fill bar-local" style="width:'+Math.round(r.local/maxImp*100)+'%">'+fmt(r.local)+'</div></div>';
      chart.appendChild(row);
    });
  }
})();
