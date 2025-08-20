# 🔗 Encurtador de URL

Um encurtador de URL simples feito com **Node.js**, **Express**, **Mongoose** e **NanoID**.  
Permite encurtar links e redirecionar para a URL original.

---

## ⚙️ Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/url-shortener.git
cd url-shortener
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb://127.0.0.1:27017/urlshortener
PORT=3000
BASE_URL=http://localhost:3000
```

> Em produção, substitua `MONGO_URI` pela string de conexão do **MongoDB Atlas**.

### 4. Rode o servidor
```bash
npm start
```

Servidor rodando em:
```
http://localhost:3000
```

---

## 📌 Rotas da API

### 🔹 Criar uma URL encurtada
`POST /shorten`

**Body JSON:**
```json
{
  "url": "https://google.com"
}
```

**Resposta:**
```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### 🔹 Redirecionar para a URL original
`GET /:shortId`

Exemplo:
```
http://localhost:3000/abc123
```
➡️ Redireciona para `https://google.com`

---

## 📊 Melhorias futuras
- [ ] Validação de URLs  
- [ ] Estatísticas de cliques  
- [ ] Interface web para encurtar links  
- [ ] Expiração de links  

---

## 📝 Licença
Esse projeto é open-source sob a licença MIT.
