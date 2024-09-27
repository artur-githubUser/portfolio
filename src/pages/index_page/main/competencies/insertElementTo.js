//  это функция импортирует и вставляет собранный элемент страницы
//  здесь просто инициировать-написать функцию и экспортировать её
// это будет библиотечный вариант


//  *   вроде динамический импорт не требует type='module' в html


import("./competence-icons/icons/javascript/js-icon-assembler.js")
    .then(({javascriptIcon}) => {document.getElementById("competencies-list").append(javascriptIcon)});


import("./competence-icons/icons/gulp/gulp-icon-assembler.js")
     .then(({gulpIcon}) => {document.getElementById("competencies-list").append(gulpIcon)});


console.log('hi from importAndInsertElements');

