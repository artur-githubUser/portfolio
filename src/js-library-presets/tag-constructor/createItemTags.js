
class DefaultTag {

    constructor (tagName, id, className) {
        this.tag = document.createElement(tagName);
        this.tag.id = id;
        this.tag.className = className;
    }
}


class imgTagAttributes extends DefaultTag {

    constructor (tagName, id, className, src, alt) {

        super (tagName, id, className);

        this.tag.src = src;
        this.tag.alt = alt;
    }
}

const tagAndAttributeConstructor = new Set();
tagAndAttributeConstructor.set(DefaultTag);
tagAndAttributeConstructor.set(imgTagAttributes);


export {tagAndAttributeConstructor}

let tagLi = new DefaultTag ('li', 'gulp-competence-icon', 'competence-style');

let tagImg = new imgTagAttributes (
    'img',
    'javascript-competence-icon',
    'competence-img-style',
    'pages/index_page/main/competencies/competence-icon/icon-images/javascript.svg',
    'javascript');



tagLi.tag.append(tagImg.tag);


document.getElementById("competencies-list").append(tagLi.tag);

console.log(tagLi.tag);