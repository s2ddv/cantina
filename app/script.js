document.addEventListener('DOMContentLoaded', () => {

    const addToCartButtons = document.querySelectorAll('.adicionar-carrinho');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => { 

            const card = button.closest('.card');
            const productName = card.getAttribute('data-name');
            const productPrice = parseFloat(card.getAttribute('data-price'));

            const product = { 
                name: productName,
                price: productPrice,
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product)

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} foi adicionado ao carrinho!`)
        })
    })

    const cardItensContainer = document.getElementById('card-itens-container');
    const cardTotalValue = document.getElementById('card-total-value');
    const checkoutBtn = document.getElementById('checkout-btn');

    if(cardItensContainer) { 
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        if(cart.length == 0) {
            cardItensContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
        } else {
            cardItensContainer.innerHTML = "";
            
            cart.forEach(product => { 
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <span>${product.name}</span>
                <span>R$ ${product.price.toFixed(2)}</span>
            `;

            cardItensContainer.appendChild(cartItem);

            total += product.price;
            })
        }
        cardTotalValue.textContent = `R$ ${total.toFixed(2)}`;
    }

    checkoutBtn.addEventListener('click', () => { 
            const numeroWhatsApp = '5515999999999';
            let mensagem = "Olá! Segue meu pedido! \n\n";
            cart.forEach(product => { 
                mensagem += `- ${product.name} (R$ ${product.price.toFixed(2)})\n`
            });
            mensagem += `\n*Total: R$ ${total.toFixed(2)}*`;

            const urlWhatsApp = `https://wa.me/${15999999999}?text=${encodeURIComponent(mensagem)}`;
            window.open(urlWhatsApp, '_blank');
            localStorage.removeItem('cart');
        });
    const limparTabela = document.getElementById('limpar-pedido');
    if (limparTabela) {
        limparTabela.addEventListener('click', () => { 
            localStorage.removeItem('cart');
            location.reload();
        })
    }
})