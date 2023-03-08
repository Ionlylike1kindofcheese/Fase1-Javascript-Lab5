const listOrder = ['voornaam', 'achternaam', 'nationaliteit', 'leeftijd', 'gewicht'];

fetch('./json-files/opdracht2_bijlage.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(object => {
      const dataOrder = [object.voornaam, object.achternaam, object.nationaliteit, object.leeftijd, object.gewicht];
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
    });
  });