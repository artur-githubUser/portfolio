//  это функция импортирует и вставляет собранный элемент страницы
//  здесь просто инициировать-написать функцию и экспортировать её
// это будет библиотечный вариант


//  *   вроде динамический импорт не требует type='module' в html



console.log('hi from insertElementTo');

function insertElementToObject (stringPathToModule, stringObjectId) { //stringPathToModule, placedElement,  stringObjectId
    
    import(stringPathToModule)
    .then( module => document.getElementById(stringObjectId).append(module.default) )
}

insertElementToObject(
    "./competence-icons/icons/javascript/js-icon-assembler.js",
    'competencies-list',
);

