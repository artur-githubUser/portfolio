



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



console.log('hi from js comp files');


import {ElementConstructor} from "../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../competence-icons/icons/iconContentBlockAssembler.js";


let tagTestUl = new ElementConstructor.defaultTag(
    'ul',
    'test-ul',
    'test-ul-styles'
);

let tagTestLi = new ElementConstructor.defaultTag(
    'li',
    'test-li',
    'test-li-styles'
)

// собранный Ul
// let testUlContentBlock = iconContentBlockAssembler(tagTestUl, tagTestLi);

document.querySelector('.competencies-container-styles').append(tagTestUl.tag);
document.querySelector('.test-ul-styles').append(tagTestLi.tag);




