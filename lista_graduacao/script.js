const container = document.getElementById("container")
const btnLoadData = document.getElementById("btn-load") 


// btnLoadData.addEventListener("click", (event) => {

//     event.preventDefault()
//     console.log(btnLoadData.value) 
     
     
//     async function resquestData() {
//         try {
//             const response = await fetch('DB.json'); 
//             if (!response.ok) {
//                 throw new Error(`Erro de HTTP: ${response.status}`);
//             }
//             const data = await response.json(); 
//             loadElements(data);

//         } catch (error) {
//             console.error("Erro ao carregar dados com fetch:", error);
//             container.innerHTML = '<h2>Erro ao carregar dados! Verifique a consola.</h2>';
//             // Se houver erro, garantimos que o botão volta a 'Carregar Dados'
            
//         }
//     }
//     resquestData();
//     function loadElements(data) {
//         const list = document.createElement('ul');
        
//         data.forEach(element => {
//             const listItems = document.createElement("li");
//             listItems.style.listStyleType = 'none';
//             listItems.innerHTML = `<h3>Aluno(a): ${element.nome} - Curso: ${element.curso}</h3>`;
            
//             const ulMaterias = document.createElement('ul'); 
//             ulMaterias.style.listStyleType = 'none';
//             element.disciplinasPendentes.forEach((role, index) => {
//                 const dinamicIndex = index + 1;
//                 const liMateria = document.createElement("li"); 
//                 liMateria.innerText = `Materia_${dinamicIndex}: ${role}`;
//                 ulMaterias.appendChild(liMateria);
//             });
            
//             listItems.appendChild(ulMaterias);
//             list.appendChild(listItems);
//         });
        
//         /// Usamos innerText
        
//         container.appendChild(list);
//     }
  
//     btnLoadData.value = "Limpar"
//     if (btnLoadData.value === "Limpar") {
//         list.innerText = ''
//         }
// }); 




// Função de Limpeza (não precisa de ser chamada pelo evento, apenas limpa)
function cleanScreen() {
    container.innerHTML = '';
}


btnLoadData.addEventListener("click", (event) => {
    event.preventDefault();

    // 1. LÓGICA DE ALTERNÂNCIA NO INÍCIO:
    const estadoAtual = btnLoadData.value;

    if (estadoAtual === 'Limpar') {
        // Se o estado é 'Limpar', limpamos e paramos a execução.
        cleanScreen(); // Usa a função de limpeza
        btnLoadData.value = "Carregar";
        return; // 🛑 ESSENCIAL: Impede o carregamento.
    } 
    
    // Se chegamos aqui, o estado é 'Carregar'.
    
    // 2. Limpamos o ecrã para um carregamento limpo (opcional, mas recomendado)
    cleanScreen(); 
    
    // 3. Chamamos a função de carregamento
    resquestData(); 
    
    // ------------------------------------------
    // AS FUNÇÕES PERMANECEM ASSIM:
    // ------------------------------------------
    
    async function resquestData() {
        try {
            const response = await fetch('DB.json'); 
            if (!response.ok) {
                throw new Error(`Erro de HTTP: ${response.status}`);
            }
            const data = await response.json(); 
            loadElements(data); // Chama loadElements após sucesso

        } catch (error) {
            console.error("Erro ao carregar dados com fetch:", error);
            container.innerHTML = '<h2>Erro ao carregar dados! Verifique a consola.</h2>';
            // Em caso de erro, garantimos que o botão permanece em "Carregar"
            btnLoadData.value = "Carregar"; 
        }
    }
  
    function loadElements(data){
        
        const listaGeral = document.createElement("ul");
        listaGeral.style.listStyleType = "none"
        data.forEach(element => {
          
          const line = document.createElement("span");
          const item = document.createElement("li");
          
          // Nota: Removemos o listContainer do loop, e usamos apenas listaGeral
          //listContainer.style.listStyleType = 'none'; // Se quiseres este estilo, aplica em listaGeral
          
          console.log(element.nome);

          line.innerHTML = `${element.nome}`;
          item.appendChild(line);
          listaGeral.appendChild(item); // Anexa o item à lista geral
        });
        
        container.appendChild(listaGeral);
        
        // 4. MUDANÇA DE ESTADO: Mudar o botão APÓS o carregamento (só acontece se for bem-sucedido)
        btnLoadData.value = "Limpar"; 
    }
});