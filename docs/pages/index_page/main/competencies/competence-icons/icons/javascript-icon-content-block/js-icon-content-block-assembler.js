import {tagAndAttributeConstructor} from '../../../../../../../js-utilities/tag-And-Attribute-Constructor/tagAndAttributeConstructor.js';
import iconContentBlockAssembler from '../iconContentBlockAssembler.js';

let tagLi =  new tagAndAttributeConstructor.defaultTag ('li', 'js-competence-icon','competence-style');

let tagImg = new tagAndAttributeConstructor.imgTag (
    'img',
    'javascript-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/javascript-icon-content-block/javascript.svg',
    'javascript');



let javascriptIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default javascriptIconContentBlock;

