
// Simple interactive behaviors: mobile nav, form handling, small animations
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  const btn = document.getElementById('mobile-btn');
  const nav = document.getElementById('nav-links');
  if(btn){
    btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  // simple form handler (no backend) - uses mailto
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value.trim();
      const email = contactForm.querySelector('[name=email]').value.trim();
      const message = contactForm.querySelector('[name=message]').value.trim();
      if(!name||!email||!message){ alert('Please fill all fields'); return; }
      const subject = encodeURIComponent('Website Contact from ' + name);
      const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
      window.location.href = `mailto:isaac@isax.tech?subject=${subject}&body=${body}`;
    });
  }

  // scroll reveal for cards
  const reveal = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.15});
  reveal.forEach(el => io.observe(el));
});
