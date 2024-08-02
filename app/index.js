let shareButton = document.getElementById("button");
let profileContainer = document.getElementById("profileContainer");
let hiddenShareContainer = document.getElementById("hiddenShare");
let closeShareButton = document.getElementById("closeShareButton");

function displayShareContainer() {
	if (window.matchMedia("(max-width:480px)").matches) {
		profileContainer.style.display = "none";
		hiddenShareContainer.style.display = "block";
	} else {
		profileContainer.style.display = "flex";
		hiddenShareContainer.style.display = "block";
	}
}

function closeShareButtonContainer() {
	profileContainer.style.display = "flex";
	hiddenShareContainer.style.display = "none";
}

shareButton.addEventListener("click", displayShareContainer);
closeShareButton.addEventListener("click", closeShareButtonContainer);
