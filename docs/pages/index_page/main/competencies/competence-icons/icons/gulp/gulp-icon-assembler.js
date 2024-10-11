import { NodeElementConstructor } from "../../../../../../../js-utilities/tag-And-Attribute-Constructor/NodeElementConstructor.js";
// import {categoryConstructorWithProperties} from "../../../../../../../js-utilities/category-constructor-with-properties/categoryConstructorWithProperties.js";


let tagLi = new NodeElementConstructor.defaultTag(
    'li',
    'gulp-competence-icon',
    'competence-style'
);

let tagImg = new NodeElementConstructor.imgTag(
    'img',
    'gulp-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/gulp/gulp.svg',
    'gulp'
);

// tagLi.tag.prepend(tagImg.tag);
// let gulpIcon = tagLi.tag;


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let tagSpan = new NodeElementConstructor.defaultTag(
    'span',
    'just-span',
    'span-styles',
)

// let elements = [tagSpan, tagImg];
function matryoshkaElementAssemling(parentElement, ...elements) {



    let result = elements.reduce(function (previousElement, item, index, array) {

            previousElement.prepend(item.tag);
            return previousElement;
        }, parentElement)

    return result;

}

let gulpIcon = matryoshkaElementAssemling(tagLi.tag, tagSpan);



// function insertElementInsideElement (outerElement, innerElement) {
//     if (('tag' in outerElement) & ('tag' in innerElement)) {
//         outerElement.tag.prepend(innerElement.tag);
//         return outerElement.tag;
//     } else {
//         console.log('something goes wrong');
//     }
// };

// let gulpIcon = insertElementInsideElement(tagLi, tagImg)




//  =test=======================================

class CategoryConstructorWithOptions {
    
    itDirectionOptions = [
        'frontend',
        'backend',
        'other',
    ]


    constructor (itDirectionValue) {
        this.itDirection = itDirectionValue;
    }

    set itDirection(value) {
        
        if (this.itDirectionOptions.includes(value)) {
            this._itDirection = value;
        } else {
            //  мб просто создать ошибку и вывести её в консось?
            console.log(`please enter one of this value: ${this.itDirectionOptions.join(', ')}`);
        }

        
    }
}

let gulpIconOptions = new CategoryConstructorWithOptions ('frontend');

gulpIcon.gulpIconOptions = gulpIconOptions;
console.log(Object.values(gulpIcon));



export default gulpIcon;


