document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById('productName');
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    // Capitalize first letter of each word in product name
    option.textContent = product.name.replace(/\b\w/g, c => c.toUpperCase());
    productSelect.appendChild(option);
  });
}

// 1️⃣ Initialize display element variable
const reviewsDisplay = document.querySelector(".reviews");

if (reviewsDisplay) {
  // 2️⃣ Get the stored VALUE for the reviewCount-ls KEY in localStorage if it exists. If the reviewCount KEY is missing, then assign 0 to the reviewCount variable.
  let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

  // 3️⃣ Determine if this is the first review or display the number of reviews.
  if (reviewCount === 0) {
    reviewsDisplay.textContent = `This is your first review! Congratulations!`;
  } else {
    reviewsDisplay.textContent = `Reviews submitted: ${reviewCount + 1}`;
  }

  // 4️⃣ increment the number of reviews by one and store the new review total into localStorage, key=reviewCount-ls
  reviewCount++;
  localStorage.setItem("reviewCount-ls", reviewCount);
}