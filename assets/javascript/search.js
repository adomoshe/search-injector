'use strict';

// const adoEvalValidateTag = document.getElementsByTagName('h2');
// if (adoEvalValidateTag[0].innerHTML === 'OT Evaluation') {

// Values must be unique to any site this injector will be used on to avoid naming conflicts with already present values
const adoSearch = document.getElementsByName('jump1')[0];
const adoSearchArr = [];
console.log(adoSearch.options);
for (let i = 0; i < adoSearch.options.length; i++) {
  adoSearchArr.push(adoSearch.options[i].innerHTML);
}
console.log(adoSearchArr);

const adoCloseModal = () => {
  document.body.removeChild(document.getElementById('ado-modal'));
};

const adoModal = document.createElement('div');
adoModal.id = 'ado-modal';
adoModal.style.position = 'fixed';
adoModal.style.zIndex = '1';
adoModal.style.width = '50%';
adoModal.style.height = '60%';
adoModal.style.top = '15%';
adoModal.style.overflow = 'auto';
adoModal.style.backgroundColor = 'rgba(28, 168, 186, 0.7)';
adoModal.style.marginLeft = '25%';
adoModal.style.marginRight = '25%';
adoModal.style.borderRadius = '10px';
adoModal.style.textAlign = 'center';
adoModal.style.padding = '10px';
adoModal.style.border = '2px solid #fff';

const adoForm = document.createElement('form');

const adoClose = document.createElement('button');
adoClose.style.cssFloat = 'right';
adoClose.style.borderRadius = '10px';
adoClose.style.color = 'rgb(0, 0, 0)';
adoClose.style.fontWeight = '450';
adoClose.onclick = adoCloseModal;
adoClose.innerHTML = 'Close';

const adoSpanResultsTitle = document.createElement('span');
adoSpanResultsTitle.innerHTML = '<br>Results:';
adoSpanResultsTitle.style.color = '#fff';
adoSpanResultsTitle.style.fontSize = '25px';
adoSpanResultsTitle.style.fontWeight = '600';

const adoSpanResults = document.createElement('span');
adoSpanResults.id = 'ado-span-results';

const adoSpanTitle = document.createElement('span');
adoSpanTitle.innerHTML = 'Search';
adoSpanTitle.style.color = '#fff';
adoSpanTitle.style.fontSize = '25px';
adoSpanTitle.style.fontWeight = '600';
adoSpanTitle.style.marginLeft = '6%';

const adoInput = document.createElement('input');
adoInput.id = 'ado-search';
adoInput.type = 'text';
adoInput.placeholder = 'Search Here';
adoInput.style.borderRadius = '10px';
adoInput.style.border = 'thin solid rgb(28, 168, 186)';
adoInput.style.padding = '5px';
adoInput.style.color = 'rgb(0, 0, 0)';
adoInput.style.backgroundColor = '#fff';

const adoHR = document.createElement('hr');
adoHR.style.border = '1px solid #fff';

adoForm.appendChild(adoInput);

adoModal.appendChild(adoSpanTitle);
adoModal.appendChild(adoClose);
adoModal.appendChild(adoForm);
adoModal.appendChild(adoSpanResultsTitle);
adoModal.appendChild(adoHR);
adoModal.appendChild(adoSpanResults);

document.body.appendChild(adoModal);

const adoInputID = document.getElementById('ado-search');
adoInputID.select();

const adoSearchRes = [];

function adoChosen() {
  document.body.removeChild(document.getElementById('ado-modal'));
  let selectIn;
  for (let i = 0; i < adoSearch.length; i++) {
    if (
      adoSearch.options[i].innerHTML.trim().indexOf(this.innerHTML.trim()) !==
      -1
    ) {
      selectIn = i;
      break;
    }
  }
  adoSearch.selectedIndex = selectIn + 1;
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
    adoNewButton.style.color = 'rgb(0, 0, 0)';
    adoNewButton.style.margin = '5px';
    adoNewButton.style.borderRadius = '10px';
    adoNewButton.style.border = 'thin solid rgb(28, 168, 186)';
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
// } else {
//   console.log('Not Eval Page');
// }
