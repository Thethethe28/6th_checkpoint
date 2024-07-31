let total = 0;
let basketsCount = 0;
let socksCount = 0;
let bagCount = 0;

const PRICES = {
  BASKETS: 100,
  SOCKS: 20,
  BAG: 50,
};

// Spots
const totalSpot = document.querySelector("span.total");
const basketsSpotCount = document.getElementById("baskets-count");
const socksSpotCount = document.getElementById("socks-count");
const bagSpotCount = document.getElementById("bag-count");

// Add buttons
const addBasketsBtn = document.getElementById("add-baskets-btn");
const addSocksBtn = document.getElementById("add-socks-btn");
const addBagBtn = document.getElementById("add-bag-btn");

// Remove button
const rmBasketsBtn = document.getElementById("rm-baskets-btn");
const rmSocksBtn = document.getElementById("rm-socks-btn");
const rmBagBtn = document.getElementById("rm-bag-btn");

// Trash buttons
const delAllBaskets = document.getElementById("delete-baskets");
const delAllSocks = document.getElementById("delete-socks");
const delAllBag = document.getElementById("delete-bag");

// Like button
const likeBtns = document.querySelectorAll(".like-btn");

// Functions
function init() {
  totalSpot.textContent = total + " $";
}

init();

function increaseTotal(value) {
  total += value; // total = total + value
  totalSpot.textContent = total + " $";
}

function decreaseTotal(value) {
  if (total > 0) {
    total -= value;
    totalSpot.textContent = total + " $";
  }
}

// Baskets part
addBasketsBtn.addEventListener("click", () => {
  basketsCount++;
  basketsSpotCount.textContent = basketsCount;
  increaseTotal(PRICES.BASKETS);
});

rmBasketsBtn.addEventListener("click", () => {
  if (basketsCount > 0) {
    basketsCount--;
    basketsSpotCount.textContent = basketsCount;
    decreaseTotal(PRICES.BASKETS);
  }
});

delAllBaskets.onclick = () => {
  decreaseTotal(basketsCount * PRICES.BASKETS);
  basketsCount = 0;
  basketsSpotCount.textContent = basketsCount;
};
// Baskets part end

// Socks part
addSocksBtn.onclick = () => {
  socksCount++;
  socksSpotCount.textContent = socksCount;
  increaseTotal(PRICES.SOCKS);
};

rmSocksBtn.addEventListener("click", () => {
  if (socksCount > 0) {
    socksCount--;
    socksSpotCount.textContent = socksCount;
    decreaseTotal(PRICES.SOCKS);
  }
});

delAllSocks.addEventListener("click", () => {
  decreaseTotal(socksCount * PRICES.SOCKS);
  socksCount = 0;
  socksSpotCount.textContent = socksCount;
});
// Socks part end

// Bag part
addBagBtn.addEventListener("click", () => {
  bagCount++;
  bagSpotCount.textContent = bagCount;
  increaseTotal(PRICES.BAG);
});

rmBagBtn.addEventListener("click", () => {
  if (bagCount > 0) {
    bagCount--;
    bagSpotCount.textContent = bagCount;
    decreaseTotal(PRICES.BAG);
  }
});

delAllBag.addEventListener("click", () => {
  decreaseTotal(bagCount * PRICES.BAG);
  bagCount = 0;
  bagSpotCount.textContent = bagCount;
});
// Bag part end

/*for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", () => {
        //...
    })
} = */
likeBtns.forEach(function (likeBtn) {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
  });
});
