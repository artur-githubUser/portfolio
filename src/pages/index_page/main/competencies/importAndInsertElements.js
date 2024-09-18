//  это функция импортирует и вставляет собранный элемент страницы
//  здесь просто инициировать-написать функцию и экспортировать её
// это будет библиотечный вариант



import("./competence-icons/icons/javascript/js-icon-assembler.js")
    .then(({javascriptIcon}) => {document.getElementById("competencies-list").append(javascriptIcon)});





console.log('hi from importAndInsertElements');

