function createHideButton() {
	document.querySelector('.MapLayout_Rightbar').innerHTML += '<div class="kasztandorsHideButton" style="transition: .25s; position: absolute; top: 0; right: 320px; width: 56px; height: 56px; background-color: #dfdfdf; color: #686868; display: flex; justify-content: center; align-items: center;"><svg style="transform: rotate(180deg);" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></div>';
	document.querySelector('.kasztandorsHideButton').addEventListener('mouseover', () => {
		document.querySelector('.kasztandorsHideButton').style.backgroundColor = '#cfcfcf';
	})
	document.querySelector('.kasztandorsHideButton').addEventListener('mouseleave', () => {
		document.querySelector('.kasztandorsHideButton').style.backgroundColor = '#dfdfdf';
	})
	document.querySelector('.kasztandorsHideButton').addEventListener('click', () => {
		//if have hidden property
		if (document.querySelector(".MapLayout_Rightbar").classList.contains("hide")) {
			document.querySelector(".MapLayout_Rightbar").classList.remove("hide");
			document.querySelector('.kasztandorsHideButton').style.right = '320px';
		}
		else {
			document.querySelector(".MapLayout_Rightbar").classList.add("hide");
			document.querySelector('.kasztandorsHideButton').style.right = '370px';
		}
	})
}
let interval = setInterval(() => {
  if (document.querySelectorAll('.MapRightbar').length > 0) {
	clearInterval(interval);
	createHideButton();
  }
}, 100);
