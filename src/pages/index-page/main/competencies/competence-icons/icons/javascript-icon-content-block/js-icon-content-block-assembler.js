import { ElementConstructor } from '../../../../../../../js-utilities/element-constructor/element-constructor.js';
import iconContentBlockAssembler from '../iconContentBlockAssembler.js';

let tagLi =  new ElementConstructor.defaultTag ('li', 'js-competence-icon','competence-style');

let tagImg = new ElementConstructor.imgTag (
    'img',
    'javascript-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/javascript-icon-content-block/javascript.svg',
    'javascript');



let javascriptIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default javascriptIconContentBlock;

