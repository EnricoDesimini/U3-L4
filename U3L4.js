// Funzione per generare il tabellone della tombola
function generaTabelloneTombola() {
    // Seleziona il contenitore del tabellone
    const tabellone = document.getElementById('tabellone');
    console.log("Contenitore del tabellone:", tabellone);

    // Crea una tabella
    const table = document.createElement('table');
    table.border = "1";
    console.log("Tabella creata:", table);

    // Contatore per numerare le celle
    let counter = 1;

    // Loop per creare le righe e le colonne del tabellone
    for (let i = 0; i < 8; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();
            cell.textContent = counter;
            counter++;
            console.log("Cella creata:", cell);

            // Se il counter raggiunge 76, interrompi il loop
            if (counter > 76) break;
        }
    }

    // Aggiungi la tabella al contenitore del tabellone
    tabellone.appendChild(table);
}

// Chiama la funzione per generare il tabellone della tombola
generaTabelloneTombola();

function generaNumeroCasuale() {
    return Math.floor(Math.random() * 76) + 1;
}

// Funzione per selezionare la cella corrispondente al numero sorteggiato
function selezionaCella(numero) {
    const tabellone = document.getElementById('tabellone');
    const cells = tabellone.getElementsByTagName('td');

    for (let cell of cells) {
        if (parseInt(cell.textContent) === numero) {
            cell.style.backgroundColor = 'yellow';
            console.log("Cella selezionata:", cell);
            break;
        }
    }
}

// Funzione per resettare la selezione del tabellone
function resettaSelezione() {
    const tabellone = document.getElementById('tabellone');
    const cells = tabellone.getElementsByTagName('td');

    for (let cell of cells) {
        cell.style.backgroundColor = '';
    }
    console.log("Selezione del tabellone resettata.");
}

// Funzione per gestire il click sul bottone
function handleClick() {
    resettaSelezione();
    const numeroSorteggiato = generaNumeroCasuale();
    console.log("Numero sorteggiato:", numeroSorteggiato);
    selezionaCella(numeroSorteggiato);
}

// Aggiungi un listener per il click sul bottone
const bottone = document.getElementById('sorteggioButton');
bottone.addEventListener('click', handleClick);
