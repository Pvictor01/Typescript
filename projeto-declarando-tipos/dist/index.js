var spaceships = [];
function menu() {
    var menu = prompt("\n    Menu Pricipal - Envio de naves\n    \n1- Cadastrar nova nave\n    \n2- Listar naves cadastradas\n    \n3- Enviar nave para miss\u00E3o\n    \n0- Sair\n  ");
    return menu;
}
var userOption = '';
do {
    userOption = menu();
    switch (userOption) {
        case '1':
            function createSpaceship(spaceshipName, pilot, crewLimit, crew, inMission) {
                var spaceship = {
                    spaceshipName: spaceshipName,
                    pilot: pilot,
                    crewLimit: crewLimit,
                    crew: crew,
                    inMission: inMission
                };
                return spaceship;
            }
            var spaceshipName = prompt('Qual o nome da nave?');
            var spaceshipPilot = prompt('Qual o nome do piloto?');
            var crewLimit = Number(prompt('Quantos tripulantes a nave suporta?'));
            var crew = [];
            var inMission = false;
            var sendSpaceship = createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission);
            spaceships.push(sendSpaceship);
            alert("A nave ".concat(sendSpaceship.spaceshipName, " foi cadastrada com sucesso!"));
            break;
        case '2':
            break;
        case '3':
            break;
        case '0':
            break;
        default:
    }
} while (userOption !== '0');
console.log(spaceships);
