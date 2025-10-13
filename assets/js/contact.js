document.getElementById('c-send')?.addEventListener('click', ()=>{
  const name = document.getElementById('c-name').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const msg = document.getElementById('c-msg').value.trim();
  if(!name || !email || !msg){ document.getElementById('c-status').textContent='Please fill all fields.'; return; }
  const key='gb_feedbacks';
  const arr = JSON.parse(localStorage.getItem(key)||'[]');
  arr.push({name,email,msg,ts:new Date().toISOString()});
  localStorage.setItem(key, JSON.stringify(arr));
  document.getElementById('c-status').textContent='Thanks — your feedback has been saved locally.';
  document.getElementById('contact-form').reset();
});