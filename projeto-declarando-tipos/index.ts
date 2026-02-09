const spaceships = []

function menu() {
  const menu = prompt(`
    Menu Pricipal - Envio de naves
    \n1- Cadastrar nova nave
    \n2- Listar naves cadastradas
    \n3- Enviar nave para missão
    \n0- Sair
  `)

  return menu
}

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

let userOption = ''

do {
  userOption = menu()

  switch (userOption) {
    case '1':
      const spaceshipName = prompt('Qual o nome da nave?')
      const spaceshipPilot = prompt('Qual o nome do piloto?')
      const crewLimit = Number(prompt('Quantos tripulantes a nave suporta?'))
      const crew = []
      const inMission = false
      const sendSpaceship = createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission)

      spaceships.push(sendSpaceship)

      alert(`A nave ${sendSpaceship.spaceshipName} foi cadastrada com sucesso!`)
      break
    case '2':
      break
    case '3':
      break
    case '0':
    break;
    default:
  }
} while (userOption !== '0')



console.log(spaceships)