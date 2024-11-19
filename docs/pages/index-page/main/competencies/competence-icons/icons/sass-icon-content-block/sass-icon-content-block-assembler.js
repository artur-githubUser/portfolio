import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'sass-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'sass-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/sass-icon-content-block/sass.svg',
    'sass'
);


let sassIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default sassIconContentBlock;