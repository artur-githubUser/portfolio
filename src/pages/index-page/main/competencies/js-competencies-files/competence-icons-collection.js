//  здесь сорздаём массив из icons и импортируем его в файл-ассемлер иконок
//  в файле иконки уже вставляем в массив как нам удобно
//  импортируем коллекцию в инсертер, который вставляет коллецию в UL

let competenceIconsCollection = [];
export default competenceIconsCollection;


// import gulpIconContentBlock from "../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js";
// competenceIconsCollection.push(gulpIconContentBlock);


//  function importAndPush (icon) {
//      competenceIconsCollection.push(icon);
//  }
//  importAndPush(import("../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js"));


// примерно в таком виде работает




// =======================================================================================

// так тоже работает (кант стр 604)
// попробовать засунуть в функцию

let {default: gulp} = await import("../competence-icons/icons/gulp-icon-content-block/gulp-icon-content-block-assembler.js");
competenceIconsCollection.push(gulp);







// https://stackoverflow.com/questions/60712238/how-to-change-variable-value-from-another-module-in-javascript
// https://stackoverflow.com/staging-ground/79144690