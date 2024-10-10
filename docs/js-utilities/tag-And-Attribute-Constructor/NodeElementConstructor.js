//  дописать функцию, которая вставляет один тег в другой, чтобы
//  при вставке не дописывать в переменной someTag свойство tag из 
//  контруктора (   например: tagLi.tag.append(tagImg.tag) )


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



const NodeElementConstructor = {
    defaultTag : DefaultTag,
    imgTag : imgTagAttributes,
}


export {NodeElementConstructor};