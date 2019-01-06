'use strict';

// Values must be unique to any site this injector will be used on to avoid naming conflicts with already present values
const adoSearch = document.getElementById('question1');
const adoSearchArr = [];
console.log(adoSearch.options);
for (let i = 0; i < adoSearch.options.length; i++) {
  adoSearchArr.push(adoSearch.options[i].innerHTML);
}
console.log(adoSearchArr);

const adoModal = document.createElement('div');
adoModal.id = 'ado-modal';
adoModal.style.position = 'fixed';
adoModal.style.zIndex = '1';
adoModal.style.width = '50%';
adoModal.style.height = '60%';
adoModal.style.top = '15%';
adoModal.style.overflow = 'auto';
adoModal.style.backgroundColor = 'rgba(28, 168, 186, 0.9)';
adoModal.style.marginLeft = '25%';
adoModal.style.marginRight = '25%';
adoModal.style.borderRadius = '10px';
adoModal.style.textAlign = 'center';
adoModal.style.padding = '5px';

const adoForm = document.createElement('form');

const adoSpanResultsTitle = document.createElement('span');
adoSpanResultsTitle.innerHTML = '<br>Results:';

const adoSpanResults = document.createElement('span');
adoSpanResults.id = 'ado-span-results';

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
adoModal.appendChild(document.createElement('hr'));
adoModal.appendChild(adoSpanResults);

document.body.appendChild(adoModal);

const adoSearchRes = [];

function adoChosen() {
    document.body.removeChild(document.getElementById('ado-modal'));
    let selectIn;
    for (let i = 0; i < adoSearch.length; i++) {
        if (adoSearch.options[i].innerHTML.trim().indexOf(this.innerHTML.trim()) !== -1) {
          selectIn = i;
          break;
        }
    }
    adoSearch.selectedIndex = selectIn;
}

const adoButton = () => {
  const adoButtonRemoval = document.getElementById('ado-span-results');
  while (adoButtonRemoval.firstChild) {
    adoButtonRemoval.removeChild(adoButtonRemoval.firstChild);
  }
  adoSearchRes.forEach((resVal, i) => {
    let adoNewButton = document.createElement('button');
    adoNewButton.id = `ado-button${i}`;
    adoNewButton.onclick = adoChosen;
    adoNewButton.innerHTML = resVal;
    adoSpanResults.appendChild(adoNewButton);
  });
};

const search = () => {
  adoSearchRes.length = 0;
  let adoSearchIdVal = document
    .getElementById('ado-search')
    .value.trim()
    .toLowerCase();
  console.log('adoSearchIdVal: ', adoSearchIdVal);
  for (let i = 0; i < adoSearchArr.length; i++) {
    if (adoSearchArr[i].toLowerCase().indexOf(adoSearchIdVal) !== -1) {
      adoSearchRes.push(adoSearchArr[i]);
      console.log('added');
    }
  }
  if (adoSearchRes.length === 0) {
    adoSearchRes.push('No Results');
  }
  adoButton();
  adoModal.appendChild(adoSpanResults);
};

const adoSearchId = document.getElementById('ado-search');
adoSearchId.addEventListener('keyup', search);


