document.getElementById('calc-btn')?.addEventListener('click', ()=>{
  const age = +document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = +document.getElementById('height').value;
  const weight = +document.getElementById('weight').value;
  const activity = +document.getElementById('activity').value;

  if(!age || !height || !weight){ alert('Please fill all fields'); return; }
  let bmr = (gender==='male') ? 10*weight + 6.25*height - 5*age + 5 : 10*weight + 6.25*height - 5*age -161;
  const tdee = Math.round(bmr * activity);
  const carbs = Math.round((tdee * 0.5) / 4);
  const protein = Math.round((tdee * 0.2) / 4);
  const fats = Math.round((tdee * 0.3) / 9);

  const res = document.getElementById('calc-results');
  const content = document.getElementById('results-content');
  if(res && content){
    content.innerHTML = `<div style="display:flex;flex-direction:column;gap:8px"><div><strong>Calories:</strong> <span id="anim-cal">0</span> kcal</div><div><strong>Protein:</strong> <span id="anim-pro">0</span> g</div><div><strong>Fats:</strong> <span id="anim-fat">0</span> g</div><div><strong>Carbs:</strong> <span id="anim-carb">0</span> g</div></div>`;
    res.classList.remove('hidden');
    animateValue(document.getElementById('anim-cal'),0,tdee,1200);
    animateValue(document.getElementById('anim-pro'),0,protein,1200);
    animateValue(document.getElementById('anim-fat'),0,fats,1200);
    animateValue(document.getElementById('anim-carb'),0,carbs,1200);
  }
});
