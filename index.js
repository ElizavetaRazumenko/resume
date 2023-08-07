const body = document.querySelector('body');

function createElement(elem, classN, parent, content = '') {
    const div = document.createElement(elem);
    div.className = classN;
    if (content !== '') {
        div.textContent = content;
    }
    parent.append(div);
    return div;
}

const body_interior = createElement('div', 'body-interior', body);

const myData = createElement('div', 'my-data', body_interior);
const myInfoContainer = createElement('div', 'my-info', myData);
const myPhoto = createElement('div', 'my-photo', myInfoContainer);
const myContacts = createElement('div', 'my-contacts', myInfoContainer);

const contactHeader = createElement('p', 'p-contacts', myContacts, 'Contacts:');
const arrayOfLinks = [
    'tel:+375297851055', 
    'mailto:razumenko99@mail.ru', 
    'https://yandex.by/maps/157/minsk/stops/station__9891255/?ll=27.518536%2C53.887030&tab=overview&z=13', 
    'https://www.linkedin.com/in/elizaveta-razumenko-508187282',
    'https://t.me/e_rzmnk',
    'https://github.com/ElizavetaRazumenko'
];
const arrayInfo = ['+375(29)-785-10-55', 'razumenko99@mail.ru', 'Belarus, Minsk (st. Petrovschina)', 'Elizaveta Razumenko', '@e_rzmnk', 'GitHub'];
for (let i = 0; i < 6; i += 1) {
    const a = createElement('a', `a-row a-row-${i}`, myContacts, arrayInfo[i]);
    createElement('div', `image-row image-row-${i + 1}`, a);
    a.href = arrayOfLinks[i];
    
}

const myName = createElement('div', 'my-name', myData, 'elizaveta razumenko');
const myProf = createElement('div', 'my-prof', myData, 'junior frontend developer');

const main = createElement('main', 'main', body_interior);
const skillsEducWrapper = createElement('div', 'skills-ed-wrapper', main);
const skills = createElement('div', 'skills', skillsEducWrapper, 'skills:');
const skills_list = createElement('ul', 'skills-ol', skills);
const shills_Array = ['HTML/HTML5', 'CSS/CSS3', 'SASS', 'Javascript', 'Typescript', 'Git', 'Webpack', 'React', 'Figma', 'Adobe Photoshop', 'Abobe Premiere Pro', 'BEM', 'FSD', 'AJAX', 'fetch'];
shills_Array.forEach((item) => { createElement('li', 'skill', skills_list, `${item}`)});
const educationWrapper = createElement('div', 'education-wrapper', skillsEducWrapper);
const education = createElement('div', 'education', educationWrapper, 'education:');
const education_un = createElement('div', 'education-info-un', education, 'Belarusian National Technical University');
const education_spec = createElement('div', 'education-info-spec', education, 'Speciality: Civil engineer');
const courses = createElement('div', 'education courses', educationWrapper, 'courses:');
const courseSchoolJS = createElement('div', 'courses-school', courses, 'RSSchool: JS / Front-end');
const courseSchoolReact = createElement('div', 'courses-school', courses, 'RSSchool: React');
const experience = createElement('div', 'education experience', educationWrapper, 'Experience:');
const workExperience1 = createElement('div', 'courses-school work', experience, 'Design of engineering systems (2020-2022)');
const workExperience2 = createElement('div', 'courses-school work work2', experience, 'Preparation of documentation for tenders (2021)');
const workExperience3 = createElement('div', 'courses-school work work3', experience, 'Сalculation of estimates (2022)');
const workExperience4 = createElement('div', 'courses-school work work4', experience, `Javascript WEB Applications design`);
const workExperience5 = createElement('div', 'courses-school work work5', experience, 'and development (2022- now)');

const english = createElement('div', 'education english', educationWrapper, 'English level:');
const englishLevel = createElement('div', 'courses-school english', educationWrapper, 'B2 - C1');



