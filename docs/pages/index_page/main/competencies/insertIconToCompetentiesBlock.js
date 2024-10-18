// не получается импортировать эту функцию с динамическим экспортом (для помещения в js-utilities) - разобраться

// в readme написать, что по умолчанию родительский элемент определяется по id

//  модифицировать:
//  всделать функцию-модификатор, которая будет брать parentBlock по классу css - указать в названии функций
//  экспортировать чтобы брать ту функцию ,которую удобно брать (с id или c классом)

function insertContentBlockAppendParentBlock (stringPathToContentBlockModule, stringParentBlockId) {
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

