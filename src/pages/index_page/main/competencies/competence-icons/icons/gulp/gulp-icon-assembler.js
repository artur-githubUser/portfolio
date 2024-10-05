import { tagAndAttributeConstructor } from "../../../../../../../js-utilities/tag-And-Attribute-Constructor/tagAndAttributeConstructor.js";

let tagLi = new tagAndAttributeConstructor.defaultTag(
    'li',
    'gulp-competence-icon',
    'competence-style'
);

let tagImg = new tagAndAttributeConstructor.imgTag(
    'img',
    'gulp-competence-icon-image',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icons/icons/gulp/gulp.svg',
    'gulp'
);

tagLi.tag.append(tagImg.tag);

let gulpIcon = tagLi.tag;


export default gulpIcon;


