function sendSpaceship(name, captain) {
    var spaceshipt = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceshipt.name, " comandada pelo capit\u00E3o ").concat(spaceshipt.captain, " foi enviada em uma missao"));
    return spaceshipt;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed, "!"));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da nave ".concat(spaceship.name, "!"));
    }
}
var spaceshipName = prompt('Qual o nome da nave?');
var spaceshipCaptain = prompt('Qual o nome do capitão?');
var currentSpaceshipt = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Qual a velocidade da nave?'));
accelerate(speed, currentSpaceshipt);
