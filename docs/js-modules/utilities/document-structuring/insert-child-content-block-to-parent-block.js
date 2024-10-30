// написать функцию-модуль (утилиту), которая будет определять родительский блок по id или по css-селектору
// эту фунцию-модуль (утилиту) импортировать в вставляемый модуль (контент блок)
// вставлятся должно по выбору: prepend или append (попробовать сначала их) или соответственно appendChild или insertBefore
// запуск фунцции должен выглядеть примерно так: insertChildContentBlockToParentBlock(childContentBlock, prepend, parentBlock)
//  +
// нужна возможность вставлять множество контент блоков в родителя
// нужна возможность в ставлять в родительские блоки, собранные моими ассемблерами


console.log('connnected');

import gulpIconContentBlock from "../../../pages/index-page/main/competencies/competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js";
import javascriptIconContentBlock from "../../../pages/index-page/main/competencies/competence-icons/icons/javascript-icon-content-block/js-icon-content-block-assembler.js";


document.querySelector('.competencies-list-styles').append(javascriptIconContentBlock);