// ____________________________________
//                             PROJECTS

// creating new project ////////////////
  
let liProject = document.createElement('li');
liProject.classList.add('li-project');
liProject.setAttribute('name', 'autoheadlines');
document.querySelector('.ul-projects').prepend(liProject);

let projectReviewArea = document.createElement('div');
projectReviewArea.classList.add('project-review-area', 'show-or-hide_project-review-area');
liProject.prepend(projectReviewArea);

let projectReviewContainer = document.createElement('div');
projectReviewContainer.classList.add('project-review-container');
projectReviewArea.prepend(projectReviewContainer);

let projecPicturePosition = document.createElement('div');
projecPicturePosition.classList.add('project-picture-position');
projectReviewContainer.prepend(projecPicturePosition);

let projectPicture = document.createElement('img');
projectPicture.classList.add('project-picture');
projectPicture.src = "images/ah.webp";
projectPicture.alt = "autoheadlines";
projecPicturePosition.prepend(projectPicture);

let linkToProject = document.createElement('a');
linkToProject.classList.add('link-to-project');
linkToProject.href = '';
linkToProject.target = '_blank';
linkToProject.textContent = 'project which  is created in js';
document.querySelector('.project-review-area').after(linkToProject);

// show&hide project-preview ///////

// document.querySelector('.ul-projects').addEventListener('pointerover', showProjectPreview);  //     закинуть переменную на '.ul-projects' (Родительский элемент делегирования)
// document.querySelector('.ul-projects').addEventListener('pointerout', hideProjectPreview);      //

// function showProjectPreview(event) {
//     if (event.target.closest('.link-to-project')) {     // элемент события
//         event.target.closest('.link-to-project').oncontextmenu = function(event) {      //  отключение контекстного меню в смарфтоне на элементе события
//             if (event.defaultPrevented) {
//                 return;
//             }
//             event.preventDefault();
            
//         };
//         event.target.previousElementSibling.classList.toggle('show-or-hide_project-review-area');   //  добавляется к блоку в css, котрорый нужно show 
//         document.querySelector('.project-picture').oncontextmenu = function(event) {        //  отключение контекстного меню в смарфтоне на showAndHide элементе
//             if (event.defaultPrevented) {
//              return;
//             }
//             event.preventDefault();
//         };
//     };
// };

// function hideProjectPreview(event) {
//     if (event.target.closest('.link-to-project')) {          // элемент события
//         event.target.previousElementSibling.classList.add('show-or-hide_project-review-area');   // добавляется к блоку в css, котрорый нужно hide
//     }
// };
    
//// show&hide project-preview new version ///////

// document.querySelector('.ul-projects').addEventListener('pointerover', showProjectPreview);  //     закинуть переменную на '.ul-projects' (Родительский элемент делегирования)
// document.querySelector('.ul-projects').addEventListener('pointerout', hideProjectPreview);      //

// function showProjectPreview(event) {
//     if (event.target.closest('.link-to-project')) {     // элемент события
//         event.target.closest('.link-to-project').oncontextmenu = function(event) {      //  отключение контекстного меню в смарфтоне на элементе события
//             if (event.defaultPrevented) {
//                 return;
//             }
//             event.preventDefault();
            
//         };
//         // event.target.previousElementSibling.classList.toggle('show-or-hide_project-review-area');  // (вариант в оригинальном проекте) этот класс добавляется к блоку в css, котрорый нужно show со стилями:  {display: none;}
//         document.querySelector('.project-picture').classList.toggle('show-or-hide_project-review-area');    //  (новый) этот класс добавляется к блоку в HTML и в css/scss, которому нужно добавить show со стилями:  {display: none;}
//         document.querySelector('.project-picture').oncontextmenu = function(event) {        //  отключение контекстного меню в смарфтоне на элементе превью
//             if (event.defaultPrevented) {
//              return;
//             }
//             event.preventDefault();
//         };
//     };
// };

// function hideProjectPreview(event) {
//     if (event.target.closest('.link-to-project')) {          // элемент события

//         // event.target.previousElementSibling.classList.add('show-or-hide_project-review-area');   // (вариант в оригинальном проекте) добавляется к блоку в css, котрорый нужно hide
//         document.querySelector('.project-picture').classList.add('show-or-hide_project-review-area');    //  (новый) этот класс добавляется к блоку в HTML и в css/scss, которому нужно добавить hide со стилями:  {display: none;}
        
//     }
// };