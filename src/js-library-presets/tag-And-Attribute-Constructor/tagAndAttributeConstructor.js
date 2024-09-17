
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



const tagAndAttributeConstructor = {
    defaultTag : DefaultTag,
    imgTag : imgTagAttributes,
}


export {tagAndAttributeConstructor};