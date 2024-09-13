

let delegationParentElement = document.querySelector('.ul-projects');   // editing
delegationParentElement.addEventListener('pointerover', showProjectPreview);
delegationParentElement.addEventListener('pointerout', hideProjectPreview);


let eventElement = '.link-to-project';  
let showAndHideElementStyleClassName = 'show-or-hide_project-review-area';  // editing. Add this class om element to HTML and set {display: none;} in css/scss


function showProjectPreview(event) {

    if (event.target.closest(eventElement)) {

        event.target.closest(eventElement).oncontextmenu = (event) => event.preventDefault();

                    // здесь (помойму) отключается контекстменю на элементе (previousElementSibling), который попадает под pointerover. Зделать под это контекстную переменную
        event.target.previousElementSibling.oncontextmenu = (event) => event.preventDefault();

                    // editing. showAndHideObject position relative to eventElement. То же самое. Помоему здесь previousElementSibling это show&HideObject-объект. Сделать под него переменную
        event.target.previousElementSibling.classList.toggle(showAndHideElementStyleClassName);


    };
};


function hideProjectPreview(event) {
    if (event.target.closest(eventElement)) {

                    // editing. showAndHideObject position relative to eventElement. То же самое. Помоему здесь previousElementSibling это show&HideObject-объект. Сделать под него переменную
        event.target.previousElementSibling.classList.toggle(showAndHideElementStyleClassName);
    }
};
