//  можно ли сделать фунцию чтобы импортировать CompetenceСategory?
import {
    CompetenceСategory
} from '../class-competence-category.js';

const javaScriptCompetence = new CompetenceСategory (
    CompetenceСategory.optionsOfcompetence.developmentSide.backend,
    CompetenceСategory.optionsOfcompetence.competenceStatus.planned,
);

console.log(javaScriptCompetence);
