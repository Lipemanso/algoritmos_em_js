// Arrays Numéricos
const numeros_ordenados = [1, 5, 10, 15, 20, 30];
const numeros_desordenados = [4, 1, 9, 2, 7, 5, 8];
const numeros_negativos = [-2, 5, -1, 3, 0, -4, 6];
const grande_k = [10, 5, 2, 7, 8, 1, 9];
const duplicatas = [1, 1, 2, 2, 3, 4, 4, 5];


// Strings
const string_palindromo = "reviver";
const string_nao_palindromo = "algoritmo";
const string_frase = "a manha de programar";
const string_anagrama1 = "listen";
const string_anagrama2 = "silent";
const string_longa = "abccbaacb";


/* Encontrar a Soma Alvo (Two Sum): No array numeros_ordenados, 
encontre se existe um par de números que some 25.*/


/*Janela de Tamanho Variável (Variable-Size Window)Esta é a variação mais flexível 
e é usada quando o problema exige encontrar o maior ou menor sub-array/substring 
que satisfaça uma determinada condição, 
e o tamanho K do resultado não é pré-definido. */
function findTwoSum(arr, target) {
  let left = 0
  let right = arr.length - 1
  
  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === target) {
      return ` Soma de pares encontrada: [${arr[left]}, ${arr[right]}]`
    } else if (sum < target) {
      left++
    } else {
      right --
    }
  }
  return "Par não encontrado"
}

console.log(findTwoSum(numeros_ordenados,25))


/*Janela Deslizante de Tamanho Variável
Se você precisa encontrar um sub-array contíguo de qualquer tamanho 
cuja soma seja exatamente 25,
o Sliding Window de Tamanho Variável é o método ideal.
*/
function findSubArrayWithSum(arr, target) {
  let start = 0
  let currentSum = 0
  
  // expande a janela, adicionando uma posição ao ponteiro da direita(end)
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end] // 6 - 16 - 31
    console.log(currentSum)
    
    // se o currentSum não for maior que o target o fluxo pula o while.
    while (currentSum > target) {
      currentSum -= arr[start] // 30 - 1 / 30 - 2 / 25
      start++
      console.log(currentSum) //6 - 16 - 31
    }
    
    if (currentSum === target) {
      return `Par encontrado sub-array: [${arr.slice(start, end + 1)}]`
    }
  }
return "sub-array não encontrado!"  
}
//numeros_ordenados = [1, 5, 10, 15, 20, 30];
console.log(findSubArrayWithSum(numeros_ordenados,25))