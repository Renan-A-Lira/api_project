
# Social App 🌐


## ⚙ Funcionalidades

- SignIn e SignUp
- token Authorization
- hash password
- integração com bd
- Mudar Senha

## 📦 Dependencias Usadas

- TypeOrm (integração com o banco de dados)
- pg
- express
- typescript
- multer
- jsonwebtoken
- bcrypt
- ts-node-dev (para execução em desenvolvimento)


## 📔 Documentação da API

### User Routes

- #### Retorna um token de acesso para seu usuario

```http
  POST /user/signin
```
>body:
>```json
>{
>	"email": "exemple@ex.com",
>	"password": "12345"
>}
>```

>response (200): 
>```json
>{
>	"auth": true,
>	"token": "xxxxxx"
>}
>```

- #### Cria um novo User e retorna um token de acesso

```http
  POST /user/signup
```

>body:
>```json
>{
>	"email": "exemple@ex.com",
>	"name": "exempleName",
>	"password": "12345"
>}
>```

>response (200): 
>```json
>{
>	"auth": true,
>	"token": "xxxxxx"
>}
>```

Header necessario para as proximas chamadas:
>```
>authorization: Bearer TokenXXXXXXXX
>```

- #### Retorna todos os usuarios

```http
  GET /user/
```

- #### Mudar senha do usuario

```http
  POST /user/changepw
```

>body:
>```json
>{
>	"email": "exemple@ex.com",
>	"password": "12345",
>	"newPassword": "123456"
>}
>```

>response (200): 
>```json
>{
>	"message": "senha alterada com sucesso" 
>}
>```



### Posts Routes

- #### Retorna todos os Posts de um usuario autenticado

```http
  GET /post/
```

- #### Cria um novo post

```http
  POST /post/create
```
> Multipart Form
> ``` Multipart Form
> file: image/jpeg*
> {
> 	"text": "exemple text"
> }
> ```

> Response (200): 
> ```json
> {
>	[object Post]
> }
> ```

- #### Atualizar um post

```http
  PUT /post/update/:id
```
> Argumentos Opcionais
> Multipart Form
> ``` Multipart Form
> file: image/jpeg*
> {
> 	"text": "exemple text"
> }
> ```

> Response (200): 
> ```json
> {
>	[object Post]
> }
> ```


- #### Deletar um post

```http
  DEL /post/delete/:id
```
> Response (200): 
> ```json
> {
>	[object Post]
> }
> ```


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

Adicione as pastas tmp/uploads (para o envio de arquivos)




Inicie o servidor

```bash
  npm run dev
```


## 💾 Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env na pasta **src**

`SECRET`


## 🧔 Autores

- [@Renan Lira](https://www.github.com/Renan-A-Lira)

