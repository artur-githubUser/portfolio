import { ElementConstructor } from "../../../../../../../js-utilities/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";

// import {categoryConstructorWithProperties} from "../../../../../../../js-utilities/category-constructor-with-properties/categoryConstructorWithProperties.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'gulp-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'gulp-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/gulp-icon-content-block/gulp.svg',
    'gulp'
);


let gulpIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


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

gulpIconContentBlock.gulpIconOptions = gulpIconOptions;
console.log(Object.values(gulpIconContentBlock));



export default gulpIconContentBlock;


