// --- Data ---
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.5",
        time: "30-40 min",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        location: "Downtown"
    },
    {
        id: 2,
        name: "Burger Joint",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.2",
        time: "25-35 min",
        cuisines: ["Burgers", "American"],
        location: "Westside"
    },
    {
        id: 3,
        name: "Spice Route",
        image: "https://images.unsplash.com/photo-1585937421606-2b48bea670a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.8",
        time: "40-50 min",
        cuisines: ["Indian", "Curries"],
        location: "Eastside"
    },
    {
        id: 4,
        name: "Dragon Wok",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.3",
        time: "35-45 min",
        cuisines: ["Chinese", "Asian"],
        location: "Northside"
    },
    {
        id: 5,
        name: "Sweet Treats",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.7",
        time: "20-30 min",
        cuisines: ["Desserts", "Bakery"],
        location: "Downtown"
    },
    {
        id: 6,
        name: "Brew Cafe",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        rating: "4.6",
        time: "15-25 min",
        cuisines: ["Drinks", "Cafe", "Snacks"],
        location: "Southside"
    }
];

const menuItems = [
    { id: 101, name: "Margherita Pizza", price: 12.99, category: "Pizza", type: "veg", desc: "Classic delight with 100% real mozzarella cheese", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 102, name: "Pepperoni Pizza", price: 14.99, category: "Pizza", type: "nonveg", desc: "Classic pepperoni with extra cheese", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 103, name: "Cheese Burger", price: 8.99, category: "Burgers", type: "nonveg", desc: "Juicy beef patty with cheese and veggies", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 104, name: "Veggie Burger", price: 7.99, category: "Burgers", type: "veg", desc: "Plant-based patty with fresh veggies", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 105, name: "Butter Chicken", price: 16.50, category: "Indian", type: "nonveg", desc: "Tender chicken cooked in rich tomato gravy", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 106, name: "Paneer Tikka", price: 14.00, category: "Indian", type: "veg", desc: "Grilled cottage cheese marinated in spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 107, name: "Hakka Noodles", price: 10.99, category: "Chinese", type: "veg", desc: "Stir-fried noodles with fresh vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 108, name: "Chocolate Lava Cake", price: 6.99, category: "Desserts", type: "veg", desc: "Warm cake with a gooey chocolate center", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 109, name: "Cold Coffee", price: 4.50, category: "Drinks", type: "veg", desc: "Blended iced coffee with ice cream", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
];

// --- State ---
let currentUser = null;
let cart = [];
let currentRestaurant = null;

// --- DOM Elements ---
const stepUserInfo = document.getElementById('step-user-info');
const stepRestaurants = document.getElementById('step-restaurants');
const stepMenu = document.getElementById('step-menu');
const userForm = document.getElementById('user-form');
const navUserLocation = document.getElementById('user-location-display');
const navActions = document.getElementById('nav-actions');
const displayName = document.getElementById('display-name');
const displayLocation = document.getElementById('display-location');
const restaurantsContainer = document.getElementById('restaurants-container');
const searchInput = document.getElementById('restaurant-search');
const menuContainer = document.getElementById('menu-container');
const currRestaurantHeader = document.getElementById('current-restaurant-header');
const backBtn = document.getElementById('back-to-restaurants');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartCount = document.getElementById('cart-count');

// --- Functions ---
function switchStep(stepId) {
    document.querySelectorAll('.step-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle Form Submit
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const city = document.getElementById('user-city').value;

    currentUser = { name, email, city };

    // Update Navbar Navbar
    displayName.textContent = name.split(' ')[0];
    displayLocation.textContent = city;
    navUserLocation.style.display = 'flex';
    navActions.style.display = 'flex';

    // Move to next step
    renderRestaurants();
    switchStep('step-restaurants');
});

// Render Restaurants
function renderRestaurants(query = '') {
    restaurantsContainer.innerHTML = '';

    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.cuisines.some(c => c.toLowerCase().includes(query.toLowerCase()))
    );

    if (filtered.length === 0) {
        restaurantsContainer.innerHTML = '<p>No restaurants found.</p>';
        return;
    }

    filtered.forEach(res => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <div class="res-img-container">
                <img src="${res.image}" alt="${res.name}">
            </div>
            <div class="res-info">
                <div class="res-name">${res.name}</div>
                <div class="res-meta">
                    <span class="res-rating"><i class="fas fa-star"></i> ${res.rating}</span>
                    <span>${res.time}</span>
                </div>
                <div class="res-cuisines">${res.cuisines.join(', ')}</div>
                <button class="btn-view-menu" onclick="openMenu(${res.id})">View Menu</button>
            </div>
        `;
        restaurantsContainer.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    renderRestaurants(e.target.value);
});

// Open Menu
window.openMenu = function (restaurantId) {
    currentRestaurant = restaurants.find(r => r.id === restaurantId);

    // Setup Header
    currRestaurantHeader.innerHTML = `
        <img src="${currentRestaurant.image}" alt="${currentRestaurant.name}" class="rh-img">
        <div class="rh-info">
            <h1>${currentRestaurant.name}</h1>
            <p>${currentRestaurant.cuisines.join(', ')}</p>
            <p><i class="fas fa-map-marker-alt" style="color:var(--primary-color)"></i> ${currentRestaurant.location}</p>
            <p style="margin-top:10px;"><span class="res-rating"><i class="fas fa-star"></i> ${currentRestaurant.rating}</span></p>
        </div>
    `;

    renderMenu('all');

    // Reset filters
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-category="all"]').classList.add('active');

    switchStep('step-menu');
};

// Render Menu Items
function renderMenu(category) {
    menuContainer.innerHTML = '';

    let itemsToRender = menuItems;
    if (category !== 'all') {
        itemsToRender = menuItems.filter(item => item.category === category);
    }

    if (itemsToRender.length === 0) {
        menuContainer.innerHTML = '<p>No items in this category.</p>';
        return;
    }

    itemsToRender.forEach(item => {
        const iconClass = item.type === 'veg' ? 'fa-leaf' : 'fa-drumstick-bite';

        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <div class="food-details">
                <div class="food-type type-${item.type}"><i class="fas ${iconClass}"></i></div>
                <div class="food-name">${item.name}</div>
                <div class="food-price">$${item.price.toFixed(2)}</div>
                <div class="food-desc">${item.desc}</div>
            </div>
            <div class="food-image-actions">
                <img src="${item.image}" alt="${item.name}">
                <button class="btn-add" onclick="addToCart()">ADD</button>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

// Back to restaurants
backBtn.addEventListener('click', () => {
    switchStep('step-restaurants');
});

// Filter click
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
});

// Add to Cart
window.addToCart = function () {
    cart.push(1);
    cartCount.textContent = cart.length;

    // Simple animation for the icon
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
};
