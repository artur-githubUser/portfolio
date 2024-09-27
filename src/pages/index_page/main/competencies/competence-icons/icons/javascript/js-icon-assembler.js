import {tagAndAttributeConstructor} from '../../../../../../../js-utilities/tag-And-Attribute-Constructor/tagAndAttributeConstructor.js';


let tagLi =  new tagAndAttributeConstructor.defaultTag ('li', 'js-competence-icon','competence-style');

let tagImg = new tagAndAttributeConstructor.imgTag (
    'img',
    'javascript-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/javascript/javascript.svg',
    'javascript');


tagLi.tag.append(tagImg.tag);

let javascriptIcon = tagLi.tag;




export {javascriptIcon}

