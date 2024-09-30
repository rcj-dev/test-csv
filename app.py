# Importações necessárias para aplicação web
from flask import Flask, request, render_template
import pandas as pd
import sqlite3
import os

app = Flask(__name__, template_folder='.')
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Inicializa o banco de dados
# Caso a tabela não exista, ela será criada automaticamente
def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS dados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            DRE TEXT,
            CODESC TEXT,
            TIPOESC TEXT,
            NOMES TEXT,
            NOMESCOFI TEXT,
            CEU TEXT,
            DIRETORIA TEXT,
            SUBPREF TEXT,
            ENDERECO TEXT,
            NUMERO TEXT,
            BAIRRO TEXT,
            CEP TEXT,
            TEL1 TEXT,
            TEL2 TEXT,
            FAX TEXT,
            SITUACAO TEXT,
            CODDIST TEXT,
            DISTRITO TEXT,
            SETOR TEXT,
            CODINEP TEXT,
            CD_CIE TEXT,
            EH TEXT,
            FX_ETARIA TEXT,
            DT_CRIACAO TEXT,
            ATO_CRIACAO TEXT,
            DOM_CRIACAO TEXT,
            DT_INI_CONV TEXT,
            DT_AUTORIZA TEXT,
            DT_EXTINCAO TEXT,
            NOME_ANT TEXT,
            REDE TEXT,
            LATITUDE REAL,
            LONGITUDE REAL,
            DATABASE TEXT
        )
    ''')
    conn.commit() # Salvando alterações feitas no banco
    conn.close() # Fechando conexão com o banco

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST']) # Rota com FETCH
def upload_file(): # Processando arquivo enviado ao servidor

    # Teste se arquivo não foi enviado
    if 'file' not in request.files:
        return "Nenhum arquivo foi enviado.", 400
    file = request.files['file']
    
    # Teste se arquivo contém nome vazio
    if file.filename == '':
        return "Nenhum arquivo selecionado.", 400

    # Salva o arquivo CSV
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)
    
    # Inserção de arquivo CSV no banco de dados
    try:
        df = pd.read_csv(filepath, encoding='ISO-8859-1', delimiter=";")

        # Conecta ao banco de dados
        conn = sqlite3.connect('database.db')

        # Insere os dados no banco de dados
        df.to_sql('dados', conn, if_exists='append', index=False)
        conn.close()
        return "Arquivo CSV importado com sucesso!"
    
    except Exception as e:
        return f"Erro ao importar o arquivo: {e}", 500

if __name__ == '__main__':
    init_db()  # Inicializa o banco de dados e a tabela
    app.run(debug=True)