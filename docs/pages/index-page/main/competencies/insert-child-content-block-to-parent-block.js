// написать функцию-модуль (утилиту), которая будет определять родительский блок по id или по css-селектору
// эту фунцию-модуль (утилиту) импортировать в вставляемый модуль (контент блок)
// вставлятся должно по выбору: prepend или append
// запуск фунцции должен выглядеть примерно так: insertChildContentBlockToParentBlock(childContentBlock, prepend, parentBlock)


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

