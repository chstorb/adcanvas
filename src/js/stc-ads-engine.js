/*!
 * STC Ads Engine
 * Lightweight, framework‑agnostic ad rendering engine.
 * https://chstorb.github.io
 * https://github.com/chstorb/stc-ads-engine
 *
 * Author: Christian Storb
 * License: MIT
 * Version: 1.0.0
 */
(function () {
    "use strict";

    // ----------------------------------------------------
    // 1. Load data (with fallback)
    // ----------------------------------------------------
    async function loadAds() {
        const feedUrl = "https://chstorb.github.io/data.json";
        try {
            const response = await fetch(feedUrl, { cache: "no-store" });
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return await response.json();
        } catch (e) {
            console.warn("STC Ads: Feed konnte nicht geladen werden, Fallback wird genutzt.", e);
            return [
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518055\u0026a=1933231\u0026m=23469',
                    productName: 'Barcarola Club Apartments',
                    awProductId: '37797518055',
                    merchantProductId: '3048',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1680596116_neubarcarola_06.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '1088',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1680596116_neubarcarola_06.jpg\u0026feedId=93280\u0026k=324713b9746ee55cbc7bdbc07d9471ac0d45e968',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518055\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR1088',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518028\u0026a=1933231\u0026m=23469',
                    productName: 'San Miguel\u0026Esmeralda',
                    awProductId: '37797518028',
                    merchantProductId: '2908',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1749110654_S Miguel Park  Foto Principal.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '592',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1749110654_S\u002BMiguel\u002BPark\u002B\u002BFoto\u002BPrincipal.jpg\u0026feedId=93280\u0026k=97dfe8da0c8293ccb44697cb60575a66812479b7',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518028\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR592',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517885\u0026a=1933231\u0026m=23469',
                    productName: 'Creta Star',
                    awProductId: '37797517885',
                    merchantProductId: '981',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1658910783_CRE_1000000280_2707_02.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '651',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1658910783_CRE_1000000280_2707_02.jpg\u0026feedId=93280\u0026k=f5718c012465dfae4bc3cf9f1b360b528fa2783f',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517885\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR651',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518235\u0026a=1933231\u0026m=23469',
                    productName: 'Alexandre La Siesta',
                    awProductId: '37797518235',
                    merchantProductId: '3682',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1652365914_OTS_AMTSES0FGCXX_1.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '912',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1652365914_OTS_AMTSES0FGCXX_1.jpg\u0026feedId=93280\u0026k=4ba1faf607557f9bbbd72163ef979e5904e1fc2e',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518235\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR912',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517984\u0026a=1933231\u0026m=23469',
                    productName: 'Abora Catarina by Lopesan Hotels',
                    awProductId: '37797517984',
                    merchantProductId: '2722',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1573116359_LPA39B_neu2.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '988',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1573116359_LPA39B_neu2.jpg\u0026feedId=93280\u0026k=95fdcfe28f34936adc0ff7b7ea380d04da795aaa',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517984\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR988',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517963\u0026a=1933231\u0026m=23469',
                    productName:
                        'Sol Fuerteventura Jandia \u2013 All suites  - Package Product',
                    awProductId: '37797517963',
                    merchantProductId: '2616',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1362405216_OTS_AMTSES0002_2.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '715',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1362405216_OTS_AMTSES0002_2.jpg\u0026feedId=93280\u0026k=2950e322ac7ad3cb6ac861085048a327cdd43f04',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517963\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR715',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518035\u0026a=1933231\u0026m=23469',
                    productName: 'H10 Suites Lanzarote Gardens',
                    awProductId: '37797518035',
                    merchantProductId: '2999',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1379473433_OTS_AMTSES0073_19.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '961',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1379473433_OTS_AMTSES0073_19.jpg\u0026feedId=93280\u0026k=21fd586f1c4da6114623ca46488b8be6e654897f',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518035\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR961',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518096\u0026a=1933231\u0026m=23469',
                    productName: 'Wave Cala Barca A',
                    awProductId: '37797518096',
                    merchantProductId: '3188',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1666687396_PMI541B_NEU_01.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '843',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1666687396_PMI541B_NEU_01.jpg\u0026feedId=93280\u0026k=a41188e88423fd63eb8850399dbab40f506b63b2',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797518096\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR843',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517897\u0026a=1933231\u0026m=23469',
                    productName: 'Maritimo Beach Hotel (Crete)',
                    awProductId: '37797517897',
                    merchantProductId: '1024',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1648047968_1024_Maritimo_Beach_1.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '501',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1648047968_1024_Maritimo_Beach_1.jpg\u0026feedId=93280\u0026k=6e53b504ad21256e53ad1e1d7078a181d464e890',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517897\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR501',
                    dataFeedId: '93280',
                },
                {
                    awDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517855\u0026a=1933231\u0026m=23469',
                    productName: 'Erato Hotel (Crete) SHotels',
                    awProductId: '37797517855',
                    merchantProductId: '881',
                    merchantImageUrl:
                        'https://eurowingsholidays.wavecdn.net/icmphotels/hlx/960_638/1496335113_CRE_1000000320_2d376ae6fccf1c4eac01c8212f2a6737.jpg',
                    description: '',
                    merchantCategory: '',
                    searchPrice: '447',
                    merchantName: 'Eurowings Holidays DE',
                    merchantId: '23469',
                    categoryName: '',
                    categoryId: '',
                    awImageUrl:
                        'https://images2.productserve.com/?w=200\u0026h=200\u0026bg=white\u0026trim=5\u0026t=letterbox\u0026url=ssl%3Aeurowingsholidays.wavecdn.net%2Ficmphotels%2Fhlx%2F960_638%2F1496335113_CRE_1000000320_2d376ae6fccf1c4eac01c8212f2a6737.jpg\u0026feedId=93280\u0026k=ff1a4a377031d94d1cde7fe01168d9d6e4ac5af8',
                    currency: 'EUR',
                    storePrice: '',
                    deliveryCost: '',
                    merchantDeepLink:
                        'https://www.awin1.com/pclick.php?p=37797517855\u0026a=1933231\u0026m=23469',
                    language: '',
                    lastUpdated: '',
                    displayPrice: 'EUR447',
                    dataFeedId: '93280',
                },
            ];
        }
    }

    // ----------------------------------------------------
    // 2. Theme-System
    // ----------------------------------------------------
    function applyTheme(slot) {
        const theme = slot.dataset.theme || "light";
        slot.classList.add("stc-theme-" + theme);
    }

    // ----------------------------------------------------
    // 3. Layout-Renderer
    // ----------------------------------------------------
    const layouts = {
        // -------------------------
        // LIST
        // -------------------------
        list(slot, ads) {
            slot.innerHTML = ads.map(ad => `
                <div class="stc-ad-card">
                    <a href="${ad.awDeepLink}" target="_blank">
                        <img src="${ad.merchantImageUrl}"
                             alt="${ad.productName}"
                             loading="lazy"
                             decoding="async">
                        <div class="stc-ad-title">${ad.productName}</div>
                        <div class="stc-ad-price">${ad.displayPrice}</div>
                    </a>
                </div>
            `).join("");
        },

        // -------------------------
        // MULTIPLEX
        // -------------------------
        multiplex(slot, ads) {
            slot.innerHTML = `
                <div class="stc-multiplex-grid">
                    ${ads.map(ad => `
                        <div class="stc-multiplex-item">
                            <a href="${ad.awDeepLink}" target="_blank">
                                <img src="${ad.merchantImageUrl}"
                                     alt="${ad.productName}"
                                     loading="lazy"
                                     decoding="async">
                                <div class="stc-multiplex-title">${ad.productName}</div>
                                <div class="stc-multiplex-price">${ad.displayPrice}</div>
                            </a>
                        </div>
                    `).join("")}
                </div>
            `;
        },

        // -------------------------
        // IN-FEED
        // -------------------------
        infeed(slot, ads) {
            slot.innerHTML = ads.map(ad => `
                <div class="stc-infeed-card">
                    <a href="${ad.awDeepLink}" target="_blank" class="stc-infeed-link">
                        <div class="stc-infeed-image-wrapper">
                            <img src="${ad.merchantImageUrl}"
                                 alt="${ad.productName}"
                                 loading="lazy"
                                 decoding="async">
                        </div>
                        <div class="stc-infeed-content">
                            <div class="stc-infeed-title">${ad.productName}</div>
                            <div class="stc-infeed-price">${ad.displayPrice}</div>
                        </div>
                    </a>
                </div>
            `).join("");
        },

        // -------------------------
        // SIDEBAR
        // -------------------------
        sidebar(slot, ads) {
            slot.innerHTML = ads.map(ad => `
                <div class="stc-sidebar-card">
                    <a href="${ad.awDeepLink}" target="_blank">
                        <div class="stc-sidebar-image-wrapper">
                            <img src="${ad.merchantImageUrl}"
                                 alt="${ad.productName}"
                                 loading="lazy"
                                 decoding="async">
                        </div>
                        <div class="stc-sidebar-title">${ad.productName}</div>
                        <div class="stc-sidebar-price">${ad.displayPrice}</div>
                    </a>
                </div>
            `).join("");
        },

        // -------------------------
        // HERO
        // -------------------------
        hero(slot, ads) {
            slot.innerHTML = ads.map(ad => `
                <div class="stc-hero-card">
                    <a href="${ad.awDeepLink}" target="_blank" class="stc-hero-link">
                        <div class="stc-hero-image-wrapper">
                            <img src="${ad.merchantImageUrl}"
                                 alt="${ad.productName}"
                                 loading="lazy"
                                 decoding="async">
                        </div>
                        <div class="stc-hero-content">
                            <div class="stc-hero-title">${ad.productName}</div>
                            <div class="stc-hero-price">${ad.displayPrice}</div>
                        </div>
                    </a>
                </div>
            `).join("");
        },

        // -------------------------
        // CAROUSEL (Endlos + Autoplay)
        // -------------------------
        carousel(slot, ads) {
            const doubled = ads.concat(ads);

            slot.innerHTML = `
                <div class="stc-carousel">
                    <button class="stc-carousel-prev">&#10094;</button>
                    <div class="stc-carousel-track">
                        ${doubled.map(ad => `
                            <div class="stc-carousel-item">
                                <a href="${ad.awDeepLink}" target="_blank">
                                    <img src="${ad.merchantImageUrl}"
                                         alt="${ad.productName}"
                                         loading="lazy"
                                         decoding="async">
                                    <div class="stc-carousel-title">${ad.productName}</div>
                                    <div class="stc-carousel-price">${ad.displayPrice}</div>
                                </a>
                            </div>
                        `).join("")}
                    </div>
                    <button class="stc-carousel-next">&#10095;</button>
                </div>
            `;

            const track = slot.querySelector(".stc-carousel-track");
            const prev = slot.querySelector(".stc-carousel-prev");
            const next = slot.querySelector(".stc-carousel-next");

            const itemWidth = 212; // 200 + 12 margin-right
            const totalItems = doubled.length;
            const half = totalItems / 2;

            let index = 0;

            function scrollToIndex(i, smooth = true) {
                track.scrollTo({
                    left: i * itemWidth,
                    behavior: smooth ? "smooth" : "auto"
                });
            }

            function scrollNext() {
                index++;
                scrollToIndex(index);

                if (index >= half) {
                    setTimeout(function () {
                        index = 0;
                        scrollToIndex(index, false);
                    }, 350);
                }
            }

            function scrollPrev() {
                index--;
                if (index < 0) {
                    index = half - 1;
                    scrollToIndex(index, false);
                }
                scrollToIndex(index);
            }

            next.addEventListener("click", scrollNext);
            prev.addEventListener("click", scrollPrev);

            // Touch-Swipe
            let startX = 0;
            track.addEventListener("touchstart", function (e) {
                startX = e.touches[0].clientX;
            });

            track.addEventListener("touchend", function (e) {
                const endX = e.changedTouches[0].clientX;
                if (endX < startX - 50) scrollNext();
                if (endX > startX + 50) scrollPrev();
            });

            // Autoplay
            const autoplay = slot.dataset.autoplay === "true";
            const interval = parseInt(slot.dataset.interval || "4000", 10);
            let autoplayTimer;

            function startAutoplay() {
                if (!autoplay) return;
                stopAutoplay();
                autoplayTimer = setInterval(scrollNext, interval);
            }

            function stopAutoplay() {
                if (autoplayTimer) {
                    clearInterval(autoplayTimer);
                    autoplayTimer = null;
                }
            }

            if (autoplay) {
                startAutoplay();

                slot.addEventListener("mouseenter", stopAutoplay);
                slot.addEventListener("mouseleave", startAutoplay);

                track.addEventListener("touchstart", stopAutoplay);
                track.addEventListener("touchend", startAutoplay);
            }
        }
    };

    // ----------------------------------------------------
    // 4. Initialization
    // ----------------------------------------------------
    async function init() {
        const ads = await loadAds();
        if (!ads || !ads.length) return;

        const slots = document.querySelectorAll(".stc-ad-slot");
        if (!slots.length) return;

        slots.forEach(function (slot) {
            applyTheme(slot);

            const layout = slot.dataset.layout || "list";
            const count = parseInt(slot.dataset.count || "3", 10);

            const shuffled = ads.slice().sort(function () {
                return Math.random() - 0.5;
            });

            const selected = shuffled.slice(0, count);

            if (layouts[layout]) {
                layouts[layout](slot, selected);
            } else {
                console.warn("STC Ads: Unknown layout:", layout);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
