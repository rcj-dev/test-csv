<p align="center">
  <img src="https://github.com/user-attachments/assets/c41bcc26-c3da-4234-a65a-536839874da2" width="70" align="center"/>
</p>

<h1 align="center">TESTE PROGRAMADOR - Upload CSV</h1>

<h3>Descrição do Projeto</h3>
<p>Esta é uma aplicação WEB desenvolvida em HTML, CSS, JAVASCRIPT, PYTHON e SQLITE. Ela permite o upload de um arquivo CSV pré-definido que e armazena os dados em um banco de dados SQLite.</p>
<h4>Visite o link para download do CSV</h4>
http://dados.prefeitura.sp.gov.br/dataset/cadastro-de-escolas-municipais-conveniadas-e-privadas/resource/a12ad63d-d944-4e35-9aac-71a5ae0b7bdf

<h3>Funcionalidades</h3>

- Upload de arquivos CSV através de arrastar-soltar ou botão.
- Armazenamento dos dados em um banco de dados SQLite.
- Tratamento de erros durante o upload.
- Interface clean e amigável com HTML, CSS e JavaScript.

<h3>Tecnologias Utilizadas</h3>

- **Python / Flask**: Para o backend da aplicação.
- **SQLite**: Para gerenciamento de banco de dados.
- **Pandas**: Para manipulação de dados do CSV.
- **HTML/CSS**: Para a interface do usuário.
- **Javascript**: Para envio do arquivo através de requisição FETCH.

<h3>Pré-Requisitos</h3>

- **Visual Studio Code** (versão atual)
- **Git** (Para clonagem do repositório)
- **Python** (versão atual)
- **Pandas** (para manipulação de dados)
- **Flask** (para criação da aplicação web)
- **SQLite3** (já incluído com o Python)

<h3>Instalação</h3>

1. Realize o download da versão atual do Visual Studio Code - https://code.visualstudio.com/Download
2. Instale o git para clonagem do repositório - https://git-scm.com/downloads

3. Clone ou faça download do repositório:
   ```bash
   git clone https://github.com/rcj-dev/test-csv.git
   
4. Abra o repositório em seu **Visual Studio Code**
5. Baixe e instale o python - https://www.python.org/downloads/
**Obs:** Não se esqueça de instalar a extensão do Python em seu Visual Studio Code

6. Crie um ambiente virtual:
    ```bash
    python -m venv venv

7. Instale as dependências:
    ```bash
    pip install Flask pandas

8. Para visualização do banco dentro do Visual Studio Code, aconselho utilizar a extensão - **SQLite3 Editor por (yy0931)**

9. Rode a aplicação:
    ```bash
    python app.py

10. Acesse a aplicação:
    ```bash
    http://127.0.0.1:5000

<h3>Funcionamento</h3>
<p>Selecione ou arraste o arquivo para a dropzone</p>

https://github.com/user-attachments/assets/919edf0d-8613-4b10-a6bf-c4e9fad803d6

<p>Após isso, o arquivo selecionado será encontrado na pasta uploads na raiz da pasta</p>

https://github.com/user-attachments/assets/7a341b32-0c54-462a-9632-ca8556a377bd

<p>Ao checar o database será possível verificar que o arquivo CSV foi importado para a base com sucesso</p>

https://github.com/user-attachments/assets/06be9292-e6d0-477a-a776-ea83fc1bc40c

<h3>Decisão do Design</h3>
<p>Escolhi esta interface pois acredito ser algo de fácil compreensão facilitando todo tipo de usuário a realizar aquilo que está sendo proposto. Até mesmo a cor azul foi escolhida estratégicamente pois remete a confiança, segurança e tranquilidade, algo que irá agradar visualmente.</p>
