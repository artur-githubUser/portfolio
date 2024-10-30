
// (i) под каждый контент-блок пишется свой ассемблер
//  добавить класс DefaultTagWithTextNode, расширяющий DefaultTag
// в библиотеку


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



const ElementConstructor = {
    defaultTag : DefaultTag,
    imgTag : imgTagAttributes,
}


export {ElementConstructor};