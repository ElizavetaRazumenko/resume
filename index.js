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
const myProf = createElement('div', 'my-prof', myData, 'frontend developer');
const main = createElement('main', 'main', body_interior);
const skills = createElement('div', 'skills', main, 'skills:');
const skills_list = createElement('ul', 'skills-ol', skills);
const shills_Array = ['html', 'css', 'javascript', 'typescript', 'react'];
shills_Array.forEach((item) => { createElement('li', 'skill', skills_list, `${item}`)});
const education = createElement('div', 'education', main, 'education:');
const education_un = createElement('div', 'education-info-un', education, 'belarusian national technical university');
const education_spec = createElement('div', 'education-info-spec', education, 'speciality: civil engineer');
