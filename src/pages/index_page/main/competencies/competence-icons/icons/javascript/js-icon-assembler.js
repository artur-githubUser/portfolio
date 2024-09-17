import {tagAndAttributeConstructor} from '../../../../../../../js-library-presets/tag-And-Attribute-Constructor/tagAndAttributeConstructor.js';


let tagLi =  new tagAndAttributeConstructor.defaultTag ('li', 'gulp-competence-icon','competence-style');

let tagImg = new tagAndAttributeConstructor.imgTag (
    'img',
    'javascript-competence-icon',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/javascript/javascript.svg',
    'javascript');


tagLi.tag.append(tagImg.tag);

document.getElementById("competencies-list").append(tagLi.tag);


console.log(tagLi.tag);


console.log('hi');