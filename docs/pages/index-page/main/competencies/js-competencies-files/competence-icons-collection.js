// работает с querySelector:
// function arrayPushItemDynamicImport () {
//     import("../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js")
//     .then( module => document.querySelector('.competencies-list-styles').append(module.default));
// }
// arrayPushItemDynamicImport();
//  ==============================================================================


// мб организовать автоматический импорт и вставку в будущем через работу с файлами?
//  ===============================================================================


let competenceIconsCollection = [];
export default competenceIconsCollection;


function push (
    importedContentBlock,
    contentArray = competenceIconsCollection
    ) {
    contentArray.push(importedContentBlock);
}


// =============================================================================

import gulpIconContentBlock from "../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js";
push(gulpIconContentBlock);

import javascriptIconContentBlock from "../competence-icons/icons/javascript-icon-content-block/js-icon-content-block-assembler.js";
push(javascriptIconContentBlock);

import gitIconContentBlock from "../competence-icons/icons/git-icon-content-block/git-icon-content-block-assembler.js";
push(gitIconContentBlock);




