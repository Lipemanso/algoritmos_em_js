// algoritmo de busca binária

function busca_binaria(lista, item) {

    let baixo = 0
    let alto = lista.length - 1
    
    while (baixo <= alto) {
        
        let meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]
    
        if(chute === item) {
            return `O elemento procurado ${chute} está na posição ${meio}`
        }
        else if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
        
    }
    return null
}


const array_numeros = [2, 3, 4, 5, 6, 7, 8, 9]
console.log(busca_binaria(array_numeros,8))