import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";


let tagLi = new ElementConstructor.defaultTag(
    'li',
    'php-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'php-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/php-icon-content-block/php.svg',
    'php'
);


let phpIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);


export default phpIconContentBlock;