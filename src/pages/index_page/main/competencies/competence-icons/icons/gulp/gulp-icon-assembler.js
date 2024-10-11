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

//  это сборщик
function assemlbleElement (...elements) {
    elements[0].tag
    .appendChild(elements[1].tag)
    .appendChild(elements[2].tag);
    return elements[0].tag;
}
let gulpIcon = assemlbleElement(tagLi, tagSpan, tagImg);




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


