/*function sendCar(car: {driver: string, speed?: number}) { // sinal de ? diz que o parametro é opcional

}

sendCar({driver: 'Vitor', speed: 100})
sendCar({driver: 'Vitor'}) //com o ? a funçao aceita apenas 1 parametro*/

/*let input: any // any desabilita o tsc, codigo fica só com js

input = 10
input = '3'
input = []

let text: string

text = input //da erro pois o ts nao aceita tipo especifico no unknown

console.log(text)*/

function verification(test) {
  if(test) {

  } else {
    let _check: never //mostra que a variavel esta errada, nao deveria existir

    let text = _check

    return _check
  }
}
