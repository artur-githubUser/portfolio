
export default function iconContentBlockAssembler (...elements) {
    elements[0].tag
    .appendChild(elements[1].tag);
    return elements[0].tag;
};