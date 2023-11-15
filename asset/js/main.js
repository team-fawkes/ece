const overviewSection = document.getElementById('overview');
const researchSection = document.getElementById('research');
const publicationSection = document.getElementById('publication');
const scholarshipSection = document.getElementById('scholarship');
const achivementSection = document.getElementById('achivement');
const librarySection = document.getElementById('library');
const cultureSection = document.getElementById('culture');


const overview = () => {
    overviewSection.classList.add('block');
    overviewSection.classList.remove('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.add('hidden');
    achivementSection.classList.add('hidden');
    librarySection.classList.add('hidden');
    cultureSection.classList.add('hidden');

};

const research = () => {
    overviewSection.classList.add('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.remove('hidden');
    researchSection.classList.add('block');
    achivementSection.classList.add('hidden');
    librarySection.classList.add('hidden');
    cultureSection.classList.add('hidden');

};

const publication = () => {
    overviewSection.classList.add('hidden');
    publicationSection.classList.remove('hidden');
    publicationSection.classList.add('block');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.add('hidden');
    achivementSection.classList.add('hidden');
    librarySection.classList.add('hidden');
    cultureSection.classList.add('hidden');

};

const scholarship = () => {
    overviewSection.classList.add('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.remove('hidden');
    scholarshipSection.classList.add('block');
    researchSection.classList.add('hidden');
};

const achivement = () => {
    achivementSection.classList.remove('hidden');
    achivementSection.classList.add('block');
    overviewSection.classList.add('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.add('hidden');
    librarySection.classList.add('hidden');
    cultureSection.classList.add('hidden');

}

const library = () => {
    achivementSection.classList.add('hidden');
    overviewSection.classList.add('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.add('hidden');
    librarySection.classList.remove('hidden');
    librarySection.classList.add('block');
    cultureSection.classList.add('hidden');

}
const culture = () => {
    achivementSection.classList.add('hidden');
    overviewSection.classList.add('hidden');
    publicationSection.classList.add('hidden');
    scholarshipSection.classList.add('hidden');
    researchSection.classList.add('hidden');
    librarySection.classList.add('hidden');
    cultureSection.classList.remove('hidden');
    cultureSection.classList.add('block');
}