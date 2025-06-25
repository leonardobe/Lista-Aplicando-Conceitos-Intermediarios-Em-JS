# 🧠 Lista: Aplicando Conceitos Intermediários em JavaScript

Este repositório contém a resolução de uma lista de exercícios que exploram conceitos intermediários em **JavaScript**. Os tópicos incluem estruturas de controle, recursão, debounce, memoization e manipulação de arrays e objetos.

---

## 🚀 Como executar os exercícios

Alguns scripts requerem dependências adicionais para funcionar corretamente no **Node.js**.

### 📦 Como rodar a aplicação?

Primeiramente, é necessário ter o [Git](https://git-scm.com/downloads) e o [Node.js](https://nodejs.org/en/download/) instalados em sua máquina. Com isso, abra o seu Git Bash (Windows) ou Terminal (Linux/macOS) e digite o comando:

```bash
git clone https://github.com/leonardobe/Lista-Aplicando-Conceitos-Intermediarios-Em-JS.git
```

Ao terminar o download do repositório, utilize o comando `cd Lista-Aplicando-Conceitos-Intermediarios-Em-JS` para acessar a pasta do projeto


### 🧩 Instale as dependências

Este projeto utiliza o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para entrada de dados no terminal.

```bash
npm install prompt-sync
```
> [!IMPORTANT]
> O módulo `perf_hooks` é usado no exercício de Memoization para medir tempo de execução, mas **não precisa ser instalado**, pois faz parte da API nativa do Node.js.

### ▶️ Execute um exercício

```bash
node nome-do-arquivo.js
```

Substitua `nome-do-arquivo.js` pelo nome do script desejado.

---

## 📚 Exercícios

| 📁 Arquivo                 | 🧾 Descrição                                                                                 |
|----------------------------|-----------------------------------------------------------------------------------------------|
| `01-validacao-data.js`     | ✅ Valida datas reais com `ehDataValida(dia, mes, ano)` considerando anos bissextos.          |
| `02-jogo-adivinhacao.js`   | 🎲 Jogo de adivinhação entre 1 e 100 com dicas e tentativas usando `prompt-sync`.             |
| `03-palavras-unicas.js`    | 📝 Extrai palavras únicas de uma string e retorna em um array.                                |
| `04-fatorial-recursivo.js` | 🔁 Cálculo recursivo do fatorial com tratamento de erro para valores inválidos.               |
| `05-debounce.js`           | ⏱️ Implementa `debounce(fn, delay)` para evitar múltiplas execuções consecutivas.             |
| `06-memoization.js`        | ⚡ Função `memoize(fn)` com cache de resultados e uso de `perf_hooks` para medir desempenho.  |
| `07-map-sort-produtos.js`  | 🛒 Mapeia e ordena nomes de produtos por preço com `map` e `sort`.                            |
| `08-reduce-clientes.js`    | 💰 Agrupa vendas por cliente somando os totais com `reduce`.                                  |
| `09-conversao-formatos.js` | 🔄 Converte entre array de pares e objetos com `paresParaObjeto` e `objetoParaPares`.         |

---

## ✍️ Autor

Feito com 💻 por [Leonardo Curtis](https://github.com/leonardobe) para fins de estudo e prática de lógica de programação com Node.js e Javascript.

