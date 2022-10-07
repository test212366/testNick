import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const main = () => {
	//show elements in scroll 
	const appHeight = () => {
		const doc = document.documentElement
		
		const item = document.querySelector('.preview__home')
		if(window.innerHeight < 900) doc.style.setProperty('--app-height', `${item.offsetHeight - 60}px`)
	}
	window.addEventListener('resize', appHeight)
	appHeight()
	const onEntry = entry => entry.forEach(change =>  change.isIntersecting && change.target.classList.add('element-show'))
	 
	const observer = new IntersectionObserver(onEntry, {threshold: [0.5] }),
		elements = document.querySelectorAll('.element-animation')
	 
	for (const elm of elements) observer.observe(elm)
	 
	document.querySelector('.preview__home').insertAdjacentHTML ('beforeend', `
	<div class="virtual__wrapper-text">
				<div class="home__change-theme">
				<input type="checkbox" id='theme'>
			</div>
	`)
	
	//setAttribute for theme application
	document.documentElement.setAttribute('data-theme', 'dark')

	const nowescapeProjects = [
		{
			img: './assets/Home Search Dropdown.jpg',
			name: 'Home Search Dropdown'
		},
		{
			img: './assets/Search Result.jpg',
			name: 'Search Result'
		},
		{
			img: './assets/Room Booking Payment.jpg',
			name: 'Room Booking Payment'
		},
		{
			img: './assets/Room Page.jpg',
			name: 'Room Page'
		},
		{
			img: './assets/Basics.jpg',
			name: 'Basics'
		},
		{
			img: './assets/Calendar Available.jpg',
			name: 'Calendar Available'
		},
		{
			img: './assets/Reservation.jpg',
			name: 'Reservation'
		},
		{
			img: './assets/Landing Page.jpg',
			name: 'Landing Page'
		},
	],
		freelanceProjects = [
			{
				img: './assets/App for London Array company.jpg',
				name: 'App for London Array company'
			},
			{
				img: './assets/Social app for commerce and charity.jpg',
				name: 'Social app for commerce and charity'
			},
			{
				img: './assets/App for tenants to easly ren their landlord.jpg',
				name: 'App for tenants to easly ren their landiord'
			},
			{
				img: './assets/Day time party booking app.jpg',
				name: 'Day time party booking app'
			},
			{
				img: './assets/1 page website for disruptive tech start-up.jpg',
				name: '1 page website for disruptive tech start-up'
			},
			{
				img: './assets/Website for Thorndike Development Corporation.jpg',
				name: 'Website for Thorndike Development Corporation'
			},
			{
				img: './assets/Website for Private Proxy Provider.jpg',
				name: 'Website for Private Proxy Provider'
			},
			{
				img: './assets/Website for Solar Industry Leader.jpg',
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
		isSeeFreelance = false,
		isFullscreen = false


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
			<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>636A29A6-E6A6-435B-8784-251024B2EE20</title>
    <g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Nowescape-Screen-Shot-Pop-up-01" transform="translate(-1159.000000, -20.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="Zoom-in-Icon" transform="translate(1159.000000, 20.000000)">
                <path d="M7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,9.21014809 14.4276233,10.7866104 13.4639906,12.0482663 L17.2071068,15.7928932 C17.5976311,16.1834175 17.5976311,16.8165825 17.2071068,17.2071068 C16.8466228,17.5675907 16.2793918,17.5953203 15.8871006,17.2902954 L15.7928932,17.2071068 L12.0482663,13.4639906 C10.7866104,14.4276233 9.21014809,15 7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 Z M7.5,2 C4.46243388,2 2,4.46243388 2,7.5 C2,10.5375661 4.46243388,13 7.5,13 C10.5375661,13 13,10.5375661 13,7.5 C13,4.46243388 10.5375661,2 7.5,2 Z M7.5,3.5 C7.74545989,3.5 7.94960837,3.67687516 7.99194433,3.91012437 L8,4 L8,7 L11,7 C11.2761424,7 11.5,7.22385763 11.5,7.5 C11.5,7.74545989 11.3231248,7.94960837 11.0898756,7.99194433 L11,8 L8,8 L8,11 C8,11.2761424 7.77614237,11.5 7.5,11.5 C7.25454011,11.5 7.05039163,11.3231248 7.00805567,11.0898756 L7,11 L7,8 L4,8 C3.72385763,8 3.5,7.77614237 3.5,7.5 C3.5,7.25454011 3.67687516,7.05039163 3.91012437,7.00805567 L4,7 L7,7 L7,4 C7,3.72385763 7.22385763,3.5 7.5,3.5 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </g>
</svg>	`
			document.querySelector('.swiper-slide-active').style.overflow = 'unset'
			document.querySelector('.slider__custom').style.marginTop = '50px'
			document.querySelectorAll('.slideIMG').forEach(item => {
				item.style.objectFit = 'contain'
				item.style.objectPosition = 'unset'
				item.style.maxWidth = 'unset'
				item.style.height = '100vh'
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
			document.querySelectorAll('.swiper-slide').forEach(item => item.style.overflow = 'scroll')
			document.querySelector('.slider__custom').style.marginTop = '0'
			document.querySelectorAll('.slideIMG').forEach(item => {
				item.style.objectFit = 'unset'
				item.style.height = 'unset'
				item.style.maxWidth = '1156px'
				item.style.position = 'absolute'
				item.style.left = '50%'
				item.style.transform = 'translateX(-50%)'
				return item
			} )
		}

		isPlue = !isPlue
	},
	setFullscreen = () => {
		
		if(isFullscreen) {
			document.exitFullscreen()
			document.getElementById('fullscreen').innerHTML = `<svg id='fullscreenfalse' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<title>86D42A90-1C96-484C-B4A1-02C735EFC3F3</title>
						<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1200.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
								<g id="Fullscreen-Icon" transform="translate(1200.000000, 19.000000)">
										<path d="M16,0 L16.0193545,0.000186147798 C16.042681,0.000634893312 16.0659949,0.00189498016 16.0892501,0.00396640833 L16,0 C16.0506203,0 16.1003621,0.00376118706 16.1489612,0.0110193427 C16.165949,0.0136280806 16.1833753,0.0167021706 16.2007258,0.020240071 C16.2227461,0.0246397952 16.2444365,0.0298336259 16.2658396,0.0357209664 C16.2814633,0.0400977346 16.2968513,0.0447287157 16.3121425,0.0497380859 C16.3317977,0.0561224864 16.3515792,0.0633157362 16.3710585,0.0711039637 C16.3887956,0.0781964242 16.4060985,0.0856790475 16.4232215,0.0936733617 C16.4438914,0.103376643 16.4642939,0.11379392 16.484277,0.12487577 C16.4963944,0.131498828 16.5086131,0.138606922 16.5207088,0.145995454 C16.546275,0.1617187 16.5711307,0.178490093 16.5951593,0.196313506 C16.602603,0.201753444 16.6098424,0.207284482 16.6170223,0.212927691 C16.6801818,0.262551711 16.7374483,0.319818245 16.787214,0.383249919 L16.7071068,0.292893219 C16.7425008,0.328287271 16.774687,0.365674419 16.8036654,0.404693385 C16.8215099,0.428869307 16.8382813,0.453725048 16.8539326,0.479339815 C16.8613931,0.491386894 16.8685012,0.503605559 16.8753288,0.515937903 C16.8862061,0.535706055 16.8966234,0.556108604 16.9063462,0.576900852 C16.914321,0.593901505 16.9218036,0.611204351 16.9287745,0.628663976 C16.9366843,0.648420797 16.9438775,0.668202324 16.9504533,0.688263589 C16.9552713,0.703148659 16.9599023,0.718536724 16.9641549,0.734007034 C16.9701664,0.755563524 16.9753602,0.777253921 16.9798348,0.799205901 C16.9832978,0.816624737 16.9863719,0.83405099 16.9889822,0.851533135 C16.9905825,0.861764108 16.9920139,0.872545084 16.9932723,0.883378875 L16.9962979,0.913769205 C16.9978436,0.931734513 16.9989053,0.949733631 16.9994829,0.967745384 L17,1 L17,6 C17,6.55228475 16.5522847,7 16,7 C15.4871642,7 15.0644928,6.61395981 15.0067277,6.11662113 L15,6 L15,3.414 L11.2071068,7.20710678 C10.8165825,7.59763107 10.1834175,7.59763107 9.79289322,7.20710678 C9.40236893,6.81658249 9.40236893,6.18341751 9.79289322,5.79289322 L13.584,2 L11,2 C10.4871642,2 10.0644928,1.61395981 10.0067277,1.11662113 L10,1 C10,0.487164161 10.3860402,0.0644928393 10.8833789,0.00672773133 L11,0 L16,0 Z M7.20710678,9.79289322 C7.59763107,10.1834175 7.59763107,10.8165825 7.20710678,11.2071068 L3.414,15 L6,15 C6.51283584,15 6.93550716,15.3860402 6.99327227,15.8833789 L7,16 C7,16.5128358 6.61395981,16.9355072 6.11662113,16.9932723 L6,17 L1,17 L0.967745384,16.9994829 C0.949733631,16.9989053 0.931734513,16.9978436 0.913769205,16.9962979 L1,17 C0.949379716,17 0.899637905,16.9962388 0.851038784,16.9889807 C0.83405099,16.9863719 0.816624737,16.9832978 0.799274239,16.9797599 C0.777253921,16.9753602 0.755563524,16.9701664 0.734160388,16.964279 C0.718536724,16.9599023 0.703148659,16.9552713 0.687857476,16.9502619 C0.668202324,16.9438775 0.648420797,16.9366843 0.628941476,16.928896 C0.611204351,16.9218036 0.593901505,16.914321 0.576778453,16.9063266 C0.556108604,16.8966234 0.535706055,16.8862061 0.515723049,16.8751242 C0.503605559,16.8685012 0.491386894,16.8613931 0.479291247,16.8540045 C0.453725048,16.8382813 0.428869307,16.8215099 0.404840697,16.8036865 C0.397396959,16.7982466 0.390157595,16.7927155 0.382977653,16.7870723 C0.319818245,16.7374483 0.262551711,16.6801818 0.212785965,16.6167501 L0.292893219,16.7071068 C0.257499166,16.6717127 0.225312953,16.6343256 0.196334578,16.5953066 C0.178490093,16.5711307 0.1617187,16.546275 0.146067433,16.5206602 C0.138606922,16.5086131 0.131498828,16.4963944 0.124671174,16.4840621 C0.11379392,16.4642939 0.103376643,16.4438914 0.0936537803,16.4230991 C0.0856790475,16.4060985 0.0781964242,16.3887956 0.0712254916,16.371336 C0.0633157362,16.3515792 0.0561224864,16.3317977 0.0495466818,16.3117364 C0.0447287157,16.2968513 0.0400977346,16.2814633 0.0358451423,16.265993 C0.0298336259,16.2444365 0.0246397952,16.2227461 0.0201651536,16.2007941 C0.0167021706,16.1833753 0.0136280806,16.165949 0.0110178009,16.1484669 C0.00941754284,16.1382359 0.00798605907,16.1274549 0.00672773133,16.1166211 L0.00396640833,16.0892501 C0.00189498016,16.0659949 0.000634893312,16.042681 0.000186147798,16.0193545 L0,16 L8.8817842e-16,11 C8.8817842e-16,10.4477153 0.44771525,10 1,10 C1.51283584,10 1.93550716,10.3860402 1.99327227,10.8833789 L2,11 L2,13.584 L5.79289322,9.79289322 C6.18341751,9.40236893 6.81658249,9.40236893 7.20710678,9.79289322 Z" id="Combined-Shape"></path>
								</g>
							</g>
						</g>
					</svg>` 
			document.getElementById('fullscreenfalse').addEventListener('click', () => {
			setFullscreen()
		})
		} else {
			document.getElementById('fullscreen').innerHTML = `<svg id='fullscreentrue'
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:cc="http://creativecommons.org/ns#"
			xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22.666668 22.666668"
			height="21"
			width="21"
			xml:space="preserve"
			id="svg2"
			version="1.1"><metadata
			  id="metadata8"><rdf:RDF><cc:Work
					rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
					  rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
			  id="defs6"><clipPath
				 id="clipPath20"
				 clipPathUnits="userSpaceOnUse"><path
					id="path18"
					d="M 7,8 7.019354,7.999814 C 7.042681,7.999365 7.065995,7.998105 7.08925,7.996034 L 7,8 C 7.05062,8 7.100362,7.996239 7.148961,7.988981 7.165949,7.986372 7.183375,7.983298 7.200726,7.97976 7.222746,7.97536 7.244436,7.970166 7.26584,7.964279 7.281463,7.959902 7.296851,7.955271 7.312143,7.950262 7.331798,7.943878 7.351579,7.936684 7.371059,7.928896 7.388796,7.921804 7.406098,7.914321 7.423222,7.906327 7.443891,7.896623 7.464294,7.886206 7.484277,7.875124 7.496394,7.868501 7.508613,7.861393 7.520709,7.854005 7.546275,7.838281 7.571131,7.82151 7.595159,7.803686 7.602603,7.798247 7.609842,7.792716 7.617022,7.787072 7.680182,7.737448 7.737448,7.680182 7.787214,7.61675 L 7.707107,7.707107 C 7.742501,7.671713 7.774687,7.634326 7.803665,7.595307 7.82151,7.571131 7.838281,7.546275 7.853933,7.52066 7.861393,7.508613 7.868501,7.496394 7.875329,7.484062 7.886206,7.464294 7.896623,7.443891 7.906346,7.423099 7.914321,7.406098 7.921804,7.388796 7.928775,7.371336 7.936684,7.351579 7.943878,7.331798 7.950453,7.311736 7.955271,7.296851 7.959902,7.281463 7.964155,7.265993 7.970166,7.244436 7.97536,7.222746 7.979835,7.200794 7.983298,7.183375 7.986372,7.165949 7.988982,7.148467 7.990582,7.138236 7.992014,7.127455 7.993272,7.116621 l 0.00303,-0.03039 c 0.00154,-0.017966 0.0026,-0.035965 0.00318,-0.053976 L 8,7 V 2 C 8,1.447715 7.552285,1 7,1 6.487164,1 6.064493,1.38604 6.006728,1.883379 L 6,2 V 4.586 L 2.207107,0.7928932 c -0.390525,-0.3905243 -1.023689,-0.3905243 -1.4142138,0 -0.3905243,0.3905248 -0.3905243,1.0236888 0,1.4142138 L 4.584,6 H 2 C 1.487164,6 1.064493,6.38604 1.006728,6.883379 L 1,7 C 1,7.512836 1.38604,7.935507 1.883379,7.993272 L 2,8 Z m 9.20711,8.20711 c 0.39052,-0.39053 0.39052,-1.02369 0,-1.41422 L 12.414,11 H 15 c 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 16,10 C 16,9.487164 15.61396,9.064493 15.11662,9.006728 L 15,9 H 10 L 9.980646,9.000186 C 9.957319,9.000635 9.934005,9.001895 9.91075,9.003966 L 10,9 C 9.94938,9 9.899638,9.003761 9.851039,9.011019 9.834051,9.013628 9.816625,9.016702 9.799274,9.02024 9.777254,9.02464 9.755564,9.029834 9.73416,9.035721 9.718537,9.040098 9.703149,9.044729 9.687857,9.049738 9.668202,9.056122 9.648421,9.063316 9.628941,9.071104 9.611204,9.078196 9.593902,9.085679 9.576778,9.093673 9.556109,9.103377 9.535706,9.113794 9.515723,9.124876 9.503606,9.131499 9.491387,9.138607 9.479291,9.145995 9.453725,9.161719 9.428869,9.17849 9.404841,9.196314 9.397397,9.201753 9.390158,9.207284 9.382978,9.212928 9.319818,9.262552 9.262552,9.319818 9.212786,9.38325 L 9.292893,9.292893 C 9.257499,9.328287 9.225313,9.365674 9.196335,9.404693 9.17849,9.428869 9.161719,9.453725 9.146067,9.47934 9.138607,9.491387 9.131499,9.503606 9.124671,9.515938 9.113794,9.535706 9.103377,9.556109 9.093654,9.576901 9.085679,9.593902 9.078196,9.611204 9.071225,9.628664 9.063316,9.648421 9.056122,9.668202 9.049547,9.688264 9.044729,9.703149 9.040098,9.718537 9.035845,9.734007 9.029834,9.755564 9.02464,9.777254 9.020165,9.799206 9.016702,9.816625 9.013628,9.834051 9.011018,9.851533 9.009418,9.861764 9.007986,9.872545 9.006728,9.883379 L 9.003966,9.91075 C 9.001895,9.934005 9.000635,9.957319 9.000186,9.980646 L 9,10 v 5 c 0,0.55228 0.447715,1 1,1 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 11,15 v -2.584 l 3.79289,3.79111 c 0.39053,0.39052 1.02369,0.39052 1.41422,0 z" /></clipPath><clipPath
				 id="clipPath26"
				 clipPathUnits="userSpaceOnUse"><path
					id="path24"
					d="M -1200,-1044 H 80 V 36 h -1280 z" /></clipPath></defs><g
			  transform="matrix(1.3333333,0,0,-1.3333333,0,22.666667)"
			  id="g10"><g
				 id="g12" /><g
				 id="g14"><g
					clip-path="url(#clipPath20)"
					id="g16"><g
					  clip-path="url(#clipPath26)"
					  id="g22"><path
						 id="path28"
						 style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
						 d="M -0.5976311,17.59763 H 17.59763 V -0.5976311 H -0.5976311 Z" /></g></g></g></g></svg>
			`
			document.getElementById('fullscreentrue').addEventListener('click', () => {
				setFullscreen()
			})
			document.documentElement.requestFullscreen()
		}
		isFullscreen = !isFullscreen
	}

	const imagesLight = [
		{
			src: './assets/VH Screen Shot 01 light.png'
		},
		{
			src: './assets/VH Screen Shot 02 light.jpg'
		},
		{
			src: './assets/VH Screen Shot 03 light.png'
		},
		{
			src: './assets/VH Screen Shot 04 light.png'
		},
		{
			src: './assets/Nowescape light.png'
		},
		{
			src: './assets/Nowescape light.png'
		},
		{
			src: './assets/london-array light.jpg'
		}
	],
		imagesBlack = [
			{
				src: './assets/VH Screen Shot 01.png'
			},
			{
				src: './assets/VH Screen Shot 02.png'
			},
			{
				src: './assets/VH Screen Shot 03.png'
			},
			{
				src: './assets/VH Screen Shot 04.png'
			},
			{
				src: './assets/Nowescape.png'
			},
			{
				src: './assets/Nowescape.png'
			},
			{
				src: './assets/london-array.png'
			}
		]

	//functions events
	const setShowModalLetter = (isSeeProject, isSeeFreelancei, isLetter) => {
		 
			if(modalIsActive) {
				
				body.style.overflow = 'auto'
				body.style.paddingRight = '0px'
				overlay.classList.remove('active')
				modalContent.classList.remove('active')
				document.querySelector('.seePortfolio').remove()
				document.querySelector('.nameProject').remove()
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
					  <svg width="612px" class='slideIMG LetterIMG' height="792px" viewBox="0 0 612 792" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					  <title>E910F6D1-9458-4685-A4EF-2666DFA18162</title>
					  <g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Letter-of-Recommendation-Pop-up" transform="translate(-334.000000, -144.000000)">
								 <g id="Letter-of-Recommendation" transform="translate(334.000000, 144.000000)">
									  <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="612" height="792"></rect>
									  <text id="To-Whom-it-May-Conce" font-family="OpenSans, Open Sans" font-size="14" font-weight="normal" line-spacing="22" fill="#323232">
											<tspan x="68" y="152">To Whom it May Concern,</tspan>
											<tspan x="68" y="174"></tspan>
											<tspan x="68" y="196">Nikolay Krotkov has worked for VirtualHealth since April of 2017 in a </tspan>
											<tspan x="68" y="218">variety of positions and has been a great asset to the VirtualHealth team </tspan>
											<tspan x="68" y="240">during that time. He is a dedicated, organized team member who </tspan>
											<tspan x="68" y="262">delivers high quality work in a timely manner.</tspan>
											<tspan x="68" y="284"></tspan>
											<tspan x="68" y="306">During his time with VirtualHealth, Nick has supported a variety of teams </tspan>
											<tspan x="68" y="328">and departments. He provided UX and front-end design support for our </tspan>
											<tspan x="68" y="350">engineering and product teams on apps and websites. He has also </tspan>
											<tspan x="68" y="372">supported design projects for Marketing including helping to create our </tspan>
											<tspan x="68" y="394">illustration style, building a wide variety of illustrations and icons for our </tspan>
											<tspan x="68" y="416">brand library. Nick is  also a skilled UX designer and very knowledgeable </tspan>
											<tspan x="68" y="438">about all aspects of user experience design, especially crafting efficient </tspan>
											<tspan x="68" y="460">interaction designs. Nick is hardworking, diligent, creative and a </tspan>
											<tspan x="68" y="482">collaborative team player.</tspan>
											<tspan x="68" y="504"></tspan>
											<tspan x="68" y="526">While we have unfortunately had to end our relationship with Nick due </tspan>
											<tspan x="68" y="548">to an internal reorganization, I would strongly recommend him to any </tspan>
											<tspan x="68" y="570">organization looking for a focused, dedicated individual with strong </tspan>
											<tspan x="68" y="592">creative skills.</tspan>
											<tspan x="68" y="614"></tspan>
											<tspan x="68" y="636">Rob McChane</tspan>
											<tspan x="68" y="658">Vice President, Marketing</tspan>
											<tspan x="68" y="680">VirtualHealth</tspan>
									  </text>
									  <g id="VH-logo" transform="translate(68.000000, 52.000000)" fill="#6CACE4" fill-rule="nonzero">
											<path d="M205.4,7.4 C205.2,7.8 204.9,8.2 204.4,8.4 C203.9,8.6 203.4,8.6 203,8.4 C202.6,8.2 202.2,7.9 202,7.4 C201.8,6.9 201.8,6.4 202,6 C202.2,5.6 202.5,5.2 203,5 C203.5,4.8 204,4.8 204.4,5 C204.6,5.1 204.8,5.2 205,5.4 C205.2,5.6 205.3,5.8 205.4,6 C205.6,6.5 205.6,7 205.4,7.4 M205.2,6.1 C205.1,5.9 205,5.7 204.9,5.6 C204.8,5.5 204.6,5.3 204.4,5.2 C204,5 203.5,5 203.1,5.2 C202.9,5.3 202.7,5.4 202.6,5.6 C202.5,5.8 202.3,5.9 202.3,6.1 C202.1,6.5 202.1,7 202.3,7.4 C202.4,7.6 202.5,7.8 202.6,7.9 C202.9,8.2 203.3,8.4 203.8,8.4 C204,8.4 204.2,8.4 204.5,8.3 C205.2,7.9 205.6,6.9 205.2,6.1 M204.4,6.7 C204.3,6.8 204.2,6.9 204.1,6.9 L204.6,7.6 L204.2,7.6 L203.7,7 L203.3,7 L203.3,7.7 L203,7.7 L203,5.7 L203.9,5.7 C204.1,5.7 204.3,5.7 204.4,5.9 C204.5,6 204.6,6.2 204.6,6.4 C204.6,6.5 204.5,6.6 204.4,6.7 M204.1,6.1 C204,6.1 203.9,6 203.8,6 L203.3,6 L203.3,6.6 L203.8,6.6 C203.9,6.6 204,6.6 204.1,6.5 C204.2,6.5 204.2,6.3 204.1,6.1 C204.1,6.1 204.1,6.1 204.1,6.1" id="Shape"></path>
											<polygon id="Path" points="42.6 5.8 45.1 5.8 39.7 19 37.7 19 32.2 5.8 34.7 5.8 38.7 15.9"></polygon>
											<rect id="Rectangle" x="48.1" y="5.8" width="2.3" height="13.1"></rect>
											<path d="M62.9,18.9 L59.7,14.3 L56.8,14.3 L56.8,18.9 L54.5,18.9 L54.5,5.8 L60.4,5.8 C61.1,5.8 61.8,5.9 62.4,6.1 C63,6.3 63.5,6.6 63.9,6.9 C64.3,7.3 64.7,7.7 64.9,8.2 C65.1,8.7 65.2,9.3 65.2,9.9 C65.2,10.4 65.1,10.9 65,11.4 C64.9,11.8 64.6,12.2 64.4,12.5 C64.1,12.8 63.8,13.1 63.4,13.3 C63,13.5 62.6,13.7 62.1,13.8 L65.6,18.8 L62.9,18.9 Z M62.1,8.4 C61.5,8 60.8,7.8 60.1,7.8 L56.7,7.8 L56.7,12.2 L60.1,12.2 C60.8,12.2 61.5,12 62.1,11.6 C62.6,11.2 62.9,10.6 62.8,10 C62.9,9.4 62.6,8.8 62.1,8.4" id="Shape"></path>
											<polygon id="Path" points="74 18.9 71.7 18.9 71.7 7.9 67.6 7.9 67.6 5.8 78.2 5.8 78.2 7.9 74 7.9"></polygon>
											<path d="M92.2,13.2 C92.2,14.1 92.1,14.9 91.8,15.8 C91.6,16.5 91.2,17.1 90.7,17.6 C90.2,18.1 89.6,18.5 88.9,18.7 C88.1,19 87.4,19.1 86.6,19.1 C85.8,19.1 85,19 84.3,18.7 C83.6,18.5 83,18.1 82.5,17.6 C82,17.1 81.6,16.5 81.4,15.8 C81.1,15 81,14.2 81,13.3 L81,5.8 L83.3,5.8 L83.3,13.3 C83.2,14.3 83.5,15.3 84.2,16.1 C84.8,16.8 85.7,17.1 86.7,17.1 C87.6,17.1 88.5,16.8 89.1,16.2 C89.7,15.4 90.1,14.5 90,13.5 L90,5.8 L92.3,5.8 L92.3,13.2 L92.2,13.2 Z" id="Path"></path>
											<path d="M108,18.9 L105.6,18.9 L104.3,15.7 L98.1,15.7 L96.7,18.9 L94.3,18.9 L100.1,5.7 L102.2,5.7 L108,18.9 Z M101.2,8.4 L98.9,13.7 L103.4,13.7 L101.2,8.4 Z" id="Shape"></path>
											<polygon id="Path" points="110.8 5.8 113.1 5.8 113.1 16.8 120 16.8 120 18.9 110.8 18.9"></polygon>
											<polygon id="Path" points="125.3 13.4 125.3 18.9 123 18.9 123 5.8 125.3 5.8 125.3 11.2 131.6 11.2 131.6 5.8 133.9 5.8 133.9 18.9 131.6 18.9 131.6 13.4"></polygon>
											<polygon id="Path" points="147.5 7.9 140.1 7.9 140.1 11.2 146.7 11.2 146.7 13.3 140.1 13.3 140.1 16.8 147.6 16.8 147.6 18.9 137.8 18.9 137.8 5.8 147.5 5.8"></polygon>
											<path d="M163.5,18.9 L161.1,18.9 L159.8,15.7 L153.6,15.7 L152.2,18.9 L149.8,18.9 L155.6,5.7 L157.7,5.7 L163.5,18.9 Z M156.6,8.4 L154.3,13.7 L158.8,13.7 L156.6,8.4 Z" id="Shape"></path>
											<polygon id="Path" points="166.3 5.8 168.6 5.8 168.6 16.8 175.5 16.8 175.5 18.9 166.3 18.9"></polygon>
											<polygon id="Path" points="182.1 18.9 179.8 18.9 179.8 7.9 175.6 7.9 175.6 5.8 186.3 5.8 186.3 7.9 182.1 7.9"></polygon>
											<polygon id="Path" points="191.6 13.4 191.6 18.9 189.3 18.9 189.3 5.8 191.6 5.8 191.6 11.2 197.9 11.2 197.9 5.8 200.2 5.8 200.2 18.9 197.9 18.9 197.9 13.4"></polygon>
											<path d="M24,3.2 C23.5,5.2 16,7.2 12,8.2 C8,9.2 0.5,11.2 0,13.2 L0,10 C0.5,8 8,6 12,5 C16,4 23.5,2 24,0 L24,3.2 Z" id="Path"></path>
											<path d="M0,0 L0,3.2 C0.2,4.2 2.1,5.1 4.3,5.9 C6,5.4 7.9,4.8 9.6,4.4 C5.6,3.3 0.4,1.6 0,0" id="Path"></path>
											<path d="M21.8,11.4 C22.9,10.9 23.3,10.3 23.3,9.8 C23.3,9 21.8,8.1 19.7,7.3 C18,7.9 16.1,8.5 14.5,8.9 C16.9,9.5 19.4,10.3 21.8,11.4" id="Path"></path>
											<path d="M2.3,12.6 C1.2,13.1 0.8,13.7 0.8,14.2 C0.8,14.9 2.3,15.9 4.4,16.7 C6.1,16.1 8,15.5 9.6,15.1 C7.1,14.5 4.6,13.7 2.3,12.6" id="Path"></path>
											<path d="M24,24 L24,20.8 C23.8,19.8 21.9,18.9 19.7,18 C18,18.6 16.1,19.2 14.5,19.6 C18.5,20.7 23.6,22.4 24,24" id="Path"></path>
											<path d="M24,14 C23.5,16 16,18 12,19 C8,20 0.5,22 0,24 L0,20.8 C0.5,18.8 8,16.8 12,15.8 C16,14.8 23.5,12.8 24,10.8 L24,14 Z" id="Path"></path>
									  </g>
								 </g>
							</g>
					  </g>
				 </svg>
					</div>
				
			  </div>`	
			

				  document.querySelector('.modal').insertAdjacentHTML('afterbegin', `<section class="seePortfolio">
						<div class="wrapper__nav">
						<p class="currentIndex">1/1</p>
						<div class='nav__modal'>
							
						<div id='fullscreen'>
							${isFullscreen ? `<svg id='fullscreentrue'
							xmlns:dc="http://purl.org/dc/elements/1.1/"
							xmlns:cc="http://creativecommons.org/ns#"
							xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
							xmlns:svg="http://www.w3.org/2000/svg"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 22.666668 22.666668"
							height="21"
							width="21"
							xml:space="preserve"
							id="svg2"
							version="1.1"><metadata
							  id="metadata8"><rdf:RDF><cc:Work
									rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
									  rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
							  id="defs6"><clipPath
								 id="clipPath20"
								 clipPathUnits="userSpaceOnUse"><path
									id="path18"
									d="M 7,8 7.019354,7.999814 C 7.042681,7.999365 7.065995,7.998105 7.08925,7.996034 L 7,8 C 7.05062,8 7.100362,7.996239 7.148961,7.988981 7.165949,7.986372 7.183375,7.983298 7.200726,7.97976 7.222746,7.97536 7.244436,7.970166 7.26584,7.964279 7.281463,7.959902 7.296851,7.955271 7.312143,7.950262 7.331798,7.943878 7.351579,7.936684 7.371059,7.928896 7.388796,7.921804 7.406098,7.914321 7.423222,7.906327 7.443891,7.896623 7.464294,7.886206 7.484277,7.875124 7.496394,7.868501 7.508613,7.861393 7.520709,7.854005 7.546275,7.838281 7.571131,7.82151 7.595159,7.803686 7.602603,7.798247 7.609842,7.792716 7.617022,7.787072 7.680182,7.737448 7.737448,7.680182 7.787214,7.61675 L 7.707107,7.707107 C 7.742501,7.671713 7.774687,7.634326 7.803665,7.595307 7.82151,7.571131 7.838281,7.546275 7.853933,7.52066 7.861393,7.508613 7.868501,7.496394 7.875329,7.484062 7.886206,7.464294 7.896623,7.443891 7.906346,7.423099 7.914321,7.406098 7.921804,7.388796 7.928775,7.371336 7.936684,7.351579 7.943878,7.331798 7.950453,7.311736 7.955271,7.296851 7.959902,7.281463 7.964155,7.265993 7.970166,7.244436 7.97536,7.222746 7.979835,7.200794 7.983298,7.183375 7.986372,7.165949 7.988982,7.148467 7.990582,7.138236 7.992014,7.127455 7.993272,7.116621 l 0.00303,-0.03039 c 0.00154,-0.017966 0.0026,-0.035965 0.00318,-0.053976 L 8,7 V 2 C 8,1.447715 7.552285,1 7,1 6.487164,1 6.064493,1.38604 6.006728,1.883379 L 6,2 V 4.586 L 2.207107,0.7928932 c -0.390525,-0.3905243 -1.023689,-0.3905243 -1.4142138,0 -0.3905243,0.3905248 -0.3905243,1.0236888 0,1.4142138 L 4.584,6 H 2 C 1.487164,6 1.064493,6.38604 1.006728,6.883379 L 1,7 C 1,7.512836 1.38604,7.935507 1.883379,7.993272 L 2,8 Z m 9.20711,8.20711 c 0.39052,-0.39053 0.39052,-1.02369 0,-1.41422 L 12.414,11 H 15 c 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 16,10 C 16,9.487164 15.61396,9.064493 15.11662,9.006728 L 15,9 H 10 L 9.980646,9.000186 C 9.957319,9.000635 9.934005,9.001895 9.91075,9.003966 L 10,9 C 9.94938,9 9.899638,9.003761 9.851039,9.011019 9.834051,9.013628 9.816625,9.016702 9.799274,9.02024 9.777254,9.02464 9.755564,9.029834 9.73416,9.035721 9.718537,9.040098 9.703149,9.044729 9.687857,9.049738 9.668202,9.056122 9.648421,9.063316 9.628941,9.071104 9.611204,9.078196 9.593902,9.085679 9.576778,9.093673 9.556109,9.103377 9.535706,9.113794 9.515723,9.124876 9.503606,9.131499 9.491387,9.138607 9.479291,9.145995 9.453725,9.161719 9.428869,9.17849 9.404841,9.196314 9.397397,9.201753 9.390158,9.207284 9.382978,9.212928 9.319818,9.262552 9.262552,9.319818 9.212786,9.38325 L 9.292893,9.292893 C 9.257499,9.328287 9.225313,9.365674 9.196335,9.404693 9.17849,9.428869 9.161719,9.453725 9.146067,9.47934 9.138607,9.491387 9.131499,9.503606 9.124671,9.515938 9.113794,9.535706 9.103377,9.556109 9.093654,9.576901 9.085679,9.593902 9.078196,9.611204 9.071225,9.628664 9.063316,9.648421 9.056122,9.668202 9.049547,9.688264 9.044729,9.703149 9.040098,9.718537 9.035845,9.734007 9.029834,9.755564 9.02464,9.777254 9.020165,9.799206 9.016702,9.816625 9.013628,9.834051 9.011018,9.851533 9.009418,9.861764 9.007986,9.872545 9.006728,9.883379 L 9.003966,9.91075 C 9.001895,9.934005 9.000635,9.957319 9.000186,9.980646 L 9,10 v 5 c 0,0.55228 0.447715,1 1,1 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 11,15 v -2.584 l 3.79289,3.79111 c 0.39053,0.39052 1.02369,0.39052 1.41422,0 z" /></clipPath><clipPath
								 id="clipPath26"
								 clipPathUnits="userSpaceOnUse"><path
									id="path24"
									d="M -1200,-1044 H 80 V 36 h -1280 z" /></clipPath></defs><g
							  transform="matrix(1.3333333,0,0,-1.3333333,0,22.666667)"
							  id="g10"><g
								 id="g12" /><g
								 id="g14"><g
									clip-path="url(#clipPath20)"
									id="g16"><g
									  clip-path="url(#clipPath26)"
									  id="g22"><path
										 id="path28"
										 style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
										 d="M -0.5976311,17.59763 H 17.59763 V -0.5976311 H -0.5976311 Z" /></g></g></g></g></svg>` :
								`<svg id='fullscreenfalse' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>86D42A90-1C96-484C-B4A1-02C735EFC3F3</title>
									<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1200.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="Fullscreen-Icon" transform="translate(1200.000000, 19.000000)">
													<path d="M16,0 L16.0193545,0.000186147798 C16.042681,0.000634893312 16.0659949,0.00189498016 16.0892501,0.00396640833 L16,0 C16.0506203,0 16.1003621,0.00376118706 16.1489612,0.0110193427 C16.165949,0.0136280806 16.1833753,0.0167021706 16.2007258,0.020240071 C16.2227461,0.0246397952 16.2444365,0.0298336259 16.2658396,0.0357209664 C16.2814633,0.0400977346 16.2968513,0.0447287157 16.3121425,0.0497380859 C16.3317977,0.0561224864 16.3515792,0.0633157362 16.3710585,0.0711039637 C16.3887956,0.0781964242 16.4060985,0.0856790475 16.4232215,0.0936733617 C16.4438914,0.103376643 16.4642939,0.11379392 16.484277,0.12487577 C16.4963944,0.131498828 16.5086131,0.138606922 16.5207088,0.145995454 C16.546275,0.1617187 16.5711307,0.178490093 16.5951593,0.196313506 C16.602603,0.201753444 16.6098424,0.207284482 16.6170223,0.212927691 C16.6801818,0.262551711 16.7374483,0.319818245 16.787214,0.383249919 L16.7071068,0.292893219 C16.7425008,0.328287271 16.774687,0.365674419 16.8036654,0.404693385 C16.8215099,0.428869307 16.8382813,0.453725048 16.8539326,0.479339815 C16.8613931,0.491386894 16.8685012,0.503605559 16.8753288,0.515937903 C16.8862061,0.535706055 16.8966234,0.556108604 16.9063462,0.576900852 C16.914321,0.593901505 16.9218036,0.611204351 16.9287745,0.628663976 C16.9366843,0.648420797 16.9438775,0.668202324 16.9504533,0.688263589 C16.9552713,0.703148659 16.9599023,0.718536724 16.9641549,0.734007034 C16.9701664,0.755563524 16.9753602,0.777253921 16.9798348,0.799205901 C16.9832978,0.816624737 16.9863719,0.83405099 16.9889822,0.851533135 C16.9905825,0.861764108 16.9920139,0.872545084 16.9932723,0.883378875 L16.9962979,0.913769205 C16.9978436,0.931734513 16.9989053,0.949733631 16.9994829,0.967745384 L17,1 L17,6 C17,6.55228475 16.5522847,7 16,7 C15.4871642,7 15.0644928,6.61395981 15.0067277,6.11662113 L15,6 L15,3.414 L11.2071068,7.20710678 C10.8165825,7.59763107 10.1834175,7.59763107 9.79289322,7.20710678 C9.40236893,6.81658249 9.40236893,6.18341751 9.79289322,5.79289322 L13.584,2 L11,2 C10.4871642,2 10.0644928,1.61395981 10.0067277,1.11662113 L10,1 C10,0.487164161 10.3860402,0.0644928393 10.8833789,0.00672773133 L11,0 L16,0 Z M7.20710678,9.79289322 C7.59763107,10.1834175 7.59763107,10.8165825 7.20710678,11.2071068 L3.414,15 L6,15 C6.51283584,15 6.93550716,15.3860402 6.99327227,15.8833789 L7,16 C7,16.5128358 6.61395981,16.9355072 6.11662113,16.9932723 L6,17 L1,17 L0.967745384,16.9994829 C0.949733631,16.9989053 0.931734513,16.9978436 0.913769205,16.9962979 L1,17 C0.949379716,17 0.899637905,16.9962388 0.851038784,16.9889807 C0.83405099,16.9863719 0.816624737,16.9832978 0.799274239,16.9797599 C0.777253921,16.9753602 0.755563524,16.9701664 0.734160388,16.964279 C0.718536724,16.9599023 0.703148659,16.9552713 0.687857476,16.9502619 C0.668202324,16.9438775 0.648420797,16.9366843 0.628941476,16.928896 C0.611204351,16.9218036 0.593901505,16.914321 0.576778453,16.9063266 C0.556108604,16.8966234 0.535706055,16.8862061 0.515723049,16.8751242 C0.503605559,16.8685012 0.491386894,16.8613931 0.479291247,16.8540045 C0.453725048,16.8382813 0.428869307,16.8215099 0.404840697,16.8036865 C0.397396959,16.7982466 0.390157595,16.7927155 0.382977653,16.7870723 C0.319818245,16.7374483 0.262551711,16.6801818 0.212785965,16.6167501 L0.292893219,16.7071068 C0.257499166,16.6717127 0.225312953,16.6343256 0.196334578,16.5953066 C0.178490093,16.5711307 0.1617187,16.546275 0.146067433,16.5206602 C0.138606922,16.5086131 0.131498828,16.4963944 0.124671174,16.4840621 C0.11379392,16.4642939 0.103376643,16.4438914 0.0936537803,16.4230991 C0.0856790475,16.4060985 0.0781964242,16.3887956 0.0712254916,16.371336 C0.0633157362,16.3515792 0.0561224864,16.3317977 0.0495466818,16.3117364 C0.0447287157,16.2968513 0.0400977346,16.2814633 0.0358451423,16.265993 C0.0298336259,16.2444365 0.0246397952,16.2227461 0.0201651536,16.2007941 C0.0167021706,16.1833753 0.0136280806,16.165949 0.0110178009,16.1484669 C0.00941754284,16.1382359 0.00798605907,16.1274549 0.00672773133,16.1166211 L0.00396640833,16.0892501 C0.00189498016,16.0659949 0.000634893312,16.042681 0.000186147798,16.0193545 L0,16 L8.8817842e-16,11 C8.8817842e-16,10.4477153 0.44771525,10 1,10 C1.51283584,10 1.93550716,10.3860402 1.99327227,10.8833789 L2,11 L2,13.584 L5.79289322,9.79289322 C6.18341751,9.40236893 6.81658249,9.40236893 7.20710678,9.79289322 Z" id="Combined-Shape"></path>
											</g>
										</g>
									</g>
								</svg>`
							}
							 
						</div>
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
						</div>

				   
				</section>
					`)
					modalContent.style.maxHeight = '100vh'
					document.querySelector('.closeModal').addEventListener('click', () => setShowModalLetter(false))
					document.getElementById('fullscreenfalse')?.addEventListener('click', setFullscreen)	
					document.getElementById('fullscreentrue')?.addEventListener('click', setFullscreen)
					 
			}
		 
			if(isSeeProject) {
				modalContent.innerHTML = `
				<div class="swiper slider__custom">
					<div class="swiper-wrapper">
				 		 
					</div>
					<div class="swiper-button-next customBN"> </div>
					<div class="swiper-button-prev customBP"> </div>
				</div>`
				document.querySelector('.modal').insertAdjacentHTML('afterbegin', `<section class="seePortfolio">
				<div class="wrapper__nav">
				<p class="currentIndex">1/${isSeeFreelance ? freelanceProjects.length : nowescapeProjects.length}</p>
				<div class='nav__modal'>
					<div id='loop'> 
						<svg height='21px' width='21px' enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_227_"/><path d="M19,14c0,0.552-0.448,1-1,1h-3v3c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3h-3c-0.552,0-1-0.448-1-1s0.448-1,1-1  h3v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v3h3C18.552,13,19,13.448,19,14z" id="XMLID_230_"/></svg>
					</div>	
					<div id='fullscreen'>
							${isFullscreen ? `<svg id='fullscreentrue'
							xmlns:dc="http://purl.org/dc/elements/1.1/"
							xmlns:cc="http://creativecommons.org/ns#"
							xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
							xmlns:svg="http://www.w3.org/2000/svg"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 22.666668 22.666668"
							height="21"
							width="21"
							xml:space="preserve"
							id="svg2"
							version="1.1"><metadata
							  id="metadata8"><rdf:RDF><cc:Work
									rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
									  rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
							  id="defs6"><clipPath
								 id="clipPath20"
								 clipPathUnits="userSpaceOnUse"><path
									id="path18"
									d="M 7,8 7.019354,7.999814 C 7.042681,7.999365 7.065995,7.998105 7.08925,7.996034 L 7,8 C 7.05062,8 7.100362,7.996239 7.148961,7.988981 7.165949,7.986372 7.183375,7.983298 7.200726,7.97976 7.222746,7.97536 7.244436,7.970166 7.26584,7.964279 7.281463,7.959902 7.296851,7.955271 7.312143,7.950262 7.331798,7.943878 7.351579,7.936684 7.371059,7.928896 7.388796,7.921804 7.406098,7.914321 7.423222,7.906327 7.443891,7.896623 7.464294,7.886206 7.484277,7.875124 7.496394,7.868501 7.508613,7.861393 7.520709,7.854005 7.546275,7.838281 7.571131,7.82151 7.595159,7.803686 7.602603,7.798247 7.609842,7.792716 7.617022,7.787072 7.680182,7.737448 7.737448,7.680182 7.787214,7.61675 L 7.707107,7.707107 C 7.742501,7.671713 7.774687,7.634326 7.803665,7.595307 7.82151,7.571131 7.838281,7.546275 7.853933,7.52066 7.861393,7.508613 7.868501,7.496394 7.875329,7.484062 7.886206,7.464294 7.896623,7.443891 7.906346,7.423099 7.914321,7.406098 7.921804,7.388796 7.928775,7.371336 7.936684,7.351579 7.943878,7.331798 7.950453,7.311736 7.955271,7.296851 7.959902,7.281463 7.964155,7.265993 7.970166,7.244436 7.97536,7.222746 7.979835,7.200794 7.983298,7.183375 7.986372,7.165949 7.988982,7.148467 7.990582,7.138236 7.992014,7.127455 7.993272,7.116621 l 0.00303,-0.03039 c 0.00154,-0.017966 0.0026,-0.035965 0.00318,-0.053976 L 8,7 V 2 C 8,1.447715 7.552285,1 7,1 6.487164,1 6.064493,1.38604 6.006728,1.883379 L 6,2 V 4.586 L 2.207107,0.7928932 c -0.390525,-0.3905243 -1.023689,-0.3905243 -1.4142138,0 -0.3905243,0.3905248 -0.3905243,1.0236888 0,1.4142138 L 4.584,6 H 2 C 1.487164,6 1.064493,6.38604 1.006728,6.883379 L 1,7 C 1,7.512836 1.38604,7.935507 1.883379,7.993272 L 2,8 Z m 9.20711,8.20711 c 0.39052,-0.39053 0.39052,-1.02369 0,-1.41422 L 12.414,11 H 15 c 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 16,10 C 16,9.487164 15.61396,9.064493 15.11662,9.006728 L 15,9 H 10 L 9.980646,9.000186 C 9.957319,9.000635 9.934005,9.001895 9.91075,9.003966 L 10,9 C 9.94938,9 9.899638,9.003761 9.851039,9.011019 9.834051,9.013628 9.816625,9.016702 9.799274,9.02024 9.777254,9.02464 9.755564,9.029834 9.73416,9.035721 9.718537,9.040098 9.703149,9.044729 9.687857,9.049738 9.668202,9.056122 9.648421,9.063316 9.628941,9.071104 9.611204,9.078196 9.593902,9.085679 9.576778,9.093673 9.556109,9.103377 9.535706,9.113794 9.515723,9.124876 9.503606,9.131499 9.491387,9.138607 9.479291,9.145995 9.453725,9.161719 9.428869,9.17849 9.404841,9.196314 9.397397,9.201753 9.390158,9.207284 9.382978,9.212928 9.319818,9.262552 9.262552,9.319818 9.212786,9.38325 L 9.292893,9.292893 C 9.257499,9.328287 9.225313,9.365674 9.196335,9.404693 9.17849,9.428869 9.161719,9.453725 9.146067,9.47934 9.138607,9.491387 9.131499,9.503606 9.124671,9.515938 9.113794,9.535706 9.103377,9.556109 9.093654,9.576901 9.085679,9.593902 9.078196,9.611204 9.071225,9.628664 9.063316,9.648421 9.056122,9.668202 9.049547,9.688264 9.044729,9.703149 9.040098,9.718537 9.035845,9.734007 9.029834,9.755564 9.02464,9.777254 9.020165,9.799206 9.016702,9.816625 9.013628,9.834051 9.011018,9.851533 9.009418,9.861764 9.007986,9.872545 9.006728,9.883379 L 9.003966,9.91075 C 9.001895,9.934005 9.000635,9.957319 9.000186,9.980646 L 9,10 v 5 c 0,0.55228 0.447715,1 1,1 0.51284,0 0.93551,-0.38604 0.99327,-0.88338 L 11,15 v -2.584 l 3.79289,3.79111 c 0.39053,0.39052 1.02369,0.39052 1.41422,0 z" /></clipPath><clipPath
								 id="clipPath26"
								 clipPathUnits="userSpaceOnUse"><path
									id="path24"
									d="M -1200,-1044 H 80 V 36 h -1280 z" /></clipPath></defs><g
							  transform="matrix(1.3333333,0,0,-1.3333333,0,22.666667)"
							  id="g10"><g
								 id="g12" /><g
								 id="g14"><g
									clip-path="url(#clipPath20)"
									id="g16"><g
									  clip-path="url(#clipPath26)"
									  id="g22"><path
										 id="path28"
										 style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
										 d="M -0.5976311,17.59763 H 17.59763 V -0.5976311 H -0.5976311 Z" /></g></g></g></g></svg>` :
								`<svg id='fullscreenfalse' width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>86D42A90-1C96-484C-B4A1-02C735EFC3F3</title>
									<g id="Index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g id="Freelance-Screen-Shot-Pop-up-05" transform="translate(-1200.000000, -19.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="Fullscreen-Icon" transform="translate(1200.000000, 19.000000)">
													<path d="M16,0 L16.0193545,0.000186147798 C16.042681,0.000634893312 16.0659949,0.00189498016 16.0892501,0.00396640833 L16,0 C16.0506203,0 16.1003621,0.00376118706 16.1489612,0.0110193427 C16.165949,0.0136280806 16.1833753,0.0167021706 16.2007258,0.020240071 C16.2227461,0.0246397952 16.2444365,0.0298336259 16.2658396,0.0357209664 C16.2814633,0.0400977346 16.2968513,0.0447287157 16.3121425,0.0497380859 C16.3317977,0.0561224864 16.3515792,0.0633157362 16.3710585,0.0711039637 C16.3887956,0.0781964242 16.4060985,0.0856790475 16.4232215,0.0936733617 C16.4438914,0.103376643 16.4642939,0.11379392 16.484277,0.12487577 C16.4963944,0.131498828 16.5086131,0.138606922 16.5207088,0.145995454 C16.546275,0.1617187 16.5711307,0.178490093 16.5951593,0.196313506 C16.602603,0.201753444 16.6098424,0.207284482 16.6170223,0.212927691 C16.6801818,0.262551711 16.7374483,0.319818245 16.787214,0.383249919 L16.7071068,0.292893219 C16.7425008,0.328287271 16.774687,0.365674419 16.8036654,0.404693385 C16.8215099,0.428869307 16.8382813,0.453725048 16.8539326,0.479339815 C16.8613931,0.491386894 16.8685012,0.503605559 16.8753288,0.515937903 C16.8862061,0.535706055 16.8966234,0.556108604 16.9063462,0.576900852 C16.914321,0.593901505 16.9218036,0.611204351 16.9287745,0.628663976 C16.9366843,0.648420797 16.9438775,0.668202324 16.9504533,0.688263589 C16.9552713,0.703148659 16.9599023,0.718536724 16.9641549,0.734007034 C16.9701664,0.755563524 16.9753602,0.777253921 16.9798348,0.799205901 C16.9832978,0.816624737 16.9863719,0.83405099 16.9889822,0.851533135 C16.9905825,0.861764108 16.9920139,0.872545084 16.9932723,0.883378875 L16.9962979,0.913769205 C16.9978436,0.931734513 16.9989053,0.949733631 16.9994829,0.967745384 L17,1 L17,6 C17,6.55228475 16.5522847,7 16,7 C15.4871642,7 15.0644928,6.61395981 15.0067277,6.11662113 L15,6 L15,3.414 L11.2071068,7.20710678 C10.8165825,7.59763107 10.1834175,7.59763107 9.79289322,7.20710678 C9.40236893,6.81658249 9.40236893,6.18341751 9.79289322,5.79289322 L13.584,2 L11,2 C10.4871642,2 10.0644928,1.61395981 10.0067277,1.11662113 L10,1 C10,0.487164161 10.3860402,0.0644928393 10.8833789,0.00672773133 L11,0 L16,0 Z M7.20710678,9.79289322 C7.59763107,10.1834175 7.59763107,10.8165825 7.20710678,11.2071068 L3.414,15 L6,15 C6.51283584,15 6.93550716,15.3860402 6.99327227,15.8833789 L7,16 C7,16.5128358 6.61395981,16.9355072 6.11662113,16.9932723 L6,17 L1,17 L0.967745384,16.9994829 C0.949733631,16.9989053 0.931734513,16.9978436 0.913769205,16.9962979 L1,17 C0.949379716,17 0.899637905,16.9962388 0.851038784,16.9889807 C0.83405099,16.9863719 0.816624737,16.9832978 0.799274239,16.9797599 C0.777253921,16.9753602 0.755563524,16.9701664 0.734160388,16.964279 C0.718536724,16.9599023 0.703148659,16.9552713 0.687857476,16.9502619 C0.668202324,16.9438775 0.648420797,16.9366843 0.628941476,16.928896 C0.611204351,16.9218036 0.593901505,16.914321 0.576778453,16.9063266 C0.556108604,16.8966234 0.535706055,16.8862061 0.515723049,16.8751242 C0.503605559,16.8685012 0.491386894,16.8613931 0.479291247,16.8540045 C0.453725048,16.8382813 0.428869307,16.8215099 0.404840697,16.8036865 C0.397396959,16.7982466 0.390157595,16.7927155 0.382977653,16.7870723 C0.319818245,16.7374483 0.262551711,16.6801818 0.212785965,16.6167501 L0.292893219,16.7071068 C0.257499166,16.6717127 0.225312953,16.6343256 0.196334578,16.5953066 C0.178490093,16.5711307 0.1617187,16.546275 0.146067433,16.5206602 C0.138606922,16.5086131 0.131498828,16.4963944 0.124671174,16.4840621 C0.11379392,16.4642939 0.103376643,16.4438914 0.0936537803,16.4230991 C0.0856790475,16.4060985 0.0781964242,16.3887956 0.0712254916,16.371336 C0.0633157362,16.3515792 0.0561224864,16.3317977 0.0495466818,16.3117364 C0.0447287157,16.2968513 0.0400977346,16.2814633 0.0358451423,16.265993 C0.0298336259,16.2444365 0.0246397952,16.2227461 0.0201651536,16.2007941 C0.0167021706,16.1833753 0.0136280806,16.165949 0.0110178009,16.1484669 C0.00941754284,16.1382359 0.00798605907,16.1274549 0.00672773133,16.1166211 L0.00396640833,16.0892501 C0.00189498016,16.0659949 0.000634893312,16.042681 0.000186147798,16.0193545 L0,16 L8.8817842e-16,11 C8.8817842e-16,10.4477153 0.44771525,10 1,10 C1.51283584,10 1.93550716,10.3860402 1.99327227,10.8833789 L2,11 L2,13.584 L5.79289322,9.79289322 C6.18341751,9.40236893 6.81658249,9.40236893 7.20710678,9.79289322 Z" id="Combined-Shape"></path>
											</g>
										</g>
									</g>
								</svg>`
							}
							 
						</div>
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
			</div>
		 </section>
			`)
 
				modalContent.style.maxHeight = '100vh'
		 
				isSeeFreelancei ? freelanceProjects.map(project => document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', `<div class="swiper-slide"><img class="slideIMG" src="${project.img}" alt="pictureProject"/></div>`)  )
				 : nowescapeProjects.map(project => document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', `<div class="swiper-slide"><img class="slideIMG" src="${project.img}" alt="pictureProject"/></div>`)  )
				document.querySelector('.closeModal').addEventListener('click', () => setShowModalLetter(false))
				document.getElementById('loop').addEventListener('click', setImg)
				document.getElementById('fullscreenfalse')?.addEventListener('click', setFullscreen)	
					document.getElementById('fullscreentrue')?.addEventListener('click', setFullscreen)
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
 			if(themeIsDark) {
				document.documentElement.setAttribute('data-theme', 'light')
				const items = document.querySelectorAll('.display')
				items.forEach((item, i) => {
					item.setAttribute('href', imagesLight[i].src)
				
					
				})
			} 
			else {
				document.documentElement.setAttribute('data-theme', 'light')
				const items = document.querySelectorAll('.display')
				items.forEach((item, i) => {
					item.setAttribute('href', imagesBlack[i].src)
				
					
				})
				document.documentElement.setAttribute('data-theme', 'dark')
			} 
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
	document.querySelector('.nowespace__project-svg').addEventListener('click', () => setShowModalLetter(true))
	document.querySelector('.freelance__project-svg').addEventListener('click', () => {
		isSeeFreelance = true
		setShowModalLetter(true, isSeeFreelance)
	})
	aboutButton.addEventListener('click', scrollToAbout)
	portfolioButton.addEventListener('click', scrollToPortfolio)
	freelanceButton.addEventListener('click', () => {
 
		isSeeFreelance = true
		setShowModalLetter(true, isSeeFreelance)
	}  )
	 
}
window.onload = main
