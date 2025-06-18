const handleClick = async(event) => {
    const productCard = event.target.closest('.product-card')
    const selectedCard = productCard.querySelector('.product-name').textContent
    alert(`You selected the ${selectedCard}. Good choice!`)
}

const cardListener = async() => {
    // event delegation
    const cardContainer = document.querySelector('.product-grid')
    cardContainer.addEventListener('pointerdown', handleClick)
}

cardListener();