// работает с querySelector:
// function arrayPushItemDynamicImport () {
//     import("../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js")
//     .then( module => document.querySelector('.competencies-list-styles').append(module.default));
// }
// arrayPushItemDynamicImport();
//  ==============================================================================


// мб организовать автоматический импорт и вставку в будущем через бэк?
//  ===============================================================================


let competenceIconsCollection = [];
export default competenceIconsCollection;

function push (importedContentBlock) {
    competenceIconsCollection.push(importedContentBlock);
}

// =============================================================================

import gulpIconContentBlock from "../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js";
push(gulpIconContentBlock);

import javascriptIconContentBlock from "../competence-icons/icons/javascript-icon-content-block/js-icon-content-block-assembler.js";
push(javascriptIconContentBlock);




