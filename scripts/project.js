const recipes = [
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

const recipeDescriptions = {
  "Tuna Salad Wrap": "A healthy and quick tuna salad wrapped in a tortilla.",
  "Vegetable Omelet": "A fluffy omelet packed with fresh vegetables.",
  "Beef Tacos": "Classic beef tacos with your favorite toppings.",
  "Shrimp Fried Rice": "A quick Asian-inspired fried rice with shrimp.",
  "Pancakes": "Fluffy pancakes perfect for breakfast.",
  "Caesar Salad": "A crisp Caesar salad with homemade dressing.",
  "Tomato Basil Soup": "A comforting tomato soup with fresh basil.",
  "BBQ Chicken Pizza": "Pizza topped with BBQ chicken and red onions.",
  "Egg Fried Rice": "Simple and quick egg fried rice.",
  "Avocado Toast": "Toasted bread topped with smashed avocado.",
  "Classic BLT Sandwich": "Bacon, lettuce, and tomato sandwich.",
  "Lemon Garlic Salmon": "Salmon fillet baked with lemon and garlic."
};

const recipeImages = {
  "Tuna Salad Wrap": "images/tuna-wrap.webp",
  "Vegetable Omelet": "images/veggie-omelet.webp",
  "Beef Tacos": "images/beef-tacos.webp",
  "Shrimp Fried Rice": "images/shrimp-fried-rice.webp",
  "Pancakes": "images/pancakes.webp",
  "Caesar Salad": "images/caesar-salad.webp",
  "Tomato Basil Soup": "images/tomato-soup.webp",
  "BBQ Chicken Pizza": "images/bbq-chicken-pizza.webp",
  "Egg Fried Rice": "images/egg-fried-rice.webp",
  "Avocado Toast": "images/avocado-toast.webp",
  "Classic BLT Sandwich": "images/blt-pizza.webp",
  "Lemon Garlic Salmon": "images/lemon-garlic-salmon.webp"
};

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openSelectBar");
  const selectBar = document.getElementById("recipeSelectBar");
  const output = document.getElementById("selectedRecipeShort");

  // Populate select bar
  recipes.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("role", "option");
    li.tabIndex = 0;
    li.addEventListener("click", () => showShort(name));
    li.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") showShort(name);
    });
    selectBar.appendChild(li);
  });

  // Ensure select bar and modal are hidden on load
  selectBar.style.display = "none";
  output.innerHTML = ""; // Clear any previous content

  openBtn.addEventListener("click", () => {
    const expanded = selectBar.style.display === "block";
    selectBar.style.display = expanded ? "none" : "block";
    openBtn.setAttribute("aria-expanded", !expanded);
  });

  // Hide select bar when clicking outside
  document.addEventListener("click", (e) => {
    if (!selectBar.contains(e.target) && e.target !== openBtn) {
      selectBar.style.display = "none";
      openBtn.setAttribute("aria-expanded", "false");
    }
  });

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

    // Save last viewed recipe to localStorage
    localStorage.setItem('lastViewedRecipe', name);

    setTimeout(() => {
      modal.innerHTML = `
        <div class="modal-content">
          <button class="close-modal" aria-label="Close details">&times;</button>
          <img src="${recipeImages[name]}" alt="${name}" width="300" height="300" loading="lazy" style="border-radius:8px;display:block;margin:0 auto 1rem auto;">
          <h3>${name}</h3>
          <p>${recipeDescriptions[name]}</p>
        </div>
      `;
      modal.querySelector('.close-modal').onclick = () => { modal.style.display = 'none'; };
      modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
    }, 1000);

    selectBar.style.display = "none";
    openBtn.setAttribute("aria-expanded", "false");
  }

  // Restore last viewed recipe from localStorage if exists
  const last = localStorage.getItem('lastViewedRecipe');
  if (last && recipes.includes(last)) {
    // Show a message to the user about their last viewed recipe
    const lastMsg = document.createElement('div');
    lastMsg.className = "last-viewed-message";
    lastMsg.textContent = `Welcome back! Your last viewed recipe was: "${last}".`;
    // Insert message at the top of main content
    const main = document.querySelector('main');
    if (main) main.insertBefore(lastMsg, main.firstChild);

    // Optionally, still show the modal for last viewed recipe
    showShort(last);
  }

  // Fade-in with lazy load using Intersection Observer
  function fadeInOnScroll(img) {
    img.classList.add('lazy-fade-img');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Only add loaded after image is loaded
          if (img.complete) {
            img.classList.add('loaded');
          } else {
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            });
          }
          obs.unobserve(img);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(img);
  }

  // Featured image
  const featuredImg = document.querySelector('.featured img');
  if (featuredImg) fadeInOnScroll(featuredImg);

  // Top 3 images
  document.querySelectorAll('.top3-recipe-list img').forEach(fadeInOnScroll);

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
});