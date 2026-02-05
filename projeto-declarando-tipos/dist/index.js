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
var spaceshipName = 'Tardis';
var spaceshipPilot = 'Doctor Who';
var crewLimit = 2;
var crew = [];
var inMission = false;
console.log(createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission));
