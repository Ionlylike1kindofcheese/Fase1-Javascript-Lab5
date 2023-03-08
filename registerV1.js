const listOrder = ['voornaam', 'achternaam', 'nationaliteit', 'leeftijd', 'gewicht'];

fetch('./json-files/opdracht1_bijlage.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let listUL = document.createElement('ul');
    document.getElementById('data-form').appendChild(listUL);
    const dataOrder = [data.voornaam, data.achternaam, data.nationaliteit, data.leeftijd, data.gewicht];
    for (let index = 0; index <= 4; index++) {
      let ListLI = document.createElement('li');
      ListLI.innerText = `${listOrder[index]} = ${dataOrder[index]}`;
      listUL.appendChild(ListLI);
    }
  });