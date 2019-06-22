// set cookie
function setCookie(cookieName) {
	var today = new Date(),
		expire = new Date(),
		skipAds = readCookie('skipAds'),
		pageLast = readCookie('pageLast'),
		skipInt = 0;
	if (skipAds) {
		skipInt = parseInt(skipAds);
		if (skipInt > 1) return true;
		if (window.location.href == pageLast) return false;
	}
	expire.setTime(today.getTime() + (24 * 60 * 60 * 1000));
	document.cookie = cookieName + "=" + escape(skipInt + 1) + ";expires=" + expire.toGMTString();
	document.cookie = "pageLast" + "=" + window.location.href + ";expires=" + expire.toGMTString();
}

// read cookie
function readCookie(name) {
	var nameEQ = name + "=",
		ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

// function you need to call
function fullScreenAds() {
	var skipAds = readCookie('skipAds'),
		skipAdsInt = parseInt(skipAds);
	if (skipAdsInt > 1) {
		alert("I'm Alert");
	}
}
setCookie('skipAds');
fullScreenAds();
