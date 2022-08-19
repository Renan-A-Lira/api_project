
# Social App 🌐


## ⚙ Funcionalidades

- SignIn e SignUp
- token Authorization
- hash password
- integração com bd


## 📔 Documentação da API

### User Routes

- #### Retorna todos os usuarios

```http
  GET /user/
```

| Headers  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authorization` | `string` | **Obrigatório** estar autenticado |

- #### Retorna um token de acesso para seu usuario

```http
  POST /user/signin
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O Email do usuario |
| `password`  | `string` | **Obrigatório**. A senha do usuario

- #### Cria um novo User e retorna um token de acesso

```http
  POST /user/signup
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string`   | **Obrigatório**. Nome do usuario |
| `email`      | `string` | **Obrigatório**. O Email do usuario |
| `password`  | `string` | **Obrigatório**. A senha do usuario


### Posts Routes

- #### Retorna todos os Posts de um usuario autenticado

```http
  GET /post/
```

| Headers  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authorization` | `string` | **Obrigatório** estar autenticado |

- #### Cria um novo post

```http
  POST /post/create
```

| Body  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `text` | `string` | **Obrigatório**. conteudo do post |

| Headers  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `authorization` | `string` | **Obrigatório** estar autenticado |

## 🚀 Rodando localmente


Clone o projeto

```bash
  git clone https://github.com/Renan-A-Lira/api_project
```

Entre no diretório do projeto

```bash
  cd api_project
```

Instale as dependências

```bash
  npm install
```

Configure o Banco de Dados em

```bash
src/db/index.ts
```

Inicie o servidor

```bash
  npm run dev
```


## 💾 Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`SECRET`


## 🧔 Autores

- [@Renan Lira](https://www.github.com/Renan-A-Lira)

