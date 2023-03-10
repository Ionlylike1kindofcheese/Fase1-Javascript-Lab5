const listOrder = ['voornaam', 'achternaam', 'nationaliteit', 'leeftijd', 'gewicht'];

// setup begin
let numImput = document.createElement('input');
numImput.type = 'number';
numImput.value = 0;
numImput.id = 'number-input';
numImput.addEventListener('change', updateFilterLabel.bind(undefined, numImput.id));
document.getElementById('age-filter').appendChild(numImput);
let inputStatus = document.createElement('label');
inputStatus.htmlFor = 'number-input';
inputStatus.id = 'input-status';
inputStatus.innerText = `Toont momenteel alle data van personen ouder dan ${numImput.value} jaar of ouder`;
document.getElementById('age-filter').appendChild(inputStatus);
buildList(0);
// setup end


function updateFilterLabel(inputID) { 
  document.getElementById('input-status').innerText = `Toont momenteel alle data van personen ouder dan ${numImput.value} jaar of ouder`;
  while (document.getElementById('data-form').firstChild) {
    document.getElementById('data-form').removeChild(document.getElementById('data-form').lastChild);
  }
  buildList(document.getElementById(inputID).value);
}


function buildList(ageFilter) {
  fetch('./json-files/opdracht2_bijlage.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(object => {
      const dataOrder = [object.voornaam, object.achternaam, object.nationaliteit, object.leeftijd, object.gewicht];
      if (object.leeftijd >= ageFilter) {
        let dataDiv = document.createElement('div')
        dataDiv.id = `${dataOrder[0]}-${dataOrder[1]}`;
        document.getElementById('data-form').appendChild(dataDiv);
        let header = document.createElement('h2');
        header.innerText = `${dataOrder[0]} ${dataOrder[1]}`
        dataDiv.appendChild(header);
        let listUL = document.createElement('ul');
        dataDiv.appendChild(listUL);
        for (let index = 0; index <= 4; index++) {
          let ListLI = document.createElement('li');
          ListLI.innerText = `${listOrder[index]} = ${dataOrder[index]}`;
          listUL.appendChild(ListLI);
        }
      }
    });
  });
}