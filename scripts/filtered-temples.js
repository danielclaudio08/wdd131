const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

function updateMenuIcon() {
  menuButton.textContent = nav.classList.contains('open') ? '❌' : '☰';
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "images/washington-dc-temple.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "images/mexico-city-temple.jpg"
  },
  //: Added 3 new temple objects
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "images/salt-lake-temple-filtered.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
      "images/tokyo-japan-temple-filtered.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "images/paris-france-temple-filtered.jpg"
  },
];

function getTempleYear(temple) {
  // Example: "1986, January, 10"
  return parseInt(temple.dedicated.split(",")[0]);
}

// Helper: Create a temple card element
function createTempleCard(temple) {
  const card = document.createElement('section');
  card.classList.add('temple-card');

  const name = document.createElement('h2');
  name.textContent = temple.templeName;

  // Details container
  const details = document.createElement('div');
  details.classList.add('temple-details');

  details.innerHTML = `
    <span class="label">Location:</span> ${temple.location}<br>
    <span class="label">Dedicated:</span> ${temple.dedicated}<br>
    <span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft
  `;

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  // Add fade-in effect when image loads
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });

  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(img);

  return card;
}

// Filtering logic
function filterTemples(criteria) {
  let filtered;
  switch (criteria) {
    case 'old':
      filtered = temples.filter(t => getTempleYear(t) < 1900);
      break;
    case 'new':
      filtered = temples.filter(t => getTempleYear(t) > 2000);
      break;
    case 'large':
      filtered = temples.filter(t => t.area > 90000);
      break;
    case 'small':
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Add event listeners to navigation menu items for filtering
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove 'active' class from all menu items
    document.querySelectorAll('.navigation li').forEach(li => li.classList.remove('active'));
    // Add 'active' class to the clicked menu item
    this.parentElement.classList.add('active');

    // Set the heading text
    const heading = document.querySelector('main h2');
    heading.textContent = this.textContent;

    // Determine filter based on link text
    const filter = this.textContent.trim().toLowerCase();
    filterTemples(filter);
  });
});

// Update displayTemples to use the .gallery container
function displayTemples(templeList) {
  const container = document.querySelector('.gallery');
  container.innerHTML = '';
  templeList.forEach(temple => {
    container.appendChild(createTempleCard(temple));
  });
}

// Initial display
displayTemples(temples);

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;