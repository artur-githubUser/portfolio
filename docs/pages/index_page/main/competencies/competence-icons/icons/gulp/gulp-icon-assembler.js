import { tagAndAttributeConstructor } from "../../../../../../../js-utilities/tag-And-Attribute-Constructor/tagAndAttributeConstructor.js";
// import {categoryConstructorWithProperties} from "../../../../../../../js-utilities/category-constructor-with-properties/categoryConstructorWithProperties.js";


let tagLi = new tagAndAttributeConstructor.defaultTag(
    'li',
    'gulp-competence-icon',
    'competence-style'
);

let tagImg = new tagAndAttributeConstructor.imgTag(
    'img',
    'gulp-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/gulp/gulp.svg',
    'gulp'
);

tagLi.tag.append(tagImg.tag);

let gulpIcon = tagLi.tag;


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
            console.log(`please enter one of this value: ${this.itDirectionOptions.join(', ')}`);
        }

        
    }
}

let gulpIconOptions = new CategoryConstructorWithOptions ('frontend');

gulpIcon.gulpIconOptions = gulpIconOptions;
console.log(Object.values(gulpIcon));



export default gulpIcon;


