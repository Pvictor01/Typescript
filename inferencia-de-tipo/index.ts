const spacechip = {
  name: 'spacecraft',
  speed: 0
}

function accelerate(spacechip: {name: string, speed: number}, speed: number) {
  spacechip.speed = speed

  return console.log(spacechip);
}

accelerate(spacechip, 10)
