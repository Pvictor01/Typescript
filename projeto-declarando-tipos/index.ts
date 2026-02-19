const spaceships = []

function menu() {
  const menu = prompt(`
    Menu Pricipal - Envio de naves
    \n1- Cadastrar nova nave
    \n2- Adicionar membro da tripulação
    \n3- Enviar nave para missão
    \n4- Listar naves cadastradas
    \n0- Sair
  `)

  return menu
}

function createSpaceship(spaceshipName: string, pilot: string, crewLimit: number, crew: string[], inMission: false, id: number) {
  const spaceship = {
    spaceshipName,
    pilot,
    crewLimit,
    crew,
    inMission, 
    id
  }

  return spaceship
}

function addCrewMember(member: string, spaceship: {crewLimit: number, crew: string[], spaceshipName: string}) {
  if(spaceship.crew.length >= spaceship.crewLimit) {
    alert('Limite de tripulantes atingido')
  } else if(member === '' || member === null) {
    alert('Nome do tripulante não informado')
  } else {
    spaceship.crew.push(member)
    alert(`O tripulante ${member} foi adicionado a nave ${spaceship.spaceshipName}`)
  }
  return spaceship
}

function sendShip(spaceship: {crewLimit: number, crew: string[], spaceshipName: string, inMission: boolean, id: number}) {
  if(spaceships.length === 0) {
    alert('Nenhuma nave cadastrada')
    return
  }

  const idShip = Number(prompt('Qual o id da nave?'))

  if(spaceship.id === idShip && spaceship.inMission === false  && spaceship.crew.length  >= Math.floor(spaceship.crewLimit / 3)) {
    const sendShip = prompt('Deseja enviar a nave para missão? S/N')

    if(sendShip.toUpperCase() === 'S') {
      spaceship.inMission = true
      alert(`A nave ${spaceship.spaceshipName} foi enviada para missão`)
    } else if(sendShip.toUpperCase() === 'N') {
      alert('A nave não foi enviada para missão')
    } else {
      alert('Opção inválida')
    }
  } else if(spaceship.id === idShip && spaceship.inMission === true) {
    alert('Nave já está em missão')
  } else if(spaceship.id === idShip && spaceship.inMission === false  && spaceship.crew.length  < Math.floor(spaceship.crewLimit / 3)) {
    alert('Tripulação insuficiente')
  } else {
    alert('Nave não encontrada')
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
      const id = spaceships.length + 1      
      const sendSpaceship = createSpaceship(spaceshipName, spaceshipPilot, crewLimit, crew, inMission, id)

      spaceships.push(sendSpaceship)

      alert(`A nave ${sendSpaceship.spaceshipName} foi cadastrada com sucesso!`)
      break
    case '2':
      if(spaceships.length === 0) {
        alert('Nenhuma nave cadastrada')
        break
      }
      
      spaceships.forEach(spaceship => {
        alert(`
          Nave: ${spaceship.spaceshipName}
          Piloto: ${spaceship.pilot}
          Limite de Tripulantes: ${spaceship.crewLimit}
          Tripulantes: ${spaceship.crew}
          Na missão? ${spaceship.inMission ? 'Sim' : 'Não'}
          id: ${spaceship.id}
        `)
        let confirmation = confirm('Deseja adicionar membros a esta nave?')

        if(confirmation) {
          addCrewMember(prompt('Qual o nome do tripulante?'), spaceship)
        } else {
          alert('Membro não adicionado')
        }
      })
      break
    case '3':
      sendShip(spaceships[spaceships.length - 1])
      break
    case '4':
      spaceships.forEach(spaceship => {
        alert(`
          Nave: ${spaceship.spaceshipName}
          Piloto: ${spaceship.pilot}
          Limite de Tripulantes: ${spaceship.crewLimit}
          Tripulantes: ${spaceship.crew}
          Na missão? ${spaceship.inMission ? 'Sim' : 'Não'}
          id: ${spaceship.id}
        `)        
      })
      console.log(spaceships)
      break
    case '0':
    break;
    default:
  }
} while (userOption !== '0')