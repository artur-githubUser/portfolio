import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'css-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'css-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/css-icon-content-block/css.svg',
    'css'
);


let cssIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default cssIconContentBlock;