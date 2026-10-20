(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open menu')}
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close menu':'Open menu')});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});

  var lb=document.getElementById('lightbox'),li=document.getElementById('lb-img'),lc=document.getElementById('lb-cap');
  document.querySelectorAll('.g').forEach(function(b){b.addEventListener('click',function(){
    var im=b.querySelector('img');li.src=b.dataset.full;li.alt=im.alt;lc.textContent=b.querySelector('span').textContent;
    if(lb.showModal)lb.showModal();else window.open(b.dataset.full,'_blank');
  })});
  lb.querySelector('.lb-close').addEventListener('click',function(){lb.close()});
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});

  var f=document.getElementById('consult'),m=document.getElementById('form-msg');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var name=f.elements['name'].value.trim(),idea=f.idea.value.trim();
    if(!name||!idea){m.textContent='Please add your name and your idea.';(name?f.elements['idea']:f.elements['name']).focus();return}
    if(!f.age.checked){m.textContent='Please confirm you are 18 or older with photo ID.';f.age.focus();return}
    var body='Name: '+name+'\nPhone: '+(f.phone.value||'-')+'\nStyle: '+(f.style.value||'Not sure yet')+'\nSize: '+(f.size.value||'-')+'\nPlacement: '+(f.placement.value||'-')+'\n\nMy idea:\n'+idea+'\n\n(I am 18+ with photo ID. Reference photos attached.)';
    m.style.color='#1d5a2a';m.textContent='Opening your email app\u2026';
    window.location.href='mailto:truegritbookings@gmail.com?subject='+encodeURIComponent('Consultation request - '+name)+'&body='+encodeURIComponent(body);
  });
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
