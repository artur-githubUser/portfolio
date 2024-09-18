//  возможно гдето здесь будет массив с созданными элементами

// let insertObject = document.getElementById("competencies-list");


function importAndInsertElements (insertObject, pathToInsertObject) {
    document.getElementById(insertObject).append(import(pathToInsertObject));
};

importAndInsertElements ("competencies-list", 'competence-icons/icons/javascript/js-icon-assembler.js');


// import('competence-icons/icons/javascript/js-icon-assembler.js')


console.log('hi from importAndInsertElements');