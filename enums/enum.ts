enum Planets {
    mercury = 1, //inicialmente é 0, valores incrementam automaticamente
    venus,
    earth,
    mars
}

Planets.earth

const Cores = {
  Sucesso: "green",
  Erro: "red"
} 

Cores.Sucesso = 'Blue'

Cores.Sucesso // result - (property) Sucesso: string
//dependendo é melhor utilizar objeto com as const