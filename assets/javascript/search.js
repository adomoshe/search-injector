'use-strict';

// Values must be unique to any site this injector will be used on to avoid naming conflicts with already present values
const adoSearch = document.getElementById('question1');
const adoSearchArr = [];
console.log(adoSearch.options);
for (let i = 0; i < adoSearch.options.length; i++) {
  adoSearchArr.push(adoSearch.options[i].innerHTML);
}
console.log(adoSearchArr);

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
adoModal.style.padding = '5px';

const adoForm = document.createElement('form');

const adoSpanResultsTitle = document.createElement('span');

const adoSpanResults = document.createElement('span');
adoSpanResults.innerHTML = `Results!<br>${adoSearchArr}`;

const adoSpanTitle = document.createElement('span');
adoSpanTitle.innerHTML = 'Search';
adoSpanTitle.style.textAlign = 'center';

const adoInput = document.createElement('input');
adoInput.id = 'ado-search';
adoInput.type = 'text';
adoInput.placeholder = 'Search Here';
adoInput.style.borderRadius = '10px';

adoForm.appendChild(adoInput);

adoModal.appendChild(adoSpanTitle);
adoModal.appendChild(adoForm);
adoModal.appendChild(adoSpanResultsTitle);
adoModal.appendChild(document.createElement('br'));
adoModal.appendChild(adoSpanResults);

document.body.appendChild(adoModal);

let adoSearchRes = [];
function search(e) {
  let adoSearchIdVal = document.getElementById('ado-search').value;
  console.log('adoSearchIdVal: ', adoSearchIdVal);
  if (!('avscblakofidsd'.indexOf(adoSearchIdVal) === -1)) {
    console.log(adoSearchArr);
    adoSearchRes.push('yup');
  }
  adoSpanResults.innerHTML = adoSearchRes;
  adoModal.appendChild(adoSpanResults);
}

const adoSearchId = document.getElementById('ado-search');
adoSearchId.addEventListener('keyup', search);
