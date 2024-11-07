import { ElementConstructor } from "../../../../../../../js-modules/utilities/constructors/element-constructor/element-constructor.js";
import iconContentBlockAssembler from "../iconContentBlockAssembler.js";

let tagLi = new ElementConstructor.defaultTag(
    'li',
    'git-competence-icon',
    'competence-style'
);

let tagImg = new ElementConstructor.imgTag(
    'img',
    'git-competence-icon-image',
    'competence-img-style',
    'pages/index-page/main/competencies/competence-icons/icons/git-icon-content-block/git.svg',
    'gulp'
);

let gitIconContentBlock = iconContentBlockAssembler(tagLi, tagImg);

export default gitIconContentBlock;