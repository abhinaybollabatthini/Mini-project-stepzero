document.addEventListener('DOMContentLoaded', () => {
    const zoomImg = document.getElementById('zoom-img');
    const main = document.querySelector(".main");
    const replacementContent = document.querySelector('.replacement-content');
    let scale = 1.2;
    let mainIsDisplayed = true;

    zoomImg.style.transform = `scale(${scale})`;

    // Handle wheel (scroll) events
    function handleScroll(event) {
        if (event.deltaY > 0 && scale >= 0.5) {
            // Scroll down
            scale -= 0.1;
            console.log(scale);
            if (scale < 0.7 && scale >= 0.6) {
                replacementContent.style.display = "block";
                main.style.zIndex = '2';
                replacementContent.style.zIndex = '1';
                replacementContent.style.opacity = 0.3;
            } else if (scale <= 0.5) {
                scale = 0.5;
                main.style.display = "none";
                replacementContent.style.display = "block";
                replacementContent.style.opacity = 1;
            } else {
                zoomImg.style.transform = `scale(${scale})`;
            }
        } else {
            // Scroll up
            scale += 0.1;
            if (scale > 1.2) {
                scale = 1.2;
                zoomImg.style.opacity = 1;
                replacementContent.style.display = "none";
            } else if (scale <= 0.6) {
                main.style.display = "block";
                replacementContent.style.display = "block";
                main.style.zIndex = '2';
                replacementContent.style.zIndex = '1';
                replacementContent.style.opacity = 0.3;
            } else if (scale > 0.5 && scale < 1) {
                zoomImg.style.transform = `scale(${scale})`;
                replacementContent.style.display = "none";
            } else {
                zoomImg.style.transform = `scale(${scale})`;
            }
        }
    }

    if (mainIsDisplayed) {
        window.addEventListener('wheel', handleScroll);
    } else {
        return;
    }

    // Handle touch events for mobile devices
    let touchStartY = 0;

    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        const touchMoveY = event.touches[0].clientY;
        const touchDifference = touchStartY - touchMoveY;

        if (touchDifference > 0 && scale >= 0.5) {
            // Swipe up
            scale -= 0.1;
            if (scale < 0.7 && scale >= 0.6) {
                replacementContent.style.display = "block";
                main.style.zIndex = '2';
                replacementContent.style.zIndex = '1';
                replacementContent.style.opacity = 0.3;
            } else if (scale <= 0.5) {
                scale = 0.5;
                main.style.display = "none";
                replacementContent.style.display = "block";
                replacementContent.style.opacity = 1;
            } else {
                zoomImg.style.transform = `scale(${scale})`;
            }
        } else {
            // Swipe down
            scale += 0.1;
            if (scale > 1.2) {
                scale = 1.2;
                zoomImg.style.opacity = 1;
                replacementContent.style.display = "none";
            } else if (scale <= 0.6) {
                main.style.display = "block";
                replacementContent.style.display = "block";
                main.style.zIndex = '2';
                replacementContent.style.zIndex = '1';
                replacementContent.style.opacity = 0.3;
            } else if (scale > 0.5 && scale < 1) {
                zoomImg.style.transform = `scale(${scale})`;
                replacementContent.style.display = "none";
            } else {
                zoomImg.style.transform = `scale(${scale})`;
            }
        }

        // Prevent default touch behavior
        event.preventDefault();
    }

    if (mainIsDisplayed) {
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
    } else {
        return;
    }

    // Existing event listeners for other elements
    const homeIcon = document.querySelector(".home-icon");
    const forms = document.querySelector(".forms");
    const ninja = document.querySelector(".ninja");
    const analyst = document.querySelector(".analyst");
    const fillform = document.querySelector(".fillform");
    fillform.style.display = "none";
    forms.style.display = "none";
    const openFLows = document.querySelector(".open-flows");
    const options = document.querySelector(".options");
    options.style.display = "none";

    homeIcon.addEventListener('click', () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        fillform.style.display = "none";
        mainIsDisplayed = false;
        main.style.display = "none";
        replacementContent.style.display = "none";
        forms.style.display = "block";
    });

    let optionsClicked = false;
    openFLows.addEventListener('click', () => {
        optionsClicked = !optionsClicked;
        if (optionsClicked) {
            options.style.display = "block";
        } else {
            options.style.display = "none";
        }
    });

    ninja.addEventListener('click', () => {
        forms.style.display = "none";
        fillform.style.display = "block";
    });

    analyst.addEventListener('click', () => {
        forms.style.display = "none";
        fillform.style.display = "block";
    });

    const logo = document.querySelector(".logo");
    logo.addEventListener('click', () => {
        location.reload();
    });
});
