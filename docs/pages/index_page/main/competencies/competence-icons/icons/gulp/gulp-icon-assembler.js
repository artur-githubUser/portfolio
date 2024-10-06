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

class CategoryConstructorWithProperties {
    
    constructor (itDirectionValue) {
        this.itDirection = itDirectionValue;
    }

    set itDirection(value) {
        
        if (value != 'frontend') {
            console.log('not true');
        } else {
            this._itDirection = value;
        }
    }
}

let gulpIconProperties = new CategoryConstructorWithProperties ('frontend');
// gulpIcon.gulpIconProperties = gulpIconProperties;
console.log(gulpIconProperties);




    
    // setItDirectionValue(value) {
    //     try {
    //         if (this.itDirection == ('backend' || 'frontend' || 'other')) {
    //             return this.itDirectionValue == value;
    //         } else {
    //             class PropertyInstallationError extends Error {
    //                 constructor(message) {
    //                     super(message);
    //                     this.name = "PropertyInstallationError";
    //                 }
    //             }
    //             throw new PropertyInstallationError("for the itDirection parameter, only one of these string arguments is used: backend, frontend, other");
    //         }
    //     } catch(error) {
    //         console.log(error.message);
    //     }
    // }



// let gulpIconProperties = new CategoryConstructorWithProperties ('frontend');
// // gulpIcon.gulpIconProperties = gulpIconProperties;
// console.log(gulpIconProperties.itDirection);

//  =test=======================================


export default gulpIcon;


