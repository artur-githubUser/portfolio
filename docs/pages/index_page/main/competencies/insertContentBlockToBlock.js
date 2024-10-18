//  это функция импортирует и вставляет собранный элемент страницы
//  здесь просто инициировать-написать функцию и экспортировать её
// это будет библиотечный вариант


//  *   вроде динамический импорт не требует type='module' в html


// в readme написать, что по умолчанию родительский элемент определяется по id





console.log('закинуть это в утилиты наверное');

function insertContentBlockAppendParentBlock (stringPathToContentBlockModule, stringParentBlockId) { //stringPathToModule, placedElement,  stringObjectId
    
    import(stringPathToContentBlockModule)
    .then( module => document.getElementById(stringParentBlockId).append(module.default) )
}





insertContentBlockAppendParentBlock(
    "./competence-icons/icons/javascript-icon-content-block/js-icon-content-block-assembler.js",
    'competencies-list',
);


insertContentBlockAppendParentBlock(
    "./competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js",
    'competencies-list',
);



export {insertElementToObject}



