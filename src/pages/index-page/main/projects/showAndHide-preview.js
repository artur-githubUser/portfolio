

let delegationParentElement = document.querySelector('.ul-projects');   // editing
delegationParentElement.addEventListener('pointerover', showProjectPreview);
delegationParentElement.addEventListener('pointerout', hideProjectPreview);

let eventElement = '.link-to-project';  
let showAndHideElementStyleClassName = 'show-or-hide_project-review-area';  // editing. Add this class om element to HTML and set {display: none;} in css/scss


function showProjectPreview(event) {

    if (event.target.closest(eventElement)) {

        event.target.closest(eventElement).oncontextmenu = (event) => event.preventDefault();

                    // editing. The element that also fell within the click area
        //  подумать как положить это  ---------------------------   в переменную
        event.target.closest('.li-project').querySelector('.project-review-area').oncontextmenu = (event) => event.preventDefault();
        //  подумать как положить это  ---------------------------   в переменную
        event.target.closest('.li-project').querySelector('.project-review-area').classList.toggle(showAndHideElementStyleClassName);


    };
};


function hideProjectPreview(event) {
    if (event.target.closest(eventElement)) {

        //  подумать как положить это  ---------------------------   в переменную
        event.target.closest('.li-project').querySelector('.project-review-area').classList.toggle(showAndHideElementStyleClassName);
    }
};
