const recipes = [
  {
    id: 0,
    title: "Grilled Lemon Herb Chicken Salad",
    cat: "Balanced",
    img: "assets/images/full-body/yoga-sun-salutation.jpg",
    desc: "Juicy grilled chicken over crisp greens with a bright lemon dressing.",
    time: "20 mins",
    servings: "2 servings",
    ingredients: [
      "2 boneless skinless chicken breasts",
      "2 tbsp olive oil",
      "1 lemon, zested and juiced",
      "2 garlic cloves, minced",
      "1 tsp dried oregano",
      "1 tsp dried thyme",
      "6 cups mixed salad greens",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, sliced thin",
      "1/4 cup feta cheese (optional)"
    ],
    steps: [
      "Mix olive oil, lemon zest, lemon juice, garlic, oregano, thyme, salt, and pepper in a bowl. Add chicken and coat. Marinate 15 mins.",
      "Heat grill or pan over medium-high. Grill chicken 6-7 mins per side until cooked.",
      "Assemble greens, tomatoes, cucumber in a bowl.",
      "Rest chicken 5 mins, slice and place over salad. Top with feta.",
      "Serve with lemon wedges."
    ],
    notes: "For meal prep, cook extra chicken and store separately from greens."
  },
  {
    id: 1,
    title: "Quinoa and Black Bean Bowl",
    cat: "Balanced",
    img: "assets/images/arms/yoga-arm-balance.jpg",
    desc: "Protein-packed bowl with southwest flavors, perfect for meal prep.",
    time: "25 mins",
    servings: "4 servings",
    ingredients: [
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 can black beans, rinsed",
      "1 cup corn kernels",
      "1 red bell pepper, diced",
      "1 tsp cumin",
      "1 tsp chili powder",
      "Avocado, cilantro, lime for topping"
    ],
    steps: [
      "Cook quinoa in broth until fluffy.",
      "Sauté corn and bell pepper until slightly charred.",
      "Combine quinoa, beans, corn, and pepper. Add cumin and chili powder.",
      "Top with avocado slices, cilantro, and lime juice."
    ],
    notes: "Keeps well in the fridge for 3 days, great for meal prep."
  },
  {
    id: 2,
    title: "Zucchini Noodle Stir-Fry",
    cat: "Low-Carb",
    img: "assets/images/recipes/recipe-3-zucchini-noodle-stir-fry-ai-1754405312.webp",
    desc: "Veggie-packed stir-fry with flavor and no heavy carbs.",
    time: "15 mins",
    servings: "2 servings",
    ingredients: [
      "2 medium zucchinis, spiralized",
      "1 cup mushrooms, sliced",
      "1 carrot, julienned",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 garlic cloves, minced",
      "1 tsp ginger, grated"
    ],
    steps: [
      "Heat sesame oil in pan, sauté garlic and ginger.",
      "Add mushrooms and carrot, cook 3 mins.",
      "Add zucchini noodles and soy sauce, stir-fry 2 mins.",
      "Serve immediately."
    ],
    notes: "Don’t overcook zucchini or it will get watery."
  },
  {
    id: 3,
    title: "Broiled Salmon with Garlic Asparagus",
    cat: "Balanced",
    img: "assets/images/recipes/Recipe-4-Broiled-Salmon-with-Garlic-Asparagus-ai-1754405322.webp",
    desc: "Restaurant-quality meal in 15 minutes.",
    time: "15 mins",
    servings: "2 servings",
    ingredients: [
      "2 salmon fillets",
      "1 bunch asparagus",
      "2 tbsp olive oil",
      "3 garlic cloves, minced",
      "1 lemon, sliced",
      "Salt & pepper"
    ],
    steps: [
      "Preheat broiler. Line sheet pan with foil.",
      "Place salmon and asparagus, drizzle with olive oil, garlic, salt, pepper.",
      "Broil 8-10 mins until salmon is flaky.",
      "Serve with lemon slices."
    ],
    notes: "Line pan with foil for easy cleanup."
  },
  {
    id: 4,
    title: "Chickpea and Veggie Power Wraps",
    cat: "Snacks",
    img: "assets/images/recipes/Recipe-5-Chickpea-and-Veggie-Power-Wraps-ai-1754405334.webp",
    desc: "Protein-packed vegetarian wraps perfect for lunch on the go.",
    time: "10 mins",
    servings: "4 servings",
    ingredients: [
      "1 can chickpeas, rinsed and mashed",
      "1/4 cup Greek yogurt",
      "1 tbsp olive oil",
      "1 tsp paprika",
      "1 cucumber, sliced",
      "1 carrot, shredded",
      "4 whole grain tortillas"
    ],
    steps: [
      "Mix mashed chickpeas with yogurt, oil, paprika, salt, pepper.",
      "Spread mixture on tortillas.",
      "Top with cucumber and carrot.",
      "Roll up and slice in half."
    ],
    notes: "Add spinach or lettuce for extra crunch."
  },
  {
    id: 5,
    title: "Greek Yogurt Berry Parfait",
    cat: "Breakfast",
    img: "assets/images/upper-body/yoga-plank-variations.jpg",
    desc: "Creamy, protein-rich snack with fresh berries and crunch.",
    time: "5 mins",
    servings: "1 serving",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup mixed berries",
      "2 tbsp granola",
      "1 tsp honey"
    ],
    steps: [
      "Layer yogurt, berries, and granola in a glass.",
      "Drizzle with honey.",
      "Serve immediately."
    ],
    notes: "Try swapping honey for maple syrup."
  }
];

function renderrecipes(list){
  const grid = document.getElementById('recipe-grid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}">
      <h4>${r.title}</h4>
      <p class="small-muted" style="padding:0 12px">${r.desc}</p>
      <p style="padding:0 12px;color:var(--muted);font-size:0.9rem">${r.time} • ${r.servings}</p>
      <button class="cta-outline" style="margin:12px" onclick="openRecipeModal(recipeModalHtml(recipes[${r.id}]))">View Recipe</button>
    `;
    grid.appendChild(card);
  });
}

function recipeModalHtml(r){
  return `
    <h2 style="font-family:'Playfair Display',serif">${r.title}</h2>
    <img src="${r.img}" style="width:100%;height:240px;object-fit:cover;border-radius:8px;margin:12px 0">
    <p><strong>${r.time}</strong> • ${r.servings}</p>
    <h4>Ingredients</h4><ul>${r.ingredients.map(i=><li>${i}</li>).join('')}</ul>
    <h4>Steps</h4><ol>${r.steps.map(s=><li>${s}</li>).join('')}</ol>
    <h4>Notes</h4><p>${r.notes}</p>
  `;
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderrecipes(recipes);
});

function openRecipeModal(content){
  const modal = document.getElementById('recipe-modal');
  document.getElementById('modal-body').innerHTML = content;
  modal.classList.remove('hidden');
}

function closeRecipeModal(){
  document.getElementById('recipe-modal').classList.add('hidden');
}