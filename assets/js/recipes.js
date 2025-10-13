// ==============================
// Recipe Data
// ==============================
const recipes = [
  {
    id: 0,
    title: "Grilled Lemon Herb Chicken Salad",
    img: "assets/images/recipes/Recipe-1-Grilled-Lemon-Herb-Chicken-Salad-ai-1754405285.webp",
    time: "20 mins",
    servings: "2 servings",
    ingredients: [
      "1 small chicken breast",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "½ tsp garlic",
      "Pinch oregano, salt & pepper",
      "1 cup lettuce, ¼ cucumber, 1 small tomato, few onion slices"
    ],
    steps: [
      "Marinate chicken in oil, lemon, garlic and herbs for 15 mins.",
      "Grill until cooked, rest 5 mins, then slice.",
      "Toss veggies, top with chicken and drizzle leftover marinade."
    ],
    notes: "For meal prep, keep chicken separate from greens."
  },
  {
    id: 1,
    title: "Quinoa and Black Bean Bowl",
    img: "assets/images/recipes/Recipe-2-Quinoa-and-Black-Bean-Bowl-ai-1754405298.webp",
    time: "25 mins",
    servings: "1–2 servings",
    ingredients: [
      "½ cup cooked quinoa",
      "¼ cup black beans (rinsed)",
      "¼ avocado, diced",
      "1 tbsp corn",
      "1 tbsp salsa",
      "Lime wedge"
    ],
    steps: [
      "Layer quinoa, beans, avocado and corn in a bowl.",
      "Top with salsa and squeeze of lime."
    ],
    notes: ""
  },
  {
    id: 2,
    title: "Zucchini Noodle Stir-Fry",
    img: "assets/images/recipes/Recipe-3-Zucchini-Noodle-Stir-Fry-ai-1754405312.webp",
    time: "15 mins",
    servings: "2 servings",
    ingredients: [
      "1 cup spiralized zucchini",
      "¼ cup bell pepper strips",
      "1 tsp soy sauce",
      "½ tsp sesame oil",
      "1 tsp garlic",
      "Pinch chili flakes"
    ],
    steps: [
      "Sauté garlic in sesame oil.",
      "Add veggies and stir-fry 3–4 mins.",
      "Add soy sauce and chili flakes; serve warm."
    ],
    notes: "Don't overcook zucchini to avoid wateriness."
  },
  {
    id: 3,
    title: "Broiled Salmon with Garlic Asparagus",
    img: "assets/images/recipes/Recipe-4-Broiled-Salmon-with-Garlic-Asparagus-ai-1754405322.webp",
    time: "15 mins",
    servings: "1–2 servings",
    ingredients: [
      "1 small salmon fillet",
      "5–6 asparagus spears",
      "1 tsp olive oil",
      "½ tsp garlic",
      "Lemon wedge"
    ],
    steps: [
      "Toss asparagus with oil and garlic.",
      "Place salmon and asparagus on foil-lined tray.",
      "Broil 6–8 mins. Serve with lemon."
    ],
    notes: ""
  },
  {
    id: 4,
    title: "Chickpea and Veggie Power Wraps",
    img: "assets/images/recipes/Recipe-5-Chickpea-and-Veggie-Power-Wraps-ai-1754405334.webp",
    time: "10 mins",
    servings: "1 serving",
    ingredients: [
      "¼ cup mashed chickpeas",
      "1 small whole wheat wrap",
      "¼ cup shredded carrots",
      "¼ avocado",
      "Spinach & 1 tsp hummus"
    ],
    steps: [
      "Spread hummus on wrap.",
      "Layer chickpeas, veggies and avocado.",
      "Roll tightly and slice."
    ],
    notes: ""
  },
  {
    id: 5,
    title: "Greek Yogurt Berry Parfait",
    img: "assets/images/recipes/Recipe-6-Greek-Yogurt-Berry-Parfait-ai-1754405344.webp",
    time: "5 mins",
    servings: "1 serving",
    ingredients: [
      "½ cup Greek yogurt",
      "¼ cup mixed berries",
      "1 tbsp granola",
      "Drizzle of honey (optional)"
    ],
    steps: [
      "Layer yogurt, berries and granola in a glass.",
      "Drizzle with honey if desired."
    ],
    notes: ""
  }
];

// ==============================
// Utility Functions
// ==============================

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function recipeModalHtml(r) {
  const ing = r.ingredients.map(i => `<li class="mb-1">${escapeHtml(i)}</li>`).join('');
  const steps = r.steps.map(s => `<li class="mb-1">${escapeHtml(s)}</li>`).join('');
  return `
    <div class="px-4 py-3">
      <h2 class="text-2xl font-bold mb-2">${escapeHtml(r.title)}</h2>
      <img src="${r.img}" alt="${escapeHtml(r.title)}" class="w-full h-56 object-cover rounded-lg mb-3">
      <p class="text-sm text-gray-600 mb-3"><strong>${escapeHtml(r.time)}</strong> • ${escapeHtml(r.servings)}</p>
      <div class="mb-3">
        <h3 class="font-semibold mb-1">Ingredients</h3>
        <ul class="list-disc list-inside text-gray-700">${ing}</ul>
      </div>
      <div class="mb-3">
        <h3 class="font-semibold mb-1">Steps</h3>
        <ol class="list-decimal list-inside text-gray-700">${steps}</ol>
      </div>
      ${r.notes ? `<div class="mb-2"><h3 class="font-semibold mb-1">Notes</h3><p class="text-gray-700">${escapeHtml(r.notes)}</p></div>` : ''}
    </div>
  `;
}

// ==============================
// Modal Logic
// ==============================

document.addEventListener('DOMContentLoaded', function () {
  // Feather icons
  if (typeof feather !== 'undefined') feather.replace();

  // Bind view-recipe buttons
  document.querySelectorAll('.view-recipe').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-id'));
      const recipe = recipes.find(r => r.id === id);
      if (!recipe) return;

      const modal = document.getElementById('recipe-modal');
      const body = document.getElementById('modal-body');
      body.innerHTML = recipeModalHtml(recipe);
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');

      if (typeof feather !== 'undefined') feather.replace();
      const icon = btn.querySelector('i[data-feather]');
      if (icon) icon.classList.add('rotate-90');
    });
  });

  // Close modal
  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('recipe-modal');

  modalClose && modalClose.addEventListener('click', closeModal);
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal.querySelector('.modal-backdrop')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    const modal = document.getElementById('recipe-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.querySelectorAll('.view-recipe i[data-feather]').forEach(i => i.classList.remove('rotate-90'));
  }
});
