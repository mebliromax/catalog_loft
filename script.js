const appContainer = document.getElementById('app');

const renderSpecs = (specsArray) => {
    return specsArray.map(spec => `<li>${spec}</li>`).join('');
};

const renderBlocks = () => {
    const htmlContent = blocksData.map(block => `
        <div class="container">
            <div class="main-image-wrapper${block.imageContain ? ' main-image-wrapper--contain' : ''}">
                <img src="${block.mainImage}" alt="${block.banner.title}" class="main-image" style="object-position: center ${block.imagePosition};">
            </div>

            <section class="info-banner">
                <h1>${block.banner.title}</h1>
                <p>${block.banner.description}</p>
            </section>

            <section class="products-section">
                ${block.products.map(product => `
                    <article class="product-card${block.products.length === 2 ? ' product-card--wide' : ''}">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                        <div>
                        <h2 class="product-title">${product.title}</h2>
                        <ul class="product-specs">
                            ${renderSpecs(product.specs)}
                        </ul>

                        <div class="price-container">
                            <div class="old-price">${product.oldPrice}</div><br>
                            <div class="new-price">${product.newPrice}</div>
                        </div>
                        </div>
                    </article>
                `).join('')}
            </section>

            <footer class="footer-notice">
                НА ЗАМОВЛЕННЯ ДО 200 000 грн. ДІЄ ПРАЙС ЗІ ЗНИЖКОЮ -10%<br>ЗАМОВЛЕННЯ ВИЩЕ 200 000 грн. ПРОРАХОВУЄТЬСЯ ЗА ІНДИВІДУАЛЬНИМ ПРАЙСОМ
            </footer>
        </div>
    `).join('');

    // Вставляємо згенерований рядок в DOM
    appContainer.innerHTML = htmlContent;
};

renderBlocks();

function applyPageZoom() {
    var scale = Math.min(window.innerWidth / 1000, 1);
    document.querySelectorAll('.container').forEach(function (el) {
        el.style.zoom = scale;
    });
}

window.addEventListener('resize', applyPageZoom);
applyPageZoom();