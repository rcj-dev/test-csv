const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("escolher");
const fileNameDisplay = document.getElementById("file-name");

//PARTE 1: SELEÇÃO DE ARQUIVO CSV

// Função responsável por abrir a pasta de arquivos 
dropzone.addEventListener("click", () => {
  fileInput.click();
});

// Função acionada ao selecionar arquivo no input
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0]; // Variável irá pegar o primeiro arquivo selecionado

  // Teste verificando se um arquivo foi selecionado
  if (file) {
    //Se sim, o fileNameDisplay será alterado para o nome do arquivo
    fileNameDisplay.textContent = file.name;
  }
});

// Função utilizada ao arrastar arquivo para cima dele.
dropzone.addEventListener("dragover", (event) => {
  // Impedindo ação padrão do google (abrir) ao arrastar arquivo
  event.preventDefault();
  // Adicionado a classe "dragover" indicando que o dropzone está pronto para receber um csv.
  dropzone.classList.add("dragover");
});

// Detecta quando o arquivo é arrastado para fora
dropzone.addEventListener("dragleave", () => {
  // Remove a classe "dragover"
  dropzone.classList.remove("dragover");
});

// Detecta quando um arquivo é solto nele
dropzone.addEventListener("drop", (event) => {
  // Previne o comportamento padrão do navegador
  event.preventDefault();
  
  // Remove a classe "dragover" após o arquivo ser solto
  dropzone.classList.remove("dragover");

  // Armazena o arquivo arrastados na variável files
  const files = event.dataTransfer.files;

  // Atribui os arquivos ao input de arquivo
  if (files.length > 0) {
    fileInput.files = files;

    // FileNameDisplay será alterado para o nome do arquivo
    fileNameDisplay.textContent = files[0].name;
  }
});
//---------------- FIM DA PARTE 1 ----------------

// PARTE 2: ENVIO DO ARQUIVO AO SERVIDOR --------------------

// Função que será executada ao usuário apertar o botão de envio
document.getElementById("submit-button").addEventListener("click", () => {
  const file = fileInput.files[0];

  // Verifica se um arquivo foi selecionado
  if (file) {
    // Extrai a extensão do arquivo e a converte para minúsculas
    const fileExtension = file.name.split(".").pop().toLowerCase();

    // Teste para saber se o arquivo não é CSV
    if (fileExtension !== "csv") {
      alert("Por favor, selecione um arquivo CSV.");
      return;
    }
    // Cria um novo objeto FormData para armazenar os dados do formulário
    const formData = new FormData();   
    // Arquivo anexado ao formData
    formData.append("file", file);

    // Requisição fetch para enviar o arquivo ao servidor
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text()) // Resposta processada como texto
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar o arquivo.");
      });
  } else {
    alert("Por favor, selecione um arquivo CSV antes de enviar.");
  }
});
