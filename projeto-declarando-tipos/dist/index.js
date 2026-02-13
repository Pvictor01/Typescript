const spaceships = [];
function menu() {
    const menu = prompt(`
    Menu Pricipal - Envio de naves
    \n1- Cadastrar nova nave
    \n2- Adicionar membro da tripulação
    \n3- Enviar nave para missão
    \n4- Listar naves cadastradas
    \n0- Sair
  `);
    return menu;
}
function createSpaceship(spaceshipName, pilot, crewLimit, crew, inMission, id) {
    const spaceship = {
        spaceshipName,
        pilot,
        crewLimit,
        crew,
        inMission,
        id
    };
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert('Limite de tripulantes atingido');
    }
    else if (member === '' || member === null) {
        alert('Nome do tripulante não informado');
    }
    else {
        spaceship.crew.push(member);
        alert(`O tripulante ${member} foi adicionado a nave ${spaceship.spaceshipName}`);
    }
    return spaceship;
}
function sendSpaceship(spaceship) {
}
let userOption = '';
do {
    userOption = menu();
    switch (userOption) {
        case '1':
            const spaceshipName = prompt('Qual o nome da nave?');
            const spaceshipPilot = prompt('Qual o nome do piloto?');
            const crewLimit = Number(prompt('Quantos tripulantes a nave suporta?'));
            const crew = [];
            const inMission = false;
            const id = spaceships.length + 1;
            const sendSpaceship = createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission, id);
            spaceships.push(sendSpaceship);
            alert(`A nave ${sendSpaceship.spaceshipName} foi cadastrada com sucesso!`);
            break;
        case '2':
            if (spaceships.length === 0) {
                alert('Nenhuma nave cadastrada');
                break;
            }
            spaceships.forEach(spaceship => {
                alert(`
          Nave: ${spaceship.spaceshipName}
          Piloto: ${spaceship.pilot}
          Limite de Tripulantes: ${spaceship.crewLimit}
          Tripulantes: ${spaceship.crew}
          Na missão? ${spaceship.inMission ? 'Sim' : 'Não'}
          id: ${spaceship.id}
        `);
                let confirmation = confirm('Deseja adicionar membros a esta nave?');
                if (confirmation) {
                    addCrewMember(prompt('Qual o nome do tripulante?'), spaceship);
                }
                else {
                    alert('Membro não adicionado');
                }
            });
            break;
        case '3':
            break;
        case '4':
            spaceships.forEach(spaceship => {
                alert(`
          Nave: ${spaceship.spaceshipName}
          Piloto: ${spaceship.pilot}
          Limite de Tripulantes: ${spaceship.crewLimit}
          Tripulantes: ${spaceship.crew}
          Na missão? ${spaceship.inMission ? 'Sim' : 'Não'}
          id: ${spaceship.id}
        `);
            });
            break;
        case '0':
            break;
        default:
    }
} while (userOption !== '0');
console.log(spaceships);
