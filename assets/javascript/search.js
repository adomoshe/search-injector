'use-strict';

// Values must be unique to any site this injector will be used on to avoid naming conflicts with already present values
const adoSearch = document.getElementById('question1');
const adoSearchArr = [];
console.log(adoSearch.options);
for (let i = 0; i < adoSearch.options.length; i++) {
  adoSearchArr.push(adoSearch.options[i].innerHTML);
}
console.log(adoSearchArr);
console.log('end');

const adoModal = document.createElement('div');
adoModal.style.position = 'fixed';
adoModal.style.zIndex = '1';
adoModal.style.width = '50%';
adoModal.style.height = '30%';
adoModal.style.top = '20%';
adoModal.style.overflow = 'auto';
adoModal.style.backgroundColor = 'rgba(28, 168, 186, 0.9)';
adoModal.style.marginLeft = '25%';
adoModal.style.marginRight = '25%';
adoModal.style.borderRadius = '10px';
adoModal.style.textAlign = 'center';
adoModal.style.padding = '5px'

const adoSpan = document.createElement('span');
const adoModalText = document.createTextNode('Search!');

adoSpan.style.textAlign = 'center';
adoSpan.style.marginTop = '5px';

adoSpan.appendChild(adoModalText);
adoModal.appendChild(adoSpan);
document.body.appendChild(adoModal);
