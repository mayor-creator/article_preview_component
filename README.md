# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Solution screenshot](./articePreview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
function displayShareContainer() {
	if (window.matchMedia("(max-width:480px)").matches) {
		profileContainer.style.display = "none";
		hiddenShareContainer.style.display = "block";
	} else {
		profileContainer.style.display = "flex";
		hiddenShareContainer.style.display = "block";
	}
}
```

### Continued development

- Building more vanilla javaScript projects
- Event handlers and listeners

### Useful resources

- [Window: matchMedia() Method](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) - This helped me to understand how to implement media query values into a script. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@mayor-creator](https://www.frontendmentor.io/profile/mayor-creator)
- Threads - [@mayor_creator](https://www.threads.net/@mayor_creator)

## Acknowledgments
