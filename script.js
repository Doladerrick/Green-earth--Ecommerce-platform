   // ===========================================
    // PRODUCT DATA
    // Edit this array to add your own products.
    // Replace the image paths with your own files.
    // ===========================================
    const PRODUCTS = [

      // ── FURNITURE ──
      {
        id: 1,
        name: "Woven Rattan Armchair",
        price: 189,
        category: "Furniture",
        image: "images/katsia-jazwinska-eNi6006DeCo-unsplash.jpg",  // ← replace with your image
        description: "Handcrafted from sustainably sourced rattan. Ergonomically designed with a cushioned seat made from organic cotton.",
        rating: 4.8,
        tags: ["eco-certified", "bestseller"]
      },
      {
        id: 2,
        name: "Solid Oak Side Table",
        price: 215,
        category: "Furniture",
        image: "images/ryan-riggins-9v7UJS92HYc-unsplash.jpg",
        description: "FSC-certified solid oak with a hand-rubbed natural oil finish. Sourced from responsibly managed forests.",
        rating: 4.9,
        tags: ["eco-certified", "bestseller"]
      },
      {
        id: 3,
        name: "Reclaimed Wood Coffee Table",
        price: 295,
        category: "Furniture",
        image: "images/rizky-subagja-1k7TnX5GAww-unsplash.jpg",
        description: "Handcrafted from reclaimed elm wood with steel hairpin legs. Every table has unique grain character.",
        rating: 4.9,
        tags: ["eco-certified", "new"]
      },

      // ── HOME DÉCOR ──
      {
        id: 4,
        name: "Macramé Wall Hanging",
        price: 58,
        category: "Home Décor",
        image: "images/toa-heftiba-rbjVlMegyJc-unsplash.jpg",
        description: "Handmade by artisans using 100% organic unbleached cotton rope. Each piece is unique.",
        rating: 4.5,
        tags: ["eco-certified"]
      },
      {
        id: 5,
        name: "Pressed Flower Art Frame",
        price: 65,
        category: "Home Décor",
        image: "images/pedro-forester-da-silva-gA0ZmVvlr38-unsplash.jpg",
        description: "Botanical pressed flower art set in a sustainably sourced oak frame. Genuine dried wildflowers arranged by hand.",
        rating: 4.6,
        tags: ["new"]
      },
      {
        id: 6,
        name: "Beeswax Candle Collection",
        price: 38,
        category: "Home Décor",
        image: "images/alicia-christin-gerald-vVizq_1y5Jo-unsplash.jpg",
        description: "Set of four pure beeswax pillar candles. Burns cleaner than paraffin and naturally honey-scented.",
        rating: 4.7,
        tags: ["eco-certified", "bestseller"]
      },

      // ── LIGHTING ──
      {
        id: 7,
        name: "Minimalist Wooden Desk Lamp",
        price: 95,
        category: "Lighting",
        image: "images/annie-spratt-iH-oF8ZxAvE-unsplash.jpg",
        description: "FSC-certified walnut wood lamp with a recycled fabric shade. Compatible with LED bulbs.",
        rating: 4.6,
        tags: ["new"]
      },
      {
        id: 8,
        name: "Bamboo Pendant Light",
        price: 130,
        category: "Lighting",
        image: "images/alexander-van-steenberge-wzspAjf7oio-unsplash.jpg",
        description: "Woven bamboo pendant shade with natural linen cord. Creates warm dappled light patterns.",
        rating: 4.7,
        tags: ["eco-certified"]
      },

      // ── STORAGE ──
      {
        id: 9,
        name: "Bamboo Bookshelf",
        price: 145,
        category: "Storage",
        image: "images/max-chen-HASGBhsSFGY-unsplash.jpg",
        description: "Five-tier bookshelf constructed from moso bamboo with no harmful adhesives used.",
        rating: 4.7,
        tags: ["eco-certified", "new"]
      },
      {
        id: 10,
        name: "Jute Storage Baskets",
        price: 29,
        category: "Storage",
        image: "images/emvnmov-X_3dqc3sa5E-unsplash.jpg",
        description: "Woven jute baskets with cotton rope handles. Biodegradable and perfectly sized for shelves.",
        rating: 4.3,
        tags: ["eco-certified"]
      },

      // ── KITCHEN & DINING ──
      {
        id: 11,
        name: "Bamboo Cutting Board Set",
        price: 45,
        category: "Kitchen & Dining",
        image: "images/in-tr-ng-d-ng-hJWFm3PFgRU-unsplash.jpg",
        description: "Set of three bamboo cutting boards in graduated sizes. Naturally antimicrobial surface.",
        rating: 4.6,
        tags: ["eco-certified", "bestseller"]
      },
      {
        id: 12,
        name: "Recycled Glass Tumblers",
        price: 32,
        category: "Kitchen & Dining",
        image: "images/laura-marks-pU3AGjsPTAM-unsplash.jpg",
        description: "Set of four handblown tumblers made from 100% recycled glass. Each piece is unique.",
        rating: 4.5,
        tags: ["eco-certified"]
      },

      // ── TEXTILES ──
      {
        id: 13,
        name: "Organic Cotton Throw Blanket",
        price: 76,
        category: "Textiles",
        image: "images/rodrigo-rodrigues-wolf-r-t--VL8oiHYaKE-unsplash.jpg",
        description: "GOTS-certified organic cotton blanket woven in a herringbone pattern. Plant-based dyes.",
        rating: 4.8,
        tags: ["eco-certified", "bestseller"]
      },
      {
        id: 14,
        name: "Linen Duvet Cover Set",
        price: 124,
        category: "Textiles",
        image: "images/aromateec-FYaaWYcbPOY-unsplash.jpg",
        description: "Stone-washed linen duvet and two pillowcases. European flax requiring no irrigation to grow.",
        rating: 4.8,
        tags: ["eco-certified"]
      },
      {
        id: 15,
        name: "Handwoven Seagrass Rug",
        price: 168,
        category: "Textiles",
        image: "images/pexels-hasi-m-palta-2160223734-36576011.jpg",
        description: "Naturally woven seagrass rug with a cotton border backing. One of the most eco-friendly flooring options.",
        rating: 4.5,
        tags: ["eco-certified"]
      },

      // ── PLANTS & PLANTERS ──
      {
        id: 16,
        name: "Terracotta Planter Set",
        price: 34,
        category: "Plants & Planters",
        image: "images/art-and-soil-bangalore-b1P399HKvMA-unsplash.jpg",
        description: "Set of three hand-thrown terracotta planters in graduating sizes.",
        rating: 4.4,
        tags: ["bestseller"]
      },
      {
        id: 17,
        name: "Indoor Plant Stand Trio",
        price: 79,
        category: "Plants & Planters",
        image: "images/elly-m-aPNuQojvZkE-unsplash.jpg",
        description: "Set of three solid teak plant stands in varying heights. Teak sourced from plantation forests.",
        rating: 4.5,
        tags: ["new", "eco-certified"]
      },

      // ── BATHROOM ──
      {
        id: 18,
        name: "Organic Cotton Towel Set",
        price: 55,
        category: "Bathroom",
        image: "images/the-blowup-4dUC7Fine5g-unsplash.jpg",
        description: "Set of two GOTS-certified organic cotton bath towels. Thick, absorbent and free from synthetic dyes.",
        rating: 4.7,
        tags: ["eco-certified"]
      },
      {
        id: 19,
        name: "Bamboo Bathroom Accessories",
        price: 42,
        category: "Bathroom",
        image: "images/rachel-beck-eC06lZsnfu0-unsplash.jpg",
        description: "Five-piece bamboo bathroom set: soap dish, toothbrush holder, cup, cotton bud pot and tray.",
        rating: 4.6,
        tags: ["eco-certified", "bestseller"]
      },

      // ── SUSTAINABLE LIVING ──
      {
        id: 20,
        name: "Beeswax Food Wraps",
        price: 18,
        category: "Sustainable Living",
        image: "images/jack-cole-UlPIZi9hONI-unsplash.jpg",
        description: "Set of six reusable beeswax food wraps. Replaces single-use plastic wrap entirely.",
        rating: 4.8,
        tags: ["eco-certified", "bestseller"]
      },
      {
        id: 21,
        name: "Compostable Bin Liner Pack",
        price: 12,
        category: "Sustainable Living",
        image: "images/irham-setyaki-HWVDLZK9YRU-unsplash.jpg",
        description: "Pack of 50 fully compostable bin liners made from cornstarch. Home compostable within 12 weeks.",
        rating: 4.4,
        tags: ["eco-certified"]
      }

    ];

    // ===========================================
    // ITEMS PER PAGE
    // ===========================================
    const ITEMS_PER_PAGE = 8;

    // ===========================================
    // STATE MANAGER (cart + wishlist via LocalStorage)
    // ===========================================
    const State = (() => {
      let _cart      = JSON.parse(localStorage.getItem('ge_cart')       || '[]');
      let _wishlist  = JSON.parse(localStorage.getItem('ge_wishlist')   || '[]');
      let _lastOrder = JSON.parse(localStorage.getItem('ge_last_order') || 'null');

      const save = () => {
        localStorage.setItem('ge_cart',     JSON.stringify(_cart));
        localStorage.setItem('ge_wishlist', JSON.stringify(_wishlist));
      };

      return {
        getCart:      () => _cart,
        getWishlist:  () => _wishlist,
        getLastOrder: () => _lastOrder,

        addToCart(id, qty = 1) {
          const existing = _cart.find(i => i.id === id);
          if (existing) existing.qty += qty;
          else _cart.push({ id, qty });
          save();
          updateBadges();
        },
        removeFromCart(id) {
          _cart = _cart.filter(i => i.id !== id);
          save();
          updateBadges();
        },
        updateQty(id, qty) {
          const item = _cart.find(i => i.id === id);
          if (item) { item.qty = Math.max(1, qty); save(); updateBadges(); }
        },
        clearCart() { _cart = []; save(); updateBadges(); },

        toggleWishlist(id) {
          const idx = _wishlist.indexOf(id);
          if (idx === -1) _wishlist.push(id);
          else _wishlist.splice(idx, 1);
          save();
          updateBadges();
          return idx === -1; // true = added
        },
        isWishlisted: id => _wishlist.includes(id),

        saveOrder(order) {
          _lastOrder = order;
          localStorage.setItem('ge_last_order', JSON.stringify(order));
        },

        cartTotal() {
          return _cart.reduce((sum, i) => {
            const p = PRODUCTS.find(p => p.id === i.id);
            return sum + (p ? p.price * i.qty : 0);
          }, 0);
        },
        cartCount() {
          return _cart.reduce((sum, i) => sum + i.qty, 0);
        }
      };
    })();

    // ===========================================
    // FILTER / SORT STATE
    // ===========================================
    let filterState = {
      search:     '',
      category:   'All',
      sort:       '',
      priceRange: '',
      page:       1
    };

    let currentDetailProduct = null;

    // ===========================================
    // PAGE ROUTING
    // ===========================================
    function showPage(page, productId) {
      document.getElementById('catalog-page').style.display   = page === 'catalog'  ? '' : 'none';
      document.getElementById('product-detail').style.display = page === 'detail'   ? '' : 'none';
      document.getElementById('checkout').style.display       = page === 'checkout' ? '' : 'none';

      if (page === 'catalog')             renderCatalog();
      if (page === 'detail' && productId) renderDetail(productId);
      if (page === 'checkout')            renderCheckout();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ===========================================
    // CATALOG
    // ===========================================
    function getFilteredProducts() {
      let products = [...PRODUCTS];

      if (filterState.search) {
        const q = filterState.search.toLowerCase();
        products = products.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }

      if (filterState.category && filterState.category !== 'All') {
        products = products.filter(p => p.category === filterState.category);
      }

      if (filterState.priceRange) {
        const [min, max] = filterState.priceRange.split('-').map(Number);
        products = products.filter(p => p.price >= min && p.price <= max);
      }

      if      (filterState.sort === 'price-asc')   products.sort((a, b) => a.price - b.price);
      else if (filterState.sort === 'price-desc')  products.sort((a, b) => b.price - a.price);
      else if (filterState.sort === 'name-asc')    products.sort((a, b) => a.name.localeCompare(b.name));
      else if (filterState.sort === 'name-desc')   products.sort((a, b) => b.name.localeCompare(a.name));
      else if (filterState.sort === 'rating-desc') products.sort((a, b) => b.rating - a.rating);

      return products;
    }

    function renderCatalog() {
      syncCategoryPills();
      renderProducts();
    }

    function syncCategoryPills() {
      document.querySelectorAll('#category-pills .pill').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === filterState.category);
      });
    }

    function setCategory(cat) {
      filterState.category = cat;
      filterState.page = 1;
      renderCatalog();
    }

    function handleSearch() {
      filterState.search = document.getElementById('search-input').value;
      filterState.page = 1;
      renderProducts();
    }

    function handleSort() {
      filterState.sort = document.getElementById('sort-select').value;
      renderProducts();
    }

    function handleFilter() {
      filterState.priceRange = document.getElementById('price-filter').value;
      filterState.page = 1;
      renderProducts();
    }

    function renderProducts() {
      const all        = getFilteredProducts();
      const total      = all.length;
      const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
      if (filterState.page > totalPages) filterState.page = 1;

      const start = (filterState.page - 1) * ITEMS_PER_PAGE;
      const paged = all.slice(start, start + ITEMS_PER_PAGE);

      document.getElementById('results-info').textContent =
        total + ' product' + (total !== 1 ? 's' : '');

      const grid = document.getElementById('product-grid');

      if (paged.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <p class="empty-icon">🌿</p>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>`;
      } else {
        grid.innerHTML = paged.map(p => buildProductCard(p)).join('');
      }

      renderPagination(totalPages);
    }

    function buildProductCard(p) {
      const wished  = State.isWishlisted(p.id);
      const tagHtml = (p.tags || []).map(t =>
        `<span class="tag tag-${t.replace(/[^a-z]/g, '')}">${t}</span>`
      ).join('');

      return `
        <article class="product-card" onclick="showPage('detail', ${p.id})">
          <div class="card-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="card-tags">${tagHtml}</div>
            <button
              class="wish-btn ${wished ? 'wishlisted' : ''}"
              onclick="event.stopPropagation(); toggleWish(${p.id}, this)"
              title="Save to wishlist">
              ${wished ? '♥' : '♡'}
            </button>
          </div>
          <div class="card-body">
            <p class="card-category">${p.category}</p>
            <h2 class="card-name">${p.name}</h2>
            <p class="card-rating">★ ${p.rating}</p>
            <div class="card-footer">
              <p class="card-price">£${p.price}</p>
              <button onclick="event.stopPropagation(); quickAddToCart(${p.id})">
                Add to Cart
              </button>
            </div>
          </div>
        </article>`;
    }

    function quickAddToCart(id) {
      State.addToCart(id, 1);
      const p = PRODUCTS.find(x => x.id === id);
      showToast(p.name + ' added to cart');
    }

    function toggleWish(id, btn) {
      const added = State.toggleWishlist(id);
      btn.textContent = added ? '♥' : '♡';
      btn.classList.toggle('wishlisted', added);
      showToast(added ? 'Added to wishlist' : 'Removed from wishlist');
    }

    function renderPagination(totalPages) {
      const el = document.getElementById('pagination');
      if (totalPages <= 1) { el.innerHTML = ''; return; }

      let html = '';
      if (filterState.page > 1)
        html += `<button onclick="goToPage(${filterState.page - 1})">‹ Prev</button>`;

      for (let i = 1; i <= totalPages; i++) {
        html += `<button class="${i === filterState.page ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
      }

      if (filterState.page < totalPages)
        html += `<button onclick="goToPage(${filterState.page + 1})">Next ›</button>`;

      el.innerHTML = html;
    }

    function goToPage(p) {
      filterState.page = p;
      renderProducts();
      document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
    }

    // ===========================================
    // PRODUCT DETAIL
    // ===========================================
    function renderDetail(id) {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) { showPage('catalog'); return; }
      currentDetailProduct = p;

      document.getElementById('detail-img').src               = p.image;
      document.getElementById('detail-img').alt               = p.name;
      document.getElementById('detail-category').textContent  = p.category;
      document.getElementById('detail-name').textContent      = p.name;
      document.getElementById('detail-price').textContent     = '£' + p.price;
      document.getElementById('detail-desc').textContent      = p.description;
      document.getElementById('detail-qty').value             = 1;

      document.getElementById('detail-rating').innerHTML =
        '<span>★ ' + p.rating + '</span>';

      document.getElementById('detail-tags').innerHTML = (p.tags || []).map(t =>
        `<span class="tag tag-${t.replace(/[^a-z]/g, '')}">${t}</span>`
      ).join('');

      updateDetailWishBtn();

      // Related products (same category, excluding current)
      const related = PRODUCTS
        .filter(x => x.category === p.category && x.id !== p.id)
        .slice(0, 4);

      document.getElementById('related-grid').innerHTML =
        related.map(r => buildProductCard(r)).join('');
    }

    function changeDetailQty(delta) {
      const input = document.getElementById('detail-qty');
      input.value = Math.max(1, parseInt(input.value || 1) + delta);
    }

    function clampQty() {
      const input = document.getElementById('detail-qty');
      input.value = Math.max(1, Math.min(99, parseInt(input.value || 1)));
    }

    function addDetailToCart() {
      if (!currentDetailProduct) return;
      const qty = parseInt(document.getElementById('detail-qty').value);
      State.addToCart(currentDetailProduct.id, qty);
      showToast(currentDetailProduct.name + ' added to cart');
    }

    function toggleDetailWish() {
      if (!currentDetailProduct) return;
      State.toggleWishlist(currentDetailProduct.id);
      updateDetailWishBtn();
    }

    function updateDetailWishBtn() {
      if (!currentDetailProduct) return;
      const btn = document.getElementById('detail-wish-btn');
      if (btn) {
        btn.textContent = State.isWishlisted(currentDetailProduct.id)
          ? '♥ Saved'
          : '♡ Save to Wishlist';
      }
    }

    // ===========================================
    // CART SIDEBAR
    // ===========================================
    function openCart() {
      renderCartSidebar();
      document.getElementById('cart-sidebar').classList.add('open');
      document.getElementById('overlay').classList.add('open');
    }

    function renderCartSidebar() {
      const cart    = State.getCart();
      const listEl  = document.getElementById('cart-items-list');
      const totalEl = document.getElementById('cart-total-amount');

      if (cart.length === 0) {
        listEl.innerHTML = `
          <div class="empty-state">
            <p class="empty-icon">🛒</p>
            <h3>Your cart is empty</h3>
            <p>Add some eco-friendly items!</p>
          </div>`;
      } else {
        listEl.innerHTML = cart.map(item => {
          const p = PRODUCTS.find(x => x.id === item.id);
          if (!p) return '';
          return `
            <div class="cart-item">
              <img src="${p.image}" alt="${p.name}" class="cart-item-img">
              <div class="cart-item-info">
                <p class="cart-item-name">${p.name}</p>
                <p class="cart-item-price">£${(p.price * item.qty).toFixed(2)}</p>
                <div class="cart-item-controls">
                  <button onclick="updateCartQty(${p.id}, ${item.qty - 1})">−</button>
                  <span>${item.qty}</span>
                  <button onclick="updateCartQty(${p.id}, ${item.qty + 1})">+</button>
                  <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
                </div>
              </div>
            </div>`;
        }).join('');
      }

      totalEl.textContent = '£' + State.cartTotal().toFixed(2);
    }

    function updateCartQty(id, qty) {
      if (qty < 1) State.removeFromCart(id);
      else         State.updateQty(id, qty);
      renderCartSidebar();
    }

    function removeFromCart(id) {
      State.removeFromCart(id);
      renderCartSidebar();
    }

    function goToCheckout() {
      if (State.getCart().length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      closeAll();
      showPage('checkout');
    }

    // ===========================================
    // WISHLIST SIDEBAR
    // ===========================================
    function openWishlist() {
      renderWishlistSidebar();
      document.getElementById('wishlist-sidebar').classList.add('open');
      document.getElementById('overlay').classList.add('open');
    }

    function renderWishlistSidebar() {
      const wishlist = State.getWishlist();
      const listEl   = document.getElementById('wishlist-items-list');

      if (wishlist.length === 0) {
        listEl.innerHTML = `
          <div class="empty-state">
            <p class="empty-icon">♡</p>
            <h3>Wishlist is empty</h3>
            <p>Save items you love!</p>
          </div>`;
        return;
      }

      listEl.innerHTML = wishlist.map(id => {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return '';
        return `
          <div class="cart-item">
            <img
              src="${p.image}"
              alt="${p.name}"
              class="cart-item-img"
              onclick="closeAll(); showPage('detail', ${p.id})"
              style="cursor:pointer"
            >
            <div class="cart-item-info">
              <p class="cart-item-name">${p.name}</p>
              <p class="cart-item-price">£${p.price}</p>
              <div class="cart-item-controls">
                <button onclick="quickAddToCart(${p.id})">Add to Cart</button>
                <button class="remove-btn" onclick="removeWish(${p.id})">Remove</button>
              </div>
            </div>
          </div>`;
      }).join('');
    }

    function removeWish(id) {
      State.toggleWishlist(id);
      renderWishlistSidebar();
      updateBadges();
    }

    // ===========================================
    // CHECKOUT
    // ===========================================
    let checkoutStep = 1;
    let checkoutData = {};

    function renderCheckout() {
      checkoutStep = 1;
      checkoutData = {};
      renderCheckoutSteps();
      renderCheckoutContent();
    }

    function renderCheckoutSteps() {
      const steps = ['Review Cart', 'Your Details', 'Confirm Order'];
      document.getElementById('checkout-steps').innerHTML = steps.map((s, i) => {
        const n   = i + 1;
        const cls = n < checkoutStep ? 'done' : n === checkoutStep ? 'active' : '';
        return `<div class="step ${cls}">
          <span class="step-num">${n < checkoutStep ? '✓' : n}</span>
          <span>${s}</span>
        </div>`;
      }).join('<span class="step-divider">›</span>');
    }

    function renderCheckoutContent() {
      const el   = document.getElementById('checkout-content');
      const cart = State.getCart();

      // ── Step 1: Cart Review ──
      if (checkoutStep === 1) {
        const itemsHtml = cart.map(item => {
          const p = PRODUCTS.find(x => x.id === item.id);
          return `<div class="order-item">
            <span>${p.name} × ${item.qty}</span>
            <span>£${(p.price * item.qty).toFixed(2)}</span>
          </div>`;
        }).join('');

        el.innerHTML = `
          <div class="checkout-card">
            <h2>Review Your Cart</h2>
            <div class="order-summary">
              ${itemsHtml}
              <div class="order-total">
                <span>Total</span>
                <span>£${State.cartTotal().toFixed(2)}</span>
              </div>
            </div>
            <div class="checkout-nav">
              <button onclick="showPage('catalog')">← Continue Shopping</button>
              <button onclick="nextCheckoutStep()">Next →</button>
            </div>
          </div>`;

      // ── Step 2: Customer Details Form ──
      } else if (checkoutStep === 2) {
        el.innerHTML = `
          <div class="checkout-card">
            <h2>Your Details</h2>
            <div class="form-grid">
              <div class="form-field">
                <label for="cf-first">First Name</label>
                <input id="cf-first" type="text" placeholder="Jane" value="${checkoutData.firstName || ''}">
                <span class="error-msg" id="e-first"></span>
              </div>
              <div class="form-field">
                <label for="cf-last">Last Name</label>
                <input id="cf-last" type="text" placeholder="Smith" value="${checkoutData.lastName || ''}">
                <span class="error-msg" id="e-last"></span>
              </div>
              <div class="form-field full">
                <label for="cf-email">Email Address</label>
                <input id="cf-email" type="email" placeholder="jane@example.com" value="${checkoutData.email || ''}">
                <span class="error-msg" id="e-email"></span>
              </div>
              <div class="form-field full">
                <label for="cf-addr">Delivery Address</label>
                <input id="cf-addr" type="text" placeholder="123 Green Lane" value="${checkoutData.address || ''}">
                <span class="error-msg" id="e-addr"></span>
              </div>
              <div class="form-field">
                <label for="cf-city">City</label>
                <input id="cf-city" type="text" placeholder="London" value="${checkoutData.city || ''}">
                <span class="error-msg" id="e-city"></span>
              </div>
              <div class="form-field">
                <label for="cf-post">Postcode</label>
                <input id="cf-post" type="text" placeholder="EC1A 1BB" value="${checkoutData.postcode || ''}">
                <span class="error-msg" id="e-post"></span>
              </div>
            </div>
            <div class="checkout-nav">
              <button onclick="prevCheckoutStep()">← Back</button>
              <button onclick="validateAndNext()">Review Order →</button>
            </div>
          </div>`;

      // ── Step 3: Order Confirmation Preview ──
      } else if (checkoutStep === 3) {
        const itemsHtml = cart.map(item => {
          const p = PRODUCTS.find(x => x.id === item.id);
          return `<div class="order-item">
            <span>${p.name} × ${item.qty}</span>
            <span>£${(p.price * item.qty).toFixed(2)}</span>
          </div>`;
        }).join('');

        el.innerHTML = `
          <div class="checkout-card">
            <h2>Confirm Your Order</h2>
            <div class="delivery-details">
              <h3>Delivering to</h3>
              <p>${checkoutData.firstName} ${checkoutData.lastName}</p>
              <p>${checkoutData.address}</p>
              <p>${checkoutData.city}, ${checkoutData.postcode}</p>
              <p>${checkoutData.email}</p>
            </div>
            <div class="order-summary">
              ${itemsHtml}
              <div class="order-total">
                <span>Total</span>
                <span>£${State.cartTotal().toFixed(2)}</span>
              </div>
            </div>
            <div class="checkout-nav">
              <button onclick="prevCheckoutStep()">← Back</button>
              <button onclick="placeOrder()">Place Order 🌿</button>
            </div>
          </div>`;
      }
    }

    function nextCheckoutStep() {
      checkoutStep++;
      renderCheckoutSteps();
      renderCheckoutContent();
      document.querySelector('.checkout-wrap').scrollIntoView({ behavior: 'smooth' });
    }

    function prevCheckoutStep() {
      checkoutStep--;
      renderCheckoutSteps();
      renderCheckoutContent();
    }

    function validateAndNext() {
      const fields = [
        { id: 'cf-first', errId: 'e-first', key: 'firstName', msg: 'First name is required' },
        { id: 'cf-last',  errId: 'e-last',  key: 'lastName',  msg: 'Last name is required' },
        { id: 'cf-email', errId: 'e-email', key: 'email',     msg: 'Valid email is required',
          validate: v => /\S+@\S+\.\S+/.test(v) },
        { id: 'cf-addr',  errId: 'e-addr',  key: 'address',   msg: 'Address is required' },
        { id: 'cf-city',  errId: 'e-city',  key: 'city',      msg: 'City is required' },
        { id: 'cf-post',  errId: 'e-post',  key: 'postcode',  msg: 'Postcode is required' },
      ];

      let valid = true;

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        const val   = input.value.trim();
        const ok    = val && (f.validate ? f.validate(val) : true);

        if (!ok) {
          errEl.textContent = f.msg;
          valid = false;
        } else {
          errEl.textContent    = '';
          checkoutData[f.key] = val;
        }
      });

      if (valid) nextCheckoutStep();
    }

    function placeOrder() {
      const orderNum = 'GE-' + Date.now().toString().slice(-6);
      const order = {
        id:    orderNum,
        items: State.getCart(),
        total: State.cartTotal(),
        date:  new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
        ...checkoutData
      };

      State.saveOrder(order);
      State.clearCart();
      updateBadges();

      document.getElementById('checkout-steps').innerHTML = '';
      document.getElementById('checkout-content').innerHTML = `
        <div class="confirmation">
          <p class="confirm-icon">🌿</p>
          <h2>Thank you, ${order.firstName}!</h2>
          <p>Your order has been placed. We will send confirmation to <strong>${order.email}</strong> shortly.</p>
          <p>Order reference: <strong>${order.id}</strong> — ${order.date}</p>
          <button onclick="showPage('catalog')">Continue Shopping →</button>
        </div>`;
    }

    // ===========================================
    // SHARED UTILITIES
    // ===========================================
    function closeAll() {
      document.getElementById('cart-sidebar').classList.remove('open');
      document.getElementById('wishlist-sidebar').classList.remove('open');
      document.getElementById('overlay').classList.remove('open');
    }

    function updateBadges() {
      const cartCount = State.cartCount();
      const wishCount = State.getWishlist().length;

      const cb = document.getElementById('cart-badge');
      cb.textContent   = cartCount;
      cb.style.display = cartCount > 0 ? 'inline' : 'none';

      const wb = document.getElementById('wish-badge');
      wb.textContent   = wishCount;
      wb.style.display = wishCount > 0 ? 'inline' : 'none';
    }

    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast     = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }

    // ===========================================
    // INIT
    // ===========================================
    document.addEventListener('DOMContentLoaded', () => {
      showPage('catalog');
      updateBadges();
    });
