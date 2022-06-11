const toggleButton = document.getElementsByClassName('toggle-button')[0]
const lisT = document.getElementsByClassName('list')[0]

toggleButton.addEventListener('click', () => {
	lisT.classList.toggle('active')
})