//Exemplo de tipagem no ts, index.ts
const spacechip = {
  name: 'spacecraft', //ts identifica string
  speed: 0            //number
}

function accelerate(spacechip: {name: string, speed: number}, speed: number) {
  spacechip.speed = speed

  return console.log(spacechip)
}

accelerate(spacechip, 10)