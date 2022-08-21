const burgerBtn = document.querySelector('.burger-btn')
const burgerModal = document.querySelector('.burger-modal')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerModal.classList.toggle('active')
})