

let delegationParentElement = document.querySelector('.ul-projects');   // editing
delegationParentElement.addEventListener('pointerover', showProjectPreview);
delegationParentElement.addEventListener('pointerout', hideProjectPreview);


let eventElement = '.link-to-project';  
let showAndHideElementStyleClassName = 'show-or-hide_project-review-area';  // editing. Add this class om element to HTML and write {display: none;} in css/scss


function showProjectPreview(event) {

    if (event.target.closest(eventElement)) {

        function disablingContextMenuOnSmarfone (event) {
            if (event.defaultPrevented) {
                return;
            }
            event.preventDefault();
        }

        event.target.closest(eventElement).oncontextmenu = disablingContextMenuOnSmarfone;

                    // editing. showAndHideObject position relative to eventElement
        event.target.previousElementSibling.oncontextmenu = disablingContextMenuOnSmarfone;

                    // editing. showAndHideObject position relative to eventElement
        event.target.previousElementSibling.classList.toggle(showAndHideElementStyleClassName);


    };
};


function hideProjectPreview(event) {
    if (event.target.closest(eventElement)) {

                    // editing. showAndHideObject position relative to eventElement
        event.target.previousElementSibling.classList.toggle(showAndHideElementStyleClassName);
    }
};
