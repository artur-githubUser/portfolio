
// function insertContentBlockAppendParentBlock (stringPathToContentBlockModule, stringParentBlockId) {
//     import(stringPathToContentBlockModule)
//     .then( module => document.getElementById(stringParentBlockId).append(module.default) )
// }



// insertContentBlockAppendParentBlock(
//     "./competence-icons/icons/javascript-icon-content-block/js-icon-content-block-assembler.js",
//     'competencies-list',
// );


// insertContentBlockAppendParentBlock(
//     "./competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js",
//     'competencies-list',
// );

//=================================================================================




console.log('hi from insert comp block');


import competenceIconsCollection from "./competence-icons-collection.js";
document.querySelector('.competencies-list-styles').append(...competenceIconsCollection);





