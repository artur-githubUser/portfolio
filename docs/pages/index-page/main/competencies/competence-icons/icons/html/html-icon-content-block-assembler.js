import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";

let tagLi = new ElementConstructor.defaultTag(
    'li',
    'html-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'html-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/html-icon-content-block/html.svg',
    'html'
);

let htmlIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default htmlIconContentBlock;