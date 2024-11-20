import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'mobileFirst-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'mobileFirst-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/mobile-first-icon-content-block/mobile-first.svg',
    'mobileFirst'
);


let mobileFirstIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default mobileFirstIconContentBlock;