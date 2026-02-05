function createSpaceship(spaceshipName: string, pilot: string, crewLimit: number, crew: string[], inMission: false) {
  const spaceship = {
    spaceshipName,
    pilot,
    crewLimit,
    crew,
    inMission
  }

  return spaceship
}

const spaceshipName = 'Tardis'
const spaceshipPilot = 'Doctor Who'
const crewLimit = 2
const crew = []
const inMission = false




console.log(createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission))