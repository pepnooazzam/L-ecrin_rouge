/**
 * L'Écrin Rouge - Haute Gastronomie & Artisanal Bakes
 * Standalone Master Client Script
 */

(function () {
  'use strict';

  // --- MENU DATA ---
  const DISHES = [
    {
      id: 'bagel-truffle',
      name: 'Artisan Seeded Bagel & Whipped Truffle Fromage',
      frenchName: 'Le Bagel Artisanal aux Graines & Truffe Blanche',
      category: 'artisan-bakes',
      categoryTitle: 'Artisanal Bakes',
      price: 18,
      calories: 340,
      protein: 26,
      carbs: 32,
      fat: 11,
      image: 'img/bagel-truffle.webp',
      dietary: ['high-protein', 'organic'],
      description: 'Hand-shaped high-protein bagel encrusted with organic poppy and toasted black sesame, layered with whipped Périgord white truffle cream cheese, ripe Haas avocado, and garden micro-herbs.',
      ingredients: ['Stone-ground organic flour', 'White truffle cream cheese', 'Poppy seeds', 'Black sesame', 'Haas avocado', 'Micro radish greens']
    },
    {
      id: 'brioche-egg',
      name: 'Golden Brioche Soft-Scrambled Egg & Caviar',
      frenchName: 'Brioche Feuilletée & Œuf Crémeux au Caviar',
      category: 'artisan-bakes',
      categoryTitle: 'Artisanal Bakes',
      price: 24,
      calories: 390,
      protein: 24,
      carbs: 28,
      fat: 16,
      image: 'img/brioche-egg.webp',
      dietary: ['high-protein', 'chef-signature'],
      description: 'Laminated French brioche bun toasted in cultured Normandy butter, filled with velvet pasture-raised scrambled eggs, chives, crème fraîche, and crowned with Royal Baeri caviar.',
      ingredients: ['Normandy cultured butter brioche', 'Pasture-raised eggs', 'Royal Baeri sturgeon caviar', 'Isigny Sainte-Mère crème fraîche', 'Chives']
    },
    {
      id: 'sourdough-boule',
      name: 'Slow-Fermented Boule de Campagne & Smoked Butter',
      frenchName: 'Pain de Campagne au Levain & Beurre Fumé',
      category: 'artisan-bakes',
      categoryTitle: 'Artisanal Bakes',
      price: 14,
      calories: 280,
      protein: 14,
      carbs: 48,
      fat: 4,
      image: 'img/sourdough-boule.webp',
      dietary: ['organic'],
      description: 'Traditional 36-hour wild yeast naturally fermented sourdough boule with blistered caramelized crust and open airy crumb. Served warm with hand-churned smoked sea salt butter.',
      ingredients: ['36-hour wild yeast starter', 'French red wheat flour', 'Guerande sea salt', 'House-smoked Brittany butter']
    },
    {
      id: 'caviar-tartlet',
      name: 'Royal Sturgeon Caviar & Tartlet Crisp',
      frenchName: 'Tartelette Croustillante au Caviar Impérial',
      category: 'starters',
      categoryTitle: 'Petites Assiettes & Caviar',
      price: 42,
      calories: 190,
      protein: 14,
      carbs: 12,
      fat: 9,
      image: 'img/caviar-tartlet.webp',
      dietary: ['chef-signature'],
      description: 'Buckwheat tuile tartlet holding whipped smoked sturgeon mousse, cured quail egg yolk, and generous Imperial Ossetra caviar glistening with edible gold leaf.',
      ingredients: ['Buckwheat crust', 'Smoked sturgeon mousse', 'Imperial Ossetra caviar', 'Confit quail yolk', 'Edible 24k gold leaf']
    },
    {
      id: 'wagyu-rossini',
      name: 'A5 Miyazaki Wagyu Rossini & Truffle Jus',
      frenchName: 'Filet de Bœuf Miyazaki A5 Façon Rossini',
      category: 'entrees',
      categoryTitle: 'Haute Entrées',
      price: 98,
      calories: 680,
      protein: 52,
      carbs: 8,
      fat: 54,
      image: 'img/wagyu-rossini.webp',
      dietary: ['keto', 'chef-signature'],
      description: 'Charcoal-kissed Japanese A5 Wagyu tenderloin topped with pan-seared duck foie gras, resting over a toasted brioche round and finished with 48-hour Périgord black truffle glaze.',
      ingredients: ['A5 Miyazaki beef tenderloin', 'Rougié duck foie gras', 'Black Périgord truffle', 'Veal bone glaze reduction', 'Toasted brioche base']
    },
    {
      id: 'sea-bass',
      name: 'Mediterranean Sea Bass & Saffron Emulsion',
      frenchName: 'Bar de Ligne Rôti & Émulsion au Safran',
      category: 'entrees',
      categoryTitle: 'Haute Entrées',
      price: 56,
      calories: 420,
      protein: 44,
      carbs: 12,
      fat: 18,
      image: 'img/sea-bass.webp',
      dietary: ['high-protein', 'organic'],
      description: 'Pan-seared line-caught wild sea bass over braised baby fennel, charred leeks, and a silky bouillabaisse reduction infused with Iranian saffron and citrus oil.',
      ingredients: ['Wild line-caught sea bass', 'Iranian saffron', 'Braised fennel bulb', 'Baby leeks', 'Bouillabaisse reduction']
    },
    {
      id: 'chocolate-souffle',
      name: 'Valrhona Grand Cru Molten Soufflé',
      frenchName: 'Soufflé Coulant au Chocolat Valrhona Guanaja',
      category: 'desserts',
      categoryTitle: 'Grand Pâtisserie',
      price: 22,
      calories: 410,
      protein: 10,
      carbs: 42,
      fat: 22,
      image: 'img/chocolate-souffle.webp',
      dietary: ['organic'],
      description: '70% Valrhona Guanaja dark chocolate warm soufflé with a molten bittersweet center, accompanied by Madagascar Bourbon vanilla bean bean crème anglaise poured tableside.',
      ingredients: ['Valrhona 70% Guanaja chocolate', 'Madagascar bourbon vanilla', 'Organic farm eggs', 'Cultured cream anglaise']
    },
    {
      id: 'crimson-cocktail',
      name: 'The Crimson Velour Botanique',
      frenchName: 'Le Velours Rouge Fumé aux Botaniques',
      category: 'mixology',
      categoryTitle: 'Cellar & Mixology',
      price: 26,
      calories: 160,
      protein: 1,
      carbs: 11,
      fat: 0,
      image: 'img/crimson-cocktail.webp',
      dietary: ['chef-signature'],
      description: 'Single-estate rye whiskey stirred with wild lingonberry reduction, clarified blood orange, aromatized French vermouth, and cedar smoke captured under a glass bell.',
      ingredients: ['Single-estate rye whiskey', 'Clarified blood orange', 'Wild lingonberry cordial', 'Aromatized vermouth', 'Cedarwood smoke essence']
    }
  ];

  // --- APPLICATION STATE ---
  let cart = [];
  let currentCategory = 'all';
  let currentDietary = 'all';
  let searchQuery = '';
  let activeHeroIndex = 0;
  let appliedPromo = null;

  // Hero Dishes Subset
  const HERO_DISHES = DISHES.filter(d => ['bagel-truffle', 'brioche-egg', 'sourdough-boule'].includes(d.id));

  // --- DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initHeroShowcase();
    renderMenuGrid();
    initFilterTabs();
    initDietaryButtons();
    initSearchInput();
    initCartDrawer();
    initReservationForm();
    initMobileNav();
    initModalHandlers();
    setupSmoothScroll();
  });

  // --- HERO SHOWCASE ---
  function initHeroShowcase() {
    const heroImg = document.getElementById('hero-dish-img');
    const heroTitle = document.getElementById('hero-dish-title');
    const heroFrench = document.getElementById('hero-dish-french');
    const heroDesc = document.getElementById('hero-dish-desc');
    const heroPrice = document.getElementById('hero-dish-price');
    const heroProtein = document.getElementById('hero-dish-protein');
    const heroCarbs = document.getElementById('hero-dish-carbs');
    const heroCals = document.getElementById('hero-dish-cals');
    const heroAddBtn = document.getElementById('hero-add-cart-btn');
    const selectorButtons = document.querySelectorAll('.hero-plate-selector');

    function updateHero(index) {
      activeHeroIndex = index;
      const dish = HERO_DISHES[index];
      if (!dish) return;

      if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
          heroImg.src = dish.image;
          heroImg.alt = dish.name;
          heroImg.style.opacity = '1';
          heroImg.style.transform = 'scale(1)';
        }, 150);
      }

      if (heroTitle) heroTitle.textContent = dish.name;
      if (heroFrench) heroFrench.textContent = dish.frenchName;
      if (heroDesc) heroDesc.textContent = dish.description;
      if (heroPrice) heroPrice.textContent = `$${dish.price}`;
      if (heroProtein) heroProtein.textContent = `${dish.protein}g`;
      if (heroCarbs) heroCarbs.textContent = `${dish.carbs}g`;
      if (heroCals) heroCals.textContent = `${dish.calories} kcal`;

      selectorButtons.forEach((btn, idx) => {
        if (idx === index) {
          btn.classList.add('border-[#B81D24]', 'bg-[#1C1719]');
          btn.classList.remove('border-[#2A2A33]', 'bg-[#14141A]');
        } else {
          btn.classList.remove('border-[#B81D24]', 'bg-[#1C1719]');
          btn.classList.add('border-[#2A2A33]', 'bg-[#14141A]');
        }
      });
    }

    selectorButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => updateHero(idx));
    });

    if (heroAddBtn) {
      heroAddBtn.addEventListener('click', () => {
        const dish = HERO_DISHES[activeHeroIndex];
        if (dish) addToCart(dish);
      });
    }

    updateHero(0);
  }

  // --- MENU GRID RENDERING ---
  function renderMenuGrid() {
    const grid = document.getElementById('menu-items-grid');
    const countLabel = document.getElementById('menu-items-count');
    if (!grid) return;

    const filtered = DISHES.filter(dish => {
      const matchCat = currentCategory === 'all' || dish.category === currentCategory;
      const matchDiet = currentDietary === 'all' || dish.dietary.includes(currentDietary);
      const matchSearch = !searchQuery ||
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.frenchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchDiet && matchSearch;
    });

    if (countLabel) {
      countLabel.textContent = `${filtered.length} Artisan Course${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center border border-[#2A2A33] rounded-2xl bg-[#14141A] p-8">
          <p class="text-xl font-serif text-[#C5A059] mb-2">No Culinary Selections Found</p>
          <p class="text-sm text-stone-400">Try adjusting your dietary filter or search terms to explore our kitchen's repertoire.</p>
          <button id="reset-filters-btn" class="mt-4 px-5 py-2 rounded-lg bg-[#B81D24] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D1252D] transition-colors">
            Reset All Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentDietary = 'all';
          searchQuery = '';
          const searchInp = document.getElementById('menu-search-input');
          if (searchInp) searchInp.value = '';
          updateActiveFilterTabs();
          renderMenuGrid();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map(dish => `
      <div class="group flex flex-col bg-[#14141A] border border-[#2A2A33] hover:border-[#B81D24]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#B81D24]/10">
        <div class="relative h-56 overflow-hidden bg-[#0E0E12] cursor-pointer dish-modal-trigger" data-dish-id="${dish.id}">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-black/20"></div>
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/70 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/30">
            ${dish.categoryTitle}
          </span>
          <div class="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-semibold text-stone-200">
            <span class="text-emerald-400 font-bold">${dish.protein}g</span>
            <span class="text-stone-400">protein</span>
          </div>
        </div>

        <div class="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="font-serif text-lg text-white font-semibold group-hover:text-[#FAF6F0] transition-colors">
                ${dish.name}
              </h3>
              <span class="text-lg font-serif font-bold text-[#C5A059] shrink-0">$${dish.price}</span>
            </div>
            <p class="font-serif text-xs italic text-[#B81D24] mb-2.5">${dish.frenchName}</p>
            <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">${dish.description}</p>
          </div>

          <div class="pt-3 border-t border-[#2A2A33]/80 flex items-center justify-between gap-3">
            <button class="text-xs text-stone-400 hover:text-white underline underline-offset-4 dish-modal-trigger cursor-pointer" data-dish-id="${dish.id}">
              Provenance & Details
            </button>
            <button class="add-to-cart-btn px-4 py-2 rounded-lg bg-[#B81D24] hover:bg-[#D1252D] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#B81D24]/20" data-dish-id="${dish.id}">
              <span>+ Tasting Order</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click triggers
    document.querySelectorAll('.dish-modal-trigger').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-dish-id');
        const dish = DISHES.find(d => d.id === id);
        if (dish) openDishModal(dish);
      });
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = btn.getAttribute('data-dish-id');
        const dish = DISHES.find(d => d.id === id);
        if (dish) addToCart(dish);
      });
    });
  }

  // --- FILTERS & SEARCH ---
  function initFilterTabs() {
    const tabs = document.querySelectorAll('.menu-category-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        currentCategory = tab.getAttribute('data-category') || 'all';
        updateActiveFilterTabs();
        renderMenuGrid();
      });
    });
  }

  function updateActiveFilterTabs() {
    const tabs = document.querySelectorAll('.menu-category-tab');
    tabs.forEach(tab => {
      const cat = tab.getAttribute('data-category');
      if (cat === currentCategory) {
        tab.classList.add('bg-[#B81D24]', 'text-white');
        tab.classList.remove('bg-[#1C1719]', 'text-stone-300', 'hover:text-white');
      } else {
        tab.classList.remove('bg-[#B81D24]', 'text-white');
        tab.classList.add('bg-[#1C1719]', 'text-stone-300', 'hover:text-white');
      }
    });

    const dietBtns = document.querySelectorAll('.dietary-filter-btn');
    dietBtns.forEach(btn => {
      const diet = btn.getAttribute('data-diet');
      if (diet === currentDietary) {
        btn.classList.add('border-[#C5A059]', 'text-[#C5A059]', 'bg-[#C5A059]/10');
        btn.classList.remove('border-[#2A2A33]', 'text-stone-400');
      } else {
        btn.classList.remove('border-[#C5A059]', 'text-[#C5A059]', 'bg-[#C5A059]/10');
        btn.classList.add('border-[#2A2A33]', 'text-stone-400');
      }
    });
  }

  function initDietaryButtons() {
    const dietBtns = document.querySelectorAll('.dietary-filter-btn');
    dietBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentDietary = btn.getAttribute('data-diet') || 'all';
        updateActiveFilterTabs();
        renderMenuGrid();
      });
    });
  }

  function initSearchInput() {
    const inp = document.getElementById('menu-search-input');
    if (!inp) return;
    inp.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderMenuGrid();
    });
  }

  // --- CART MANAGEMENT ---
  function addToCart(dish) {
    const existing = cart.find(item => item.dish.id === dish.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ dish, quantity: 1 });
    }
    updateCartUI();
    showToast(`Added "${dish.name}" to your tasting order`);
  }

  function removeFromCart(dishId) {
    cart = cart.filter(item => item.dish.id !== dishId);
    updateCartUI();
  }

  function updateQuantity(dishId, delta) {
    const item = cart.find(i => i.dish.id === dishId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(dishId);
    } else {
      updateCartUI();
    }
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
    const totalProtein = cart.reduce((sum, item) => sum + item.dish.protein * item.quantity, 0);
    const totalCals = cart.reduce((sum, item) => sum + item.dish.calories * item.quantity, 0);

    const discountRate = appliedPromo ? appliedPromo.discount : 0;
    const discountAmount = subtotal * discountRate;
    const total = Math.max(0, subtotal - discountAmount);

    // Badges
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = totalCount;
      if (totalCount > 0) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    const itemsContainer = document.getElementById('cart-items-list');
    const emptyState = document.getElementById('cart-empty-state');
    const filledState = document.getElementById('cart-content-state');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const discountRow = document.getElementById('cart-discount-row');
    const totalEl = document.getElementById('cart-total');
    const proteinEl = document.getElementById('cart-total-protein');
    const calsEl = document.getElementById('cart-total-cals');
    const giftEl = document.getElementById('cart-promo-gift');

    if (!itemsContainer) return;

    if (totalCount === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      if (filledState) filledState.classList.add('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      if (filledState) filledState.classList.remove('hidden');

      itemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 p-3 bg-[#17171D] border border-[#2A2A33] rounded-xl">
          <img src="${item.dish.image}" alt="${item.dish.name}" class="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#2A2A33]" />
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-white truncate">${item.dish.name}</h4>
            <p class="text-xs text-[#C5A059] font-serif">$${item.dish.price} each</p>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-[10px] text-emerald-400">${item.dish.protein * item.quantity}g protein</span>
              <span class="text-stone-600">•</span>
              <span class="text-[10px] text-stone-400">${item.dish.calories * item.quantity} kcal</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 bg-[#0E0E12] px-2 py-1 rounded-lg border border-[#2A2A33]">
            <button class="cart-qty-minus text-stone-400 hover:text-white px-1 font-bold text-sm" data-dish-id="${item.dish.id}">−</button>
            <span class="text-xs font-semibold px-1 text-white">${item.quantity}</span>
            <button class="cart-qty-plus text-stone-400 hover:text-white px-1 font-bold text-sm" data-dish-id="${item.dish.id}">+</button>
          </div>
        </div>
      `).join('');

      itemsContainer.querySelectorAll('.cart-qty-minus').forEach(b => {
        b.addEventListener('click', () => updateQuantity(b.getAttribute('data-dish-id'), -1));
      });
      itemsContainer.querySelectorAll('.cart-qty-plus').forEach(b => {
        b.addEventListener('click', () => updateQuantity(b.getAttribute('data-dish-id'), 1));
      });

      if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
      if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
      if (proteinEl) proteinEl.textContent = `${totalProtein}g`;
      if (calsEl) calsEl.textContent = `${totalCals} kcal`;

      if (discountRate > 0) {
        if (discountRow) discountRow.classList.remove('hidden');
        if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
        if (giftEl && appliedPromo.gift) {
          giftEl.classList.remove('hidden');
          giftEl.innerHTML = `<span class="text-[#C5A059] font-serif">★ Included Gift:</span> ${appliedPromo.gift}`;
        }
      } else {
        if (discountRow) discountRow.classList.add('hidden');
        if (giftEl) giftEl.classList.add('hidden');
      }
    }
  }

  function initCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const closeBtn = document.getElementById('close-cart-btn');
    const openBtns = document.querySelectorAll('.open-cart-btn');
    const promoForm = document.getElementById('cart-promo-form');
    const promoInp = document.getElementById('cart-promo-input');
    const promoFeedback = document.getElementById('cart-promo-feedback');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    function openDrawer() {
      if (drawer && overlay) {
        overlay.classList.remove('hidden');
        setTimeout(() => {
          overlay.classList.add('opacity-100');
          drawer.classList.remove('translate-x-full');
        }, 10);
      }
    }

    function closeDrawer() {
      if (drawer && overlay) {
        drawer.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        setTimeout(() => {
          overlay.classList.add('hidden');
        }, 300);
      }
    }

    openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    if (promoForm && promoInp) {
      promoForm.addEventListener('submit', e => {
        e.preventDefault();
        const code = promoInp.value.trim().toUpperCase();
        if (code === 'HAUTE20') {
          appliedPromo = {
            code: 'HAUTE20',
            discount: 0.20,
            gift: 'Complimentary Dom Pérignon 2013 Brut Bottle for your table'
          };
          if (promoFeedback) {
            promoFeedback.textContent = '✓ 20% Haute VIP Privilege & Champagne Gift Applied!';
            promoFeedback.className = 'text-xs text-emerald-400 mt-1';
          }
          updateCartUI();
          showToast('VIP Privilege Code HAUTE20 Applied!');
        } else {
          if (promoFeedback) {
            promoFeedback.textContent = 'Invalid reservation code. Use "HAUTE20" for VIP tier.';
            promoFeedback.className = 'text-xs text-rose-400 mt-1';
          }
        }
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        closeDrawer();
        const resSection = document.getElementById('reservation');
        if (resSection) {
          resSection.scrollIntoView({ behavior: 'smooth' });
        }
        showToast('Tasting selections paired with your reservation!');
      });
    }
  }

  // --- DISH MODAL ---
  function initModalHandlers() {
    const modal = document.getElementById('dish-detail-modal');
    const overlay = document.getElementById('dish-modal-overlay');
    const closeBtn = document.getElementById('dish-modal-close');

    function closeModal() {
      if (modal && overlay) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
  }

  function openDishModal(dish) {
    const modal = document.getElementById('dish-detail-modal');
    const overlay = document.getElementById('dish-modal-overlay');
    if (!modal || !overlay) return;

    document.getElementById('modal-dish-img').src = dish.image;
    document.getElementById('modal-dish-title').textContent = dish.name;
    document.getElementById('modal-dish-french').textContent = dish.frenchName;
    document.getElementById('modal-dish-desc').textContent = dish.description;
    document.getElementById('modal-dish-price').textContent = `$${dish.price}`;
    document.getElementById('modal-dish-protein').textContent = `${dish.protein}g`;
    document.getElementById('modal-dish-carbs').textContent = `${dish.carbs}g`;
    document.getElementById('modal-dish-cals').textContent = `${dish.calories} kcal`;

    const ingredientsContainer = document.getElementById('modal-dish-ingredients');
    if (ingredientsContainer) {
      ingredientsContainer.innerHTML = dish.ingredients.map(ing => `
        <li class="flex items-center gap-2 text-xs text-stone-300">
          <span class="w-1.5 h-1.5 rounded-full bg-[#B81D24]"></span>
          <span>${ing}</span>
        </li>
      `).join('');
    }

    const modalAddBtn = document.getElementById('modal-add-to-cart');
    if (modalAddBtn) {
      modalAddBtn.onclick = () => {
        addToCart(dish);
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      };
    }

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  }

  // --- RESERVATION SYSTEM ---
  function initReservationForm() {
    const form = document.getElementById('table-reservation-form');
    const confirmationBox = document.getElementById('reservation-confirmation');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('res-guest-name')?.value || 'Honored Guest';
      const date = document.getElementById('res-date')?.value || 'Selected Date';
      const time = document.getElementById('res-time')?.value || '19:30';
      const guests = document.getElementById('res-guests')?.value || '2';
      const salon = document.getElementById('res-salon')?.value || 'The Crimson Salon';

      const refNumber = 'ECR-' + Math.floor(100000 + Math.random() * 900000);

      if (confirmationBox) {
        confirmationBox.innerHTML = `
          <div class="p-6 rounded-2xl bg-gradient-to-br from-[#1C1719] to-[#121217] border border-[#C5A059]/40 text-center animate-fade-in">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 mb-3">
              Table Reservation Confirmed
            </span>
            <h3 class="font-serif text-2xl text-white font-bold mb-1">We Await Your Presence, ${name}</h3>
            <p class="font-serif text-[#C5A059] text-sm italic mb-4">Confirmation Ref: ${refNumber}</p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#0E0E12] rounded-xl border border-[#2A2A33] text-left text-xs mb-4">
              <div>
                <span class="text-stone-500 uppercase block text-[10px] tracking-wider">Date</span>
                <span class="text-stone-200 font-semibold">${date}</span>
              </div>
              <div>
                <span class="text-stone-500 uppercase block text-[10px] tracking-wider">Seating</span>
                <span class="text-stone-200 font-semibold">${time}</span>
              </div>
              <div>
                <span class="text-stone-500 uppercase block text-[10px] tracking-wider">Party</span>
                <span class="text-stone-200 font-semibold">${guests} Guests</span>
              </div>
              <div>
                <span class="text-stone-500 uppercase block text-[10px] tracking-wider">Room</span>
                <span class="text-stone-200 font-semibold">${salon}</span>
              </div>
            </div>

            <p class="text-xs text-stone-400 mb-4">A bespoke confirmation concierge note has been dispatched to your email. Our sommelier will prepare your cellar selections.</p>
            <button id="book-another-btn" class="px-5 py-2 rounded-lg bg-[#2A2A33] hover:bg-[#3A3A44] text-xs font-semibold uppercase text-stone-200 transition-colors">
              Make Another Reservation
            </button>
          </div>
        `;
        confirmationBox.classList.remove('hidden');
        form.classList.add('hidden');

        document.getElementById('book-another-btn')?.addEventListener('click', () => {
          form.reset();
          confirmationBox.classList.add('hidden');
          form.classList.remove('hidden');
        });
      }

      showToast(`Reservation Confirmed for ${name}! Ref: ${refNumber}`);
    });
  }

  // --- MOBILE NAV ---
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.getElementById('close-mobile-nav');

    function toggle(open) {
      if (drawer && overlay) {
        if (open) {
          overlay.classList.remove('hidden');
          setTimeout(() => {
            overlay.classList.add('opacity-100');
            drawer.classList.remove('-translate-x-full');
          }, 10);
        } else {
          drawer.classList.add('-translate-x-full');
          overlay.classList.remove('opacity-100');
          setTimeout(() => {
            overlay.classList.add('hidden');
          }, 300);
        }
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', () => toggle(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
    if (overlay) overlay.addEventListener('click', () => toggle(false));

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });
  }

  // --- TOAST SYSTEM ---
  function showToast(msg) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141A] border border-[#B81D24] shadow-2xl text-stone-100 text-xs font-semibold transform translate-y-4 opacity-0 transition-all duration-300';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-[#B81D24] animate-pulse"></span>
      <span>${msg}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- SMOOTH SCROLL ---
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

})();
