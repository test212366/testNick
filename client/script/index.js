import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const main = () => {
	//show elements in scroll 

	const onEntry = entry => entry.forEach(change =>  change.isIntersecting && change.target.classList.add('element-show'))
	 
	const observer = new IntersectionObserver(onEntry, {threshold: [0.5] }),
		elements = document.querySelectorAll('.element-animation')
	 
	for (const elm of elements) observer.observe(elm)
	 


	
	//setAttribute for theme application
	document.documentElement.setAttribute('data-theme', 'dark')

 

	const changeThemeButton = document.getElementById('theme'),
		letterButton = document.querySelector('.virtual__letter'),
		aboutBlock = document.querySelector('.about'),
		aboutButton = document.getElementById('buttonAbout'),
		main = document.querySelector('main'),
		body = document.body

	let themeIsDark = true,
		modalIsActive = false 


	//dinamic generated modal window
	main.insertAdjacentHTML('afterbegin', `
		<section class="modal">
			<div class="modal__overlay"></div>
			<div class="modal__content">
				<div class="swiper slider__custom">
					<div class="swiper-wrapper">
						<div class="swiper-slide">Slide 1</div>
						 
					</div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
				 
			</div>
		</section>
	`)
	const overlay = document.querySelector('.modal__overlay'),
		modalContent = document.querySelector('.modal__content')
		
		//generated slider
	 	new Swiper('.swiper', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			 }
		})

	//functions events
	const setShowModalLetter = () => {
			if(modalIsActive) {
				body.style.overflow = 'auto'
				body.style.paddingRight = '0px'
				overlay.classList.remove('active')
				modalContent.classList.remove('active')
			} else {
				body.style.overflow = 'hidden'
				body.style.paddingRight = '8px'
				overlay.classList.add('active')
				modalContent.classList.add('active')
			}
			modalIsActive = !modalIsActive
		},
		setTheme = () => {
 			if(themeIsDark) document.documentElement.setAttribute('data-theme', 'light')
			else document.documentElement.setAttribute('data-theme', 'dark')
			themeIsDark = !themeIsDark
		},
		scrollToAbout = () => {
			aboutBlock.scrollIntoView({
				behavior: 'smooth'
			})
		},
		generatedLetter = () => document.querySelector('.swiper-wrapper').innerHTML = `<div class="swiper-slide"><iframe width="700px" height="800px" src="./assets/Letter of Recommendation.pdf"></iframe></div>`
	
 
	//event click letter button and change show modal
	letterButton.addEventListener('click', () => {
		generatedLetter()
		setShowModalLetter()
	})
	overlay.addEventListener('click', setShowModalLetter)
	//event change theme
	changeThemeButton.addEventListener('click', setTheme)
	//event scroll about
	aboutButton.addEventListener('click', scrollToAbout)
}
document.addEventListener('DOMContentLoaded', main)
