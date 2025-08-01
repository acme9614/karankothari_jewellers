const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  drawer.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// drawers menu
function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToCatalogues() {
  Toaster.postMessage("navigateToCatalogues");
}

function navigateToQuickPurchase() {
  Toaster.postMessage("navigateToQuickPurchase");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}


// Branding Swiper
const brandingSwiper = new Swiper(".brandingSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  speed : 2000,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


AOS.init({
        duration: 800,
        once: false,
      });


 const items = [
        {
          label: "Scheme",
          icon: "https://cdn-icons-png.flaticon.com/128/10150/10150740.png",
          action: "navigateToScheme()",
        },

          {
          label: "Catalogues",
          icon: "https://cdn-icons-png.flaticon.com/128/29/29341.png",
          action: "navigateToCatalogues()",
        },

          {
          label: "Quick Purchase",
          icon: "https://cdn-icons-png.flaticon.com/128/1019/1019709.png",
          action: "navigateToQuickPurchase()",
        },
        {
          label: "Bank",
          icon: "https://cdn-icons-png.flaticon.com/128/522/522554.png",
          action: "navigateToBankDetails()",
        },
        {
          label: "KYC",
          icon: "https://cdn-icons-png.flaticon.com/128/18282/18282110.png",
          action: "navigateToKyc()",
        },
        {
          label: "Rate",
          icon: "https://cdn-icons-png.flaticon.com/128/592/592015.png",
          action: "navigateToRate()",
        },
        {
          label: "Records",
          icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
          action: "navigateSchemeRecords()",
        },
        {
          label: "Card",
          icon: "https://cdn-icons-png.flaticon.com/128/3037/3037255.png",
          action: "navigateToCustomerCard()",
        },
        {
          label: "History",
          icon: "https://cdn-icons-png.flaticon.com/128/3503/3503786.png",
          action: "navigateTransactionHistory()",
        },
        {
          label: "Order",
          icon: "https://cdn-icons-png.flaticon.com/128/10597/10597732.png",
          action: "navigateToMyOrder()",
        },
        {
          label: "Profile",
          icon: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png",
          action: "navigateToUserProfile()",
        },
        {
          label: "Gold",
          icon: "https://cdn-icons-png.flaticon.com/128/1473/1473430.png",
          action: "navigateToDigitalGold()",
        },
        {
          label: "Panchang",
          icon: "https://cdn-icons-png.flaticon.com/128/3013/3013143.png",
          action: "navigateToPanchang()",
        },
        {
          label: "Settings",
          icon: "https://cdn-icons-png.flaticon.com/128/2099/2099058.png",
          action: "navigateToSetting()",
        },
      ];

      const container = document.getElementById("tabGrid");

      items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = `relative w-[140px] md:w-[140px] h-[140px] cursor-pointer text-center ${
          index >= 6 ? "hidden mobile-hidden md:block" : ""
        }`;
        div.setAttribute("onclick", item.action);

        div.innerHTML = `
        
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M256,0 C260,40 280,40 300,60 C350,80 400,60 420,100
                   C440,140 420,180 460,200 C500,220 500,292 460,312
                   C420,332 440,372 420,412 C400,452 350,432 300,452
                   C280,472 260,472 256,512 C252,472 232,472 212,452
                   C162,432 112,452 92,412 C72,372 92,332 52,312
                   C12,292 12,220 52,200 C92,180 72,140 92,100
                   C112,60 162,80 212,60 C232,40 252,40 256,0 Z"
                fill="#50304B"/>
        </svg>
        <img src="${item.icon}" alt="${item.label}" class="absolute top-[28px] left-[52px] md:left-[52px] w-[40px] h-[40px] invert" />
        <div class="absolute bottom-[24px] md:bottom-[20px] left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-semibold mb-2">
          ${item.label}
        </div>
      `;
        container.appendChild(div);
      });

      const toggleButton = document.getElementById("toggleButton");
      const toggleIcon = document.getElementById("toggleIcon");
      let expanded = false;

      toggleButton.addEventListener("click", () => {
        expanded = !expanded;
        document.querySelectorAll(".mobile-hidden").forEach((el) => {
          el.classList.toggle("hidden");
        });

        toggleButton.innerHTML = expanded
          ? `<svg class="w-10 h-10 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>`
          : `<svg class="w-10 h-10 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>`;
      });