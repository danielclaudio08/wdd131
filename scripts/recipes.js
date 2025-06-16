const recipes = [
  "Spaghetti Aglio e Olio",
  "Grilled Cheese Sandwich",
  "Chicken Stir Fry",
  "Tuna Salad Wrap",
  "Vegetable Omelet",
  "Beef Tacos",
  "Shrimp Fried Rice",
  "Pancakes",
  "Caesar Salad",
  "Tomato Basil Soup",
  "BBQ Chicken Pizza",
  "Egg Fried Rice",
  "Avocado Toast",
  "Classic BLT Sandwich",
  "Lemon Garlic Salmon"
];

// Recipe details for pop-up (match names in recipes array)
const recipeDetailsData = {
  "Spaghetti Aglio e Olio": {
    image: "images/spaghetti-aglio.webp",
    alt: "Spaghetti Aglio e Olio",
    description: "A classic Italian pasta dish made with garlic, olive oil, and chili flakes.",
    ingredients: [
      "200g spaghetti",
      "4 cloves garlic, thinly sliced",
      "1/4 cup olive oil",
      "1/2 tsp chili flakes",
      "Salt and pepper to taste",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Heat olive oil in a pan, add garlic and chili flakes, sauté until fragrant.",
      "Add cooked spaghetti to the pan, toss well.",
      "Season with salt, pepper, and parsley. Serve hot."
    ]
  },
  "Grilled Cheese Sandwich": {
    image: "images/grilled-cheese.webp",
    alt: "Grilled Cheese Sandwich",
    description: "A simple yet satisfying sandwich with melted cheese between crispy bread.",
    ingredients: [
      "2 slices of bread",
      "2 slices of cheese",
      "1 tbsp butter"
    ],
    instructions: [
      "Butter one side of each bread slice.",
      "Place cheese between unbuttered sides.",
      "Grill on a skillet until golden brown on both sides."
    ]
  },
  "Chicken Stir Fry": {
    image: "images/chicken-stir-fry.webp",
    alt: "Chicken Stir Fry",
    description: "A quick and healthy stir fry with chicken and mixed vegetables.",
    ingredients: [
      "1 chicken breast, sliced",
      "2 cups mixed vegetables",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "1 tsp garlic, minced"
    ],
    instructions: [
      "Heat oil in a wok, add garlic and chicken, stir fry until cooked.",
      "Add vegetables and soy sauce, stir fry for 3-4 minutes.",
      "Serve hot with rice or noodles."
    ]
  },
  "Tuna Salad Wrap": {
    image: "images/tuna-wrap.webp",
    alt: "Tuna Salad Wrap",
    description: "A healthy and quick tuna salad wrapped in a tortilla.",
    ingredients: [
      "1 can tuna, drained",
      "2 tbsp mayonnaise",
      "1 tbsp chopped celery",
      "1 tortilla wrap",
      "Lettuce leaves"
    ],
    instructions: [
      "Mix tuna, mayonnaise, and celery.",
      "Spread on tortilla, add lettuce, and roll up."
    ]
  },
  "Vegetable Omelet": {
    image: "images/veggie-omelet.webp",
    alt: "Vegetable Omelet",
    description: "A fluffy omelet packed with fresh vegetables.",
    ingredients: [
      "2 eggs",
      "1/4 cup diced bell pepper",
      "1/4 cup diced tomato",
      "1/4 cup spinach",
      "Salt and pepper"
    ],
    instructions: [
      "Beat eggs, add vegetables, salt, and pepper.",
      "Pour into a hot pan and cook until set."
    ]
  },
  "Beef Tacos": {
    image: "images/beef-tacos.webp",
    alt: "Beef Tacos",
    description: "Classic beef tacos with your favorite toppings.",
    ingredients: [
      "200g ground beef",
      "Taco shells",
      "Lettuce, tomato, cheese",
      "Taco seasoning"
    ],
    instructions: [
      "Cook beef with taco seasoning.",
      "Fill shells with beef and toppings."
    ]
  },
  "Shrimp Fried Rice": {
    image: "images/shrimp-fried-rice.webp",
    alt: "Shrimp Fried Rice",
    description: "A quick Asian-inspired fried rice with shrimp.",
    ingredients: [
      "1 cup cooked rice",
      "100g shrimp, peeled",
      "1 egg",
      "2 tbsp soy sauce",
      "Mixed vegetables"
    ],
    instructions: [
      "Scramble egg in a pan, add shrimp and veggies.",
      "Add rice and soy sauce, stir fry until hot."
    ]
  },
  "Pancakes": {
    image: "images/pancakes.webp",
    alt: "Pancakes",
    description: "Fluffy pancakes perfect for breakfast.",
    ingredients: [
      "1 cup flour",
      "1 tbsp sugar",
      "1 cup milk",
      "1 egg",
      "1 tbsp butter"
    ],
    instructions: [
      "Mix all ingredients.",
      "Pour batter onto hot griddle, cook until golden."
    ]
  },
  "Caesar Salad": {
    image: "images/caesar-salad.webp",
    alt: "Caesar Salad",
    description: "A crisp Caesar salad with homemade dressing.",
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Toss lettuce with dressing.",
      "Top with croutons and cheese."
    ]
  },
  "Tomato Basil Soup": {
    image: "images/tomato-soup.webp",
    alt: "Tomato Basil Soup",
    description: "A comforting tomato soup with fresh basil.",
    ingredients: [
      "2 cups tomato puree",
      "1/2 cup cream",
      "Fresh basil",
      "Salt and pepper"
    ],
    instructions: [
      "Heat tomato puree, add cream and basil.",
      "Simmer and season to taste."
    ]
  },
  "BBQ Chicken Pizza": {
    image: "images/bbq-chicken-pizza.webp",
    alt: "BBQ Chicken Pizza",
    description: "Pizza topped with BBQ chicken and red onions.",
    ingredients: [
      "Pizza crust",
      "BBQ sauce",
      "Cooked chicken",
      "Red onion",
      "Mozzarella cheese"
    ],
    instructions: [
      "Spread BBQ sauce on crust.",
      "Add toppings and bake until cheese melts."
    ]
  },
  "Egg Fried Rice": {
    image: "images/egg-fried-rice.webp",
    alt: "Egg Fried Rice",
    description: "Simple and quick egg fried rice.",
    ingredients: [
      "1 cup cooked rice",
      "2 eggs",
      "2 tbsp soy sauce",
      "Green onions"
    ],
    instructions: [
      "Scramble eggs, add rice and soy sauce.",
      "Stir in green onions and serve."
    ]
  },
  "Avocado Toast": {
    image: "images/avocado-toast.webp",
    alt: "Avocado Toast",
    description: "Toasted bread topped with smashed avocado.",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt, pepper, chili flakes"
    ],
    instructions: [
      "Toast bread, smash avocado on top.",
      "Season and serve."
    ]
  },
  "Classic BLT Sandwich": {
    image: "images/blt-pizza.webp",
    alt: "Classic BLT Sandwich",
    description: "Bacon, lettuce, and tomato sandwich.",
    ingredients: [
      "2 slices bread",
      "Bacon strips",
      "Lettuce",
      "Tomato",
      "Mayonnaise"
    ],
    instructions: [
      "Toast bread, spread mayo.",
      "Layer bacon, lettuce, and tomato."
    ]
  },
  "Lemon Garlic Salmon": {
    image: "images/lemon-garlic-salmon.webp",
    alt: "Lemon Garlic Salmon",
    description: "Salmon fillet baked with lemon and garlic.",
    ingredients: [
      "Salmon fillet",
      "Lemon juice",
      "Garlic, minced",
      "Salt and pepper"
    ],
    instructions: [
      "Place salmon on baking sheet.",
      "Top with lemon, garlic, salt, and pepper.",
      "Bake at 400°F (200°C) for 12-15 minutes."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic (same as project.js)
  const menuButton = document.getElementById('menu');
  const nav = document.querySelector('nav');
  function updateMenuIcon() {
    menuButton.textContent = nav.classList.contains('open') ? 'X' : '☰';
  }
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    updateMenuIcon();
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (nav.classList.contains('open')) {
      main.style.transform = 'translateY(250px)';
      footer.style.transform = 'translateY(250px)';
    } else {
      main.style.transform = '';
      footer.style.transform = '';
    }
  });
  updateMenuIcon();

  const recipeOutput = document.getElementById("recipeOutput");
  const lastRecipe = localStorage.getItem("lastRecipe");
  if (lastRecipe) {
    recipeOutput.innerHTML = `<h3 class="random-recipe-link" tabindex="0">${lastRecipe}</h3>`;
  }
  document.getElementById("loadRecipe").addEventListener("click", () => {
    const index = Math.floor(Math.random() * recipes.length);
    recipeOutput.innerHTML = `<h3 class="random-recipe-link" tabindex="0">${recipes[index]}</h3>`;
    localStorage.setItem("lastRecipe", recipes[index]);
  });

  // Pop up details when clicking the random recipe name
  recipeOutput.addEventListener("click", (e) => {
    if (e.target.classList.contains("random-recipe-link")) {
      const name = e.target.textContent;
      showShort(name); // Show the short modal with spinner and name
    }
  });
  recipeOutput.addEventListener("keypress", (e) => {
    if (e.target.classList.contains("random-recipe-link") && (e.key === "Enter" || e.key === " ")) {
      const name = e.target.textContent;
      showShort(name); // Show the short modal with spinner and name
    }
  });

  // Add this function near your other modal functions
  function showShort(name) {
    // Show loading spinner
    let modal = document.getElementById('recipeShortModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'recipeShortModal';
      modal.className = 'recipe-short-modal';
      document.body.appendChild(modal);
    }
    modal.innerHTML = `
      <div class="modal-content">
        <div class="loading-spinner" style="display:flex;justify-content:center;align-items:center;height:200px;">
          <div class="spinner" style="border:8px solid #eee;border-top:8px solid #FCA311;border-radius:50%;width:60px;height:60px;animation:spin 1s linear infinite;"></div>
        </div>
      </div>
    `;
    modal.style.display = 'flex';

    // After 1 second, show the recipe info (if available)
    setTimeout(() => {
      const recipe = recipeDetailsData[name];
      modal.innerHTML = `
        <div class="modal-content">
          <button class="close-modal" aria-label="Close details">&times;</button>
          <h2 class="modal-title">${name}</h2>
          ${recipe && recipe.image ? `<img src="${recipe.image}" alt="${recipe.alt}" class="modal-img" loading="lazy" width="320" height="240">` : ''}
          ${recipe && recipe.description ? `<p class="modal-desc">${recipe.description}</p>` : ''}
          ${recipe && recipe.ingredients ? `
            <h3 class="modal-section-title">Ingredients</h3>
            <ul class="modal-list modal-ingredients">
              ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
          ` : ''}
          ${recipe && recipe.instructions ? `
            <h3 class="modal-section-title">Instructions</h3>
            <ol class="modal-list modal-instructions">
              ${recipe.instructions.map(i => `<li>${i}</li>`).join('')}
            </ol>
          ` : ''}
        </div>
      `;
      modal.querySelector('.close-modal').onclick = () => { modal.style.display = 'none'; };
      modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    }, 1000);
  }

  // === LAZY LOAD & FADE-IN FOR FEATURED RECIPE IMAGE ===
  const featuredImg = document.querySelector('.featured img');
  if (featuredImg) {
    featuredImg.classList.add('lazy-fade-img');
    featuredImg.addEventListener('load', () => {
      featuredImg.classList.add('loaded');
    });
    // If already loaded from cache
    if (featuredImg.complete) {
      featuredImg.classList.add('loaded');
    }
  }
});
