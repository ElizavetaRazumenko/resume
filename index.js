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
const myPhoto = createElement('div', 'my-photo', myData);
const myName = createElement('div', 'my-name', myData, 'elizaveta razumenko');
const myProf = createElement('div', 'my-prof', myData, 'frontend-developer');
const main = createElement('main', 'main', body_interior);
const skillsEducWrapper = createElement('div', 'skills-ed-wrapper', main);
const skills = createElement('div', 'skills', skillsEducWrapper, 'skills:');
const skills_list = createElement('ul', 'skills-ol', skills);
const shills_Array = ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'Git', 'Webpack', 'React'];
shills_Array.forEach((item) => { createElement('li', 'skill', skills_list, `${item}`)});
const educationWrapper = createElement('div', 'education-wrapper', skillsEducWrapper);
const education = createElement('div', 'education', educationWrapper, 'education:');
const education_un = createElement('div', 'education-info-un', education, 'Belarusian National Technical University');
const education_spec = createElement('div', 'education-info-spec', education, 'Speciality: Civil engineer');
const courses = createElement('div', 'education courses', educationWrapper, 'courses:');
const courseSchoolJS = createElement('div', 'courses-school', courses, 'RSSchool: JS / Front-end');
const courseSchoolReact = createElement('div', 'courses-school', courses, 'RSSchool: React');

