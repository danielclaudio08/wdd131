// Dynamic: Show a random tip at the top each time the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu logic (same as recipes.js)
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

  // --- Random Tip ---
  const allTips = [
    `"Prep all your ingredients before you start cooking for a smoother process."`,
    `"Use a sharp knife for safer and faster chopping."`,
    `"Clean as you go to save time after meals."`,
    `"Double recipes and freeze leftovers for busy days."`,
    `"Taste as you cook and adjust seasoning gradually."`,
    `"Use kitchen scissors to quickly cut herbs and greens."`,
    `"Store fresh herbs in a glass of water in the fridge to keep them longer."`,
    `"Let meat rest after cooking for juicier results."`,
    `"Use a damp towel under your cutting board to keep it from slipping."`,
    `"Batch-cook grains and proteins for easy meal assembly."`
  ];
  const randomTip = allTips[Math.floor(Math.random() * allTips.length)];
  const introSection = document.querySelector('.tips-intro');
  if (introSection) {
    const tipDiv = document.createElement('div');
    tipDiv.className = "random-tip";
    tipDiv.innerHTML = `<strong>Tip of the Day:</strong> <span>${randomTip}</span>`;
    introSection.insertAdjacentElement("afterend", tipDiv);
  }

  // Feedback form handler
  const feedbackForm = document.querySelector('.feedback-form');
  const reviewsDisplay = document.querySelector('.reviews');
  if (feedbackForm && reviewsDisplay) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent HTTP POST

      // Optionally, get form values
      const name = feedbackForm.name.value.trim();
      const tip = feedbackForm.tip.value.trim();

      // Save count to localStorage
      let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
      reviewCount++;
      localStorage.setItem("reviewCount-ls", reviewCount);

      // Show thank you message and update count
      reviewsDisplay.textContent = name
        ? `Thank you, ${name}! Tips submitted: ${reviewCount}`
        : `Thank you! Tips submitted: ${reviewCount}`;

      // Optionally, reset the form
      feedbackForm.reset();
    });

    // Show current count on load
    let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
    if (reviewCount === 0) {
      reviewsDisplay.textContent = `Be the first to share a tip!`;
    } else {
      reviewsDisplay.textContent = `Tips submitted: ${reviewCount}`;
    }
  }
});