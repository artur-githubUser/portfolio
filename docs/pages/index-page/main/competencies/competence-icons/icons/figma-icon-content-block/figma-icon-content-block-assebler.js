import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'figma-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'figma-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/figma-icon-content-block/figma.svg',
    'figma'
);


let figmaIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default figmaIconContentBlock;