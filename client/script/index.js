import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const main = () => {
	//show elements in scroll 

	const onEntry = entry => entry.forEach(change =>  change.isIntersecting && change.target.classList.add('element-show'))
	 
	const observer = new IntersectionObserver(onEntry, {threshold: [0.5] }),
		elements = document.querySelectorAll('.element-animation')
	 
	for (const elm of elements) observer.observe(elm)
	 


	
	//setAttribute for theme application
	document.documentElement.setAttribute('data-theme', 'dark')

	const nowescapeProjects = [
		{
			img: './assets/Home Search Dropdown.png',
			name: 'Home Search Dropdown'
		},
		{
			img: './assets/Search Result.png',
			name: 'Search Result'
		},
		{
			img: './assets/Room Booking Payment.png',
			name: 'Room Booking Payment'
		},
		{
			img: './assets/Room Page.png',
			name: 'Room Page'
		},
		{
			img: './assets/Basics.png',
			name: 'Basics'
		},
		{
			img: './assets/Calendar Available.png',
			name: 'Calendar Available'
		},
		{
			img: './assets/Reservation.png',
			name: 'Reservation'
		},
		{
			img: './assets/Landing Page.png',
			name: 'Landing Page'
		},
	],
		freelanceProjects = [
			{
				img: './assets/App for London Array company.png',
				name: 'App for London Array company'
			},
			{
				img: './assets/Social app for commerce and charity.png',
				name: 'Social app for commerce and charity'
			},
			{
				img: './assets/App for tenants to easly ren their landlord.png',
				name: 'App for tenants to easly ren their landiord'
			},
			{
				img: './assets/Day time party booking app.png',
				name: 'Day time party booking app'
			},
			{
				img: './assets/1 page website for disruptive tech start-up.png',
				name: '1 page website for disruptive tech start-up'
			},
			{
				img: './assets/Website for Thorndike Development Corporation.png',
				name: 'Website for Thorndike Development Corporation'
			},
			{
				img: './assets/Website for Private Proxy Provider.png',
				name: 'Website for Private Proxy Provider'
			},
			{
				img: './assets/Website for Solar Industry Leader.png',
				name: 'Website for Solar industry Leader'
			},
			 
		]


	const changeThemeButton = document.getElementById('theme'),
		letterButton = document.querySelector('.virtual__letter'),
		aboutBlock = document.querySelector('.about'),
		aboutButton = document.getElementById('buttonAbout'),
		portfolioBlock = document.querySelector('.virtual'),
		portfolioButton = document.getElementById('buttonPortfolio'),
		main = document.querySelector('main'),
		body = document.body,
		freelanceButton = document.getElementById('freelanceButton')

	const seeProjectNowescape = document.getElementById('seeProjectNowescape') 


	let themeIsDark = true,
		modalIsActive = false,
		isPlue = false,
		isSeeFreelance = false 


	//dinamic generated modal window
	main.insertAdjacentHTML('afterbegin', `
		<section class="modal">
			<div class="modal__overlay"></div>
			<div class="modal__content">
				 
				 
			</div>
		</section>
	`)
	const overlay = document.querySelector('.modal__overlay'),
		modalContent = document.querySelector('.modal__content')
		
	const setImg = () => {
		if(isPlue) {
			document.getElementById('loop').innerHTML = `
			<svg height='22px' width='22px' enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_227_"/><path d="M19,14c0,0.552-0.448,1-1,1h-3v3c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3h-3c-0.552,0-1-0.448-1-1s0.448-1,1-1  h3v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v3h3C18.552,13,19,13.448,19,14z" id="XMLID_230_"/></svg>
						`
			document.querySelectorAll('.slideIMG').forEach(item => {
				item.style.objectFit = 'contain'
				item.style.objectPosition = 'unset'
				item.style.padding = '0 0px 120px 0px'
				return item
			})
		
		} else {
			document.getElementById('loop').innerHTML = `
						<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>BFBDCDBB-01F7-44FE-A5C1-9E7CD3C6DE20</title>
									<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1159.000000, -20.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="Zoom-out-Icon" transform="translate(1159.000000, 20.000000)">
													<path d="M7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,9.21014809 14.4276233,10.7866104 13.4639906,12.0482663 L17.2071068,15.7928932 C17.5976311,16.1834175 17.5976311,16.8165825 17.2071068,17.2071068 C16.8466228,17.5675907 16.2793918,17.5953203 15.8871006,17.2902954 L15.7928932,17.2071068 L12.0482663,13.4639906 C10.7866104,14.4276233 9.21014809,15 7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 Z M7.5,2 C4.46243388,2 2,4.46243388 2,7.5 C2,10.5375661 4.46243388,13 7.5,13 C10.5375661,13 13,10.5375661 13,7.5 C13,4.46243388 10.5375661,2 7.5,2 Z M11,7 C11.2761424,7 11.5,7.22385763 11.5,7.5 C11.5,7.74545989 11.3231248,7.94960837 11.0898756,7.99194433 L11,8 L4,8 C3.72385763,8 3.5,7.77614237 3.5,7.5 C3.5,7.25454011 3.67687516,7.05039163 3.91012437,7.00805567 L4,7 L11,7 Z" id="Combined-Shape"></path>
											</g>
										</g>
									</g>
						</svg>
						`
			document.querySelectorAll('.slideIMG').forEach(item => {
				item.style.objectFit = 'cover'
				item.style.objectPosition = 'top'
				item.style.padding = '0 100px 120px 100px'
				return item
			} )
		}

		isPlue = !isPlue
	}	 

	//functions events
	const setShowModalLetter = (isSeeProject, isSeeFreelancei, isLetter) => {
		 
			if(modalIsActive) {
				
				body.style.overflow = 'auto'
				body.style.paddingRight = '0px'
				overlay.classList.remove('active')
				modalContent.classList.remove('active')
				modalContent.style.maxWidth = '700px'
				modalContent.style.maxHeight = '800px'
		 
			} else {
				isSeeFreelance = false
				body.style.overflow = 'hidden'
				body.style.paddingRight = '8px'
				overlay.classList.add('active')
				modalContent.classList.add('active')
			}
			if (isLetter) {
				  modalContent.innerHTML = `<div class="swiper slider__custom">
				  <div class="swiper-wrapper">
					  <img class="slideIMG LetterIMG" src="./assets/letter.png" alt="pictureProject"/>
				  </div>
				
			  </div>`	
			

				  modalContent.insertAdjacentHTML('afterbegin', `<section class="seePortfolio">
						<p class="currentIndex">1/1</p>
						<div class='nav__modal'>
							
								<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<title>86D42A90-1C96-484C-B4A1-02C735EFC3F3</title>
								<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1200.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
										<g id="Fullscreen-Icon" transform="translate(1200.000000, 19.000000)">
												<path d="M16,0 L16.0193545,0.000186147798 C16.042681,0.000634893312 16.0659949,0.00189498016 16.0892501,0.00396640833 L16,0 C16.0506203,0 16.1003621,0.00376118706 16.1489612,0.0110193427 C16.165949,0.0136280806 16.1833753,0.0167021706 16.2007258,0.020240071 C16.2227461,0.0246397952 16.2444365,0.0298336259 16.2658396,0.0357209664 C16.2814633,0.0400977346 16.2968513,0.0447287157 16.3121425,0.0497380859 C16.3317977,0.0561224864 16.3515792,0.0633157362 16.3710585,0.0711039637 C16.3887956,0.0781964242 16.4060985,0.0856790475 16.4232215,0.0936733617 C16.4438914,0.103376643 16.4642939,0.11379392 16.484277,0.12487577 C16.4963944,0.131498828 16.5086131,0.138606922 16.5207088,0.145995454 C16.546275,0.1617187 16.5711307,0.178490093 16.5951593,0.196313506 C16.602603,0.201753444 16.6098424,0.207284482 16.6170223,0.212927691 C16.6801818,0.262551711 16.7374483,0.319818245 16.787214,0.383249919 L16.7071068,0.292893219 C16.7425008,0.328287271 16.774687,0.365674419 16.8036654,0.404693385 C16.8215099,0.428869307 16.8382813,0.453725048 16.8539326,0.479339815 C16.8613931,0.491386894 16.8685012,0.503605559 16.8753288,0.515937903 C16.8862061,0.535706055 16.8966234,0.556108604 16.9063462,0.576900852 C16.914321,0.593901505 16.9218036,0.611204351 16.9287745,0.628663976 C16.9366843,0.648420797 16.9438775,0.668202324 16.9504533,0.688263589 C16.9552713,0.703148659 16.9599023,0.718536724 16.9641549,0.734007034 C16.9701664,0.755563524 16.9753602,0.777253921 16.9798348,0.799205901 C16.9832978,0.816624737 16.9863719,0.83405099 16.9889822,0.851533135 C16.9905825,0.861764108 16.9920139,0.872545084 16.9932723,0.883378875 L16.9962979,0.913769205 C16.9978436,0.931734513 16.9989053,0.949733631 16.9994829,0.967745384 L17,1 L17,6 C17,6.55228475 16.5522847,7 16,7 C15.4871642,7 15.0644928,6.61395981 15.0067277,6.11662113 L15,6 L15,3.414 L11.2071068,7.20710678 C10.8165825,7.59763107 10.1834175,7.59763107 9.79289322,7.20710678 C9.40236893,6.81658249 9.40236893,6.18341751 9.79289322,5.79289322 L13.584,2 L11,2 C10.4871642,2 10.0644928,1.61395981 10.0067277,1.11662113 L10,1 C10,0.487164161 10.3860402,0.0644928393 10.8833789,0.00672773133 L11,0 L16,0 Z M7.20710678,9.79289322 C7.59763107,10.1834175 7.59763107,10.8165825 7.20710678,11.2071068 L3.414,15 L6,15 C6.51283584,15 6.93550716,15.3860402 6.99327227,15.8833789 L7,16 C7,16.5128358 6.61395981,16.9355072 6.11662113,16.9932723 L6,17 L1,17 L0.967745384,16.9994829 C0.949733631,16.9989053 0.931734513,16.9978436 0.913769205,16.9962979 L1,17 C0.949379716,17 0.899637905,16.9962388 0.851038784,16.9889807 C0.83405099,16.9863719 0.816624737,16.9832978 0.799274239,16.9797599 C0.777253921,16.9753602 0.755563524,16.9701664 0.734160388,16.964279 C0.718536724,16.9599023 0.703148659,16.9552713 0.687857476,16.9502619 C0.668202324,16.9438775 0.648420797,16.9366843 0.628941476,16.928896 C0.611204351,16.9218036 0.593901505,16.914321 0.576778453,16.9063266 C0.556108604,16.8966234 0.535706055,16.8862061 0.515723049,16.8751242 C0.503605559,16.8685012 0.491386894,16.8613931 0.479291247,16.8540045 C0.453725048,16.8382813 0.428869307,16.8215099 0.404840697,16.8036865 C0.397396959,16.7982466 0.390157595,16.7927155 0.382977653,16.7870723 C0.319818245,16.7374483 0.262551711,16.6801818 0.212785965,16.6167501 L0.292893219,16.7071068 C0.257499166,16.6717127 0.225312953,16.6343256 0.196334578,16.5953066 C0.178490093,16.5711307 0.1617187,16.546275 0.146067433,16.5206602 C0.138606922,16.5086131 0.131498828,16.4963944 0.124671174,16.4840621 C0.11379392,16.4642939 0.103376643,16.4438914 0.0936537803,16.4230991 C0.0856790475,16.4060985 0.0781964242,16.3887956 0.0712254916,16.371336 C0.0633157362,16.3515792 0.0561224864,16.3317977 0.0495466818,16.3117364 C0.0447287157,16.2968513 0.0400977346,16.2814633 0.0358451423,16.265993 C0.0298336259,16.2444365 0.0246397952,16.2227461 0.0201651536,16.2007941 C0.0167021706,16.1833753 0.0136280806,16.165949 0.0110178009,16.1484669 C0.00941754284,16.1382359 0.00798605907,16.1274549 0.00672773133,16.1166211 L0.00396640833,16.0892501 C0.00189498016,16.0659949 0.000634893312,16.042681 0.000186147798,16.0193545 L0,16 L8.8817842e-16,11 C8.8817842e-16,10.4477153 0.44771525,10 1,10 C1.51283584,10 1.93550716,10.3860402 1.99327227,10.8833789 L2,11 L2,13.584 L5.79289322,9.79289322 C6.18341751,9.40236893 6.81658249,9.40236893 7.20710678,9.79289322 Z" id="Combined-Shape"></path>
										</g>
									</g>
								</g>
							</svg>
					<svg class='closeModal' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<title>2281AF76-167B-487F-B5D2-600CA1A0268E</title>
						<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1244.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
								<g id="Close-(Esc)-Icon" transform="translate(1244.000000, 19.000000)">
										<path d="M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L8.5,7.085 L15.2928932,0.292893219 C15.6834175,-0.0976310729 16.3165825,-0.0976310729 16.7071068,0.292893219 C17.0976311,0.683417511 17.0976311,1.31658249 16.7071068,1.70710678 L9.915,8.5 L16.7071068,15.2928932 C17.0675907,15.6533772 17.0953203,16.2206082 16.7902954,16.6128994 L16.7071068,16.7071068 C16.3165825,17.0976311 15.6834175,17.0976311 15.2928932,16.7071068 L15.2928932,16.7071068 L8.5,9.915 L1.70710678,16.7071068 C1.31658249,17.0976311 0.683417511,17.0976311 0.292893219,16.7071068 C-0.0976310729,16.3165825 -0.0976310729,15.6834175 0.292893219,15.2928932 L7.085,8.5 L0.292893219,1.70710678 C-0.0675907428,1.34662282 -0.0953202783,0.779391764 0.209704612,0.387100557 Z" id="Combined-Shape"></path>
								</g>
							</g>
						</g>
				</svg>
						</div>
					</section>
					<section class="nameProject">
					<p class="titleModal">Letter of Recommendation</p>
				</section>
					`)
					modalContent.style.maxHeight = '100vh'
					document.querySelector('.closeModal').addEventListener('click', () => setShowModalLetter(false))
					 
					 
			}
		 
			if(isSeeProject) {
				modalContent.innerHTML = `
				<div class="swiper slider__custom">
					<div class="swiper-wrapper">
				 		 
					</div>
					<div class="swiper-button-next customBN"> </div>
					<div class="swiper-button-prev customBP"> </div>
				</div>`
				modalContent.insertAdjacentHTML('afterbegin', `<section class="seePortfolio">
				<p class="currentIndex">1/${isSeeFreelance ? freelanceProjects.length : nowescapeProjects.length}</p>
				<div class='nav__modal'>
					<div id='loop'> 
						<svg height='22px' width='22px' enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_227_"/><path d="M19,14c0,0.552-0.448,1-1,1h-3v3c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3h-3c-0.552,0-1-0.448-1-1s0.448-1,1-1  h3v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v3h3C18.552,13,19,13.448,19,14z" id="XMLID_230_"/></svg>
					</div>	
						  <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						  <title>86D42A90-1C96-484C-B4A1-02C735EFC3F3</title>
						  <g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							  <g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1200.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
								  <g id="Fullscreen-Icon" transform="translate(1200.000000, 19.000000)">
										  <path d="M16,0 L16.0193545,0.000186147798 C16.042681,0.000634893312 16.0659949,0.00189498016 16.0892501,0.00396640833 L16,0 C16.0506203,0 16.1003621,0.00376118706 16.1489612,0.0110193427 C16.165949,0.0136280806 16.1833753,0.0167021706 16.2007258,0.020240071 C16.2227461,0.0246397952 16.2444365,0.0298336259 16.2658396,0.0357209664 C16.2814633,0.0400977346 16.2968513,0.0447287157 16.3121425,0.0497380859 C16.3317977,0.0561224864 16.3515792,0.0633157362 16.3710585,0.0711039637 C16.3887956,0.0781964242 16.4060985,0.0856790475 16.4232215,0.0936733617 C16.4438914,0.103376643 16.4642939,0.11379392 16.484277,0.12487577 C16.4963944,0.131498828 16.5086131,0.138606922 16.5207088,0.145995454 C16.546275,0.1617187 16.5711307,0.178490093 16.5951593,0.196313506 C16.602603,0.201753444 16.6098424,0.207284482 16.6170223,0.212927691 C16.6801818,0.262551711 16.7374483,0.319818245 16.787214,0.383249919 L16.7071068,0.292893219 C16.7425008,0.328287271 16.774687,0.365674419 16.8036654,0.404693385 C16.8215099,0.428869307 16.8382813,0.453725048 16.8539326,0.479339815 C16.8613931,0.491386894 16.8685012,0.503605559 16.8753288,0.515937903 C16.8862061,0.535706055 16.8966234,0.556108604 16.9063462,0.576900852 C16.914321,0.593901505 16.9218036,0.611204351 16.9287745,0.628663976 C16.9366843,0.648420797 16.9438775,0.668202324 16.9504533,0.688263589 C16.9552713,0.703148659 16.9599023,0.718536724 16.9641549,0.734007034 C16.9701664,0.755563524 16.9753602,0.777253921 16.9798348,0.799205901 C16.9832978,0.816624737 16.9863719,0.83405099 16.9889822,0.851533135 C16.9905825,0.861764108 16.9920139,0.872545084 16.9932723,0.883378875 L16.9962979,0.913769205 C16.9978436,0.931734513 16.9989053,0.949733631 16.9994829,0.967745384 L17,1 L17,6 C17,6.55228475 16.5522847,7 16,7 C15.4871642,7 15.0644928,6.61395981 15.0067277,6.11662113 L15,6 L15,3.414 L11.2071068,7.20710678 C10.8165825,7.59763107 10.1834175,7.59763107 9.79289322,7.20710678 C9.40236893,6.81658249 9.40236893,6.18341751 9.79289322,5.79289322 L13.584,2 L11,2 C10.4871642,2 10.0644928,1.61395981 10.0067277,1.11662113 L10,1 C10,0.487164161 10.3860402,0.0644928393 10.8833789,0.00672773133 L11,0 L16,0 Z M7.20710678,9.79289322 C7.59763107,10.1834175 7.59763107,10.8165825 7.20710678,11.2071068 L3.414,15 L6,15 C6.51283584,15 6.93550716,15.3860402 6.99327227,15.8833789 L7,16 C7,16.5128358 6.61395981,16.9355072 6.11662113,16.9932723 L6,17 L1,17 L0.967745384,16.9994829 C0.949733631,16.9989053 0.931734513,16.9978436 0.913769205,16.9962979 L1,17 C0.949379716,17 0.899637905,16.9962388 0.851038784,16.9889807 C0.83405099,16.9863719 0.816624737,16.9832978 0.799274239,16.9797599 C0.777253921,16.9753602 0.755563524,16.9701664 0.734160388,16.964279 C0.718536724,16.9599023 0.703148659,16.9552713 0.687857476,16.9502619 C0.668202324,16.9438775 0.648420797,16.9366843 0.628941476,16.928896 C0.611204351,16.9218036 0.593901505,16.914321 0.576778453,16.9063266 C0.556108604,16.8966234 0.535706055,16.8862061 0.515723049,16.8751242 C0.503605559,16.8685012 0.491386894,16.8613931 0.479291247,16.8540045 C0.453725048,16.8382813 0.428869307,16.8215099 0.404840697,16.8036865 C0.397396959,16.7982466 0.390157595,16.7927155 0.382977653,16.7870723 C0.319818245,16.7374483 0.262551711,16.6801818 0.212785965,16.6167501 L0.292893219,16.7071068 C0.257499166,16.6717127 0.225312953,16.6343256 0.196334578,16.5953066 C0.178490093,16.5711307 0.1617187,16.546275 0.146067433,16.5206602 C0.138606922,16.5086131 0.131498828,16.4963944 0.124671174,16.4840621 C0.11379392,16.4642939 0.103376643,16.4438914 0.0936537803,16.4230991 C0.0856790475,16.4060985 0.0781964242,16.3887956 0.0712254916,16.371336 C0.0633157362,16.3515792 0.0561224864,16.3317977 0.0495466818,16.3117364 C0.0447287157,16.2968513 0.0400977346,16.2814633 0.0358451423,16.265993 C0.0298336259,16.2444365 0.0246397952,16.2227461 0.0201651536,16.2007941 C0.0167021706,16.1833753 0.0136280806,16.165949 0.0110178009,16.1484669 C0.00941754284,16.1382359 0.00798605907,16.1274549 0.00672773133,16.1166211 L0.00396640833,16.0892501 C0.00189498016,16.0659949 0.000634893312,16.042681 0.000186147798,16.0193545 L0,16 L8.8817842e-16,11 C8.8817842e-16,10.4477153 0.44771525,10 1,10 C1.51283584,10 1.93550716,10.3860402 1.99327227,10.8833789 L2,11 L2,13.584 L5.79289322,9.79289322 C6.18341751,9.40236893 6.81658249,9.40236893 7.20710678,9.79289322 Z" id="Combined-Shape"></path>
								  </g>
							  </g>
						  </g>
					  </svg>
			  <svg class='closeModal' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<title>2281AF76-167B-487F-B5D2-600CA1A0268E</title>
				<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					 <g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1244.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
						  <g id="Close-(Esc)-Icon" transform="translate(1244.000000, 19.000000)">
								<path d="M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L8.5,7.085 L15.2928932,0.292893219 C15.6834175,-0.0976310729 16.3165825,-0.0976310729 16.7071068,0.292893219 C17.0976311,0.683417511 17.0976311,1.31658249 16.7071068,1.70710678 L9.915,8.5 L16.7071068,15.2928932 C17.0675907,15.6533772 17.0953203,16.2206082 16.7902954,16.6128994 L16.7071068,16.7071068 C16.3165825,17.0976311 15.6834175,17.0976311 15.2928932,16.7071068 L15.2928932,16.7071068 L8.5,9.915 L1.70710678,16.7071068 C1.31658249,17.0976311 0.683417511,17.0976311 0.292893219,16.7071068 C-0.0976310729,16.3165825 -0.0976310729,15.6834175 0.292893219,15.2928932 L7.085,8.5 L0.292893219,1.70710678 C-0.0675907428,1.34662282 -0.0953202783,0.779391764 0.209704612,0.387100557 Z" id="Combined-Shape"></path>
						  </g>
					 </g>
				</g>
		  </svg>
				</div>
			</section>
			<section class="nameProject">
			<p class="titleModal">${isSeeFreelance ? freelanceProjects[0].name : nowescapeProjects[0].name}</p>
		 </section>
							`)
				modalContent.style.maxWidth = '1300px'
				modalContent.style.maxHeight = '100vh'
		 
				isSeeFreelancei ? freelanceProjects.map(project => document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', `<div class="swiper-slide"><img class="slideIMG" src="${project.img}" alt="pictureProject"/></div>`)  )
				 : nowescapeProjects.map(project => document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', `<div class="swiper-slide"><img class="slideIMG" src="${project.img}" alt="pictureProject"/></div>`)  )
				document.querySelector('.closeModal').addEventListener('click', () => setShowModalLetter(false))
				document.getElementById('loop').addEventListener('click', setImg)	
				//init slider
			new Swiper('.swiper', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					slideChange: (swiper) => {
						if(isSeeFreelancei) {
							document.querySelector('.currentIndex').textContent = `${swiper.realIndex + 1}/${freelanceProjects.length}` 
							document.querySelector('.titleModal').textContent = freelanceProjects[swiper.realIndex].name
						} else {
							document.querySelector('.currentIndex').textContent = `${swiper.realIndex + 1}/${nowescapeProjects.length}` 
							document.querySelector('.titleModal').textContent = nowescapeProjects[swiper.realIndex].name
						}
					}  
				}
			})
			 
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
		scrollToPortfolio = () => {
			portfolioBlock.scrollIntoView({
				behavior: 'smooth'
			})
		} 
	
 
	//event click letter button and change show modal
	letterButton.addEventListener('click', () => {
		setShowModalLetter(false, false, true)
 
	})

	overlay.addEventListener('click', () => setShowModalLetter(false))
	//event change theme
	changeThemeButton.addEventListener('click', setTheme)
	//event scroll 
	seeProjectNowescape.addEventListener('click', () => setShowModalLetter(true))
	aboutButton.addEventListener('click', scrollToAbout)
	portfolioButton.addEventListener('click', scrollToPortfolio)
	freelanceButton.addEventListener('click', () => {
 
		isSeeFreelance = true
		setShowModalLetter(true, isSeeFreelance)
	}  )
	 
}
document.addEventListener('DOMContentLoaded', main)
