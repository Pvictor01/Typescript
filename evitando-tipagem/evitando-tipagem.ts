function sendCar(car: {driver: string, speed?: number}) { // sinal de ? diz que o parametro é opcional

}

sendCar({driver: 'Vitor', speed: 100})
sendCar({driver: 'Vitor'}) //com o ? a funçao aceita apenas 1 parametro
