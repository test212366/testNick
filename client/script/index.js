 
const main = () => {
	const changeThemeButton = document.getElementById('theme'),
		bottomLight = document.querySelector('.bottom__light')

	let themeIsDark = true 
 
	//setAttribute for theme application
	document.documentElement.setAttribute('data-theme', 'dark')
	
	//event change theme
	changeThemeButton.addEventListener('click', () => {
 		if(themeIsDark) {
			themeIsDark = false
			document.documentElement.setAttribute('data-theme', 'light')
			bottomLight.classList.add('lightTheme')
		} else {
			themeIsDark = true
			document.documentElement.setAttribute('data-theme', 'dark')
			bottomLight.classList.remove('lightTheme')
		}
	})
}
document.addEventListener('DOMContentLoaded', main)
