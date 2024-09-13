class competenceСategory {

    constructor () {
        this.
    }


    //  стр. 461
    optionsOfcompetence = {

        developmentSide = {
            frontEnd : 'frontend',
            backend : 'backend',
            base : 'base'
        },

        competenceStatus = {
            done : 'done',                //  тут будет функция устанавливающая
            inProgress : 'inProgress',    //  соответствующий цвет (возможно сеттер?)
            planned : 'planned',
        },

    };
}

const propertiesOfCompetence = new competenceСategory();


export {
    propertiesOfCompetence,
};


// constructor (frontEndTechnology) {

//     this.developmentSide = {
//         frontEnd : 'Frontend',
//         backend : 'Backend',
//         base : 'base'
//     }
//     this.tagli = document.createElement("li");
//     this.tagli.id = `competence-icon-${frontEndTechnology}`;

    // тут метод, который устанавливает id

//     this.tagImg = document.createElement("img");


// }

// let JavaScriptIcon = new competenceIcon ();
// console.log(JavaScriptIcon.tagli);



// соддать <li>
// вставить в id="competencies-list"
// проверить в доме