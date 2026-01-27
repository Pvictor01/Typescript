function sendSpaceship(name: string, captain: string) {
  const spaceshipt = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`A nave ${spaceshipt.name} comandada pelo capitão ${spaceshipt.captain} foi enviada em uma missao`)

  return spaceshipt
}

function accelerate(targetSpeed: number, spaceship: {name: string, speed: number}) {
  if(spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da nave ${spaceship.name} para ${targetSpeed}!`)
  } else if(spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed}`)
  } else {
    alert(`Mantendo a velocidade da nave ${spaceship.name}!`)
  }
}

const spaceshipName = prompt('Qual o nome da nave?')
const spaceshipCaptain = prompt('Qual o nome do capitão?')

const currentSpaceshipt = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt('Qual a velocidade da nave?'))

accelerate(speed, currentSpaceshipt)