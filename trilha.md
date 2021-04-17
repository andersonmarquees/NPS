# Aula 1

## Configurando node -> express -> typescrip

- [x] criando o package.joson -> `yarn init -y`
- [x] instalando o express -> `yarn add express`
- [x] adicionando types para o express -> `yarn add @types/express -D`
- [x] instalando o typescript -> `yarn add typescript -D`
- [x] inicializando o typescript -> `yarn tsc --init`
    - [x] arquivo tsconfig.json criado
- [x] configurando o node para entende a sintaxe typescript
    - [x] `yarn add ts-node-dev -D`
- [x] criando o "scripts" no package.json
` "script": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
  } `

# Aula 2

## Iniciando com abnco de dados

- [x] conhecendo as formas de trabalhar com banco de dados na aplicação
    - [x] TypeORM
    - [x] Divers para os bancos
    - [x] knex.js -> SQL query builder
- [x] instalar o TypeORM e reflect-metadata -> yarn add typeorm reflect-metadata
- [x] instalar o database driver -> usamos o SQlite
    - [x] `yarn add sqlite3`
- [x] configurar o TypeORM na aplicação
    - [x] ormconfig.json (informações que vamos utilizar: banco, local das entidades, migrations e etc)
    - [x] criar o ormconfig.json
- [x] criamos na src -> os diretorio database e passamos o caminho para o ormconfig
    - [x] criamos o index.ts
    - [x] `import { createConnection } from 'typeorm'`
    - [x] criamos a conexão -> `createConnection()`
    - [x] no server.ts `import 'reflect-metadata'`
    - [x] no server.ts `import './database'`
- [x] criar model de usuarios
- [x] criar migration de usuarios
- [x] definir no ormconfig.json, onde as migrations ficarão
`"cli": {
    "migrationsDir": "./src/database/migrations"
  }`
 - [x] criar a migrations com o comando 
 - [x] `yarn typeorm migration:create -n CreateUsers`
 - [x] rodar a maigration -> `yarn typeorm migration:run`
- [x] criar controllers de usuarios
- [x] criar rotas de ususarios
- [x] criar o model para users
	- [x] instalando uma biblioteca `uuid`
	- [x] `yarn add uuid` e add types `yarn add @types/uuid -D`


# Aula 3

## Testando nossa aplicação

- [x] refatorar o contorller
    - [x] criar o diretorio repository de usuario
    - [x] alterar no controller para o repository criado
- [x] criar migration de pesquisas (survey)
    - [x] `yarn typeorm migration:create -n  CreateSurvey`
    - [x] `yarn typeorm migration:run`
    - [x] criar o model para CreateSurvey
    - [x] criar o SurveysRepository.ts
- [x] criar repository de pesquisa
    - [x] criar uma rota para cadastro de pesquisa
- [x] criar controller de pesquisa
- [x] o que são testes automatizados ?
    - [x] 1 - testes unitarios -> TDD
    - [x] 2 - teste de integração (nesse projeto) -> testar funcionalidade completa
    - [x] request -> routes -> controller -> respository
        <- repository <- controller <- routes
    - [x] 3 - Ponta a Ponta (End to End)
- [x] intalando as ferrramentas de teste
    - [x] `yarn add jest @types/jest -D`
    - [x] criar arquivo de configuração do jest `yarn jest --init`
    - [x] `yarn add ts-jest -D` -> preset, para trab. com TS
    - [x] liberar em jest config -> `preset: "ts-jest"` 
    - [x] bail -> true em config.jest
- [x] criar o primeiro teste
- [x] instalando ferramenta auxiliar para (mocha datas) dados fakes
    - [x] `yarn add supertest @types/supertest -D`
    - [x] criando a arquivo app.ts para ficar disponivel tbm para ao test
- [x] criando um banco de dados fake
    - [x] configurar o arquivo index.ts do diretorio database, para identificar
    atraves da linha de comando quando o banco ira atuar como test ou não
    - [x] no package.json em scripts `"test": NODE_ENV=test`, cria variavel de
    ambiente
    - [x] criando o `const defaultOptions = await getConnectionOptions()`, onde teremos todas as informaçoes contidas no ormconfig.json 

# Aula 4

## Envio de Email

- [x] criar migration surveysUsers
    - [x] `yarn typeorm migration:create -n  CreateSurveysUsers`
    - [x] `yarn typeorm migration:run`
- [x] criar o model para CreateSurvey
- [x] criar repository SurveysUsersRepository
- [x] criar controller surveysUsers
- [x] criar serviço de email
    - [x] intalar o nodemailer -> `yarn add nodemailer`
    - [x] cirar o diretorio services e arquivo sendMailService
    - [x] usar o Ethereal -> como SMTP (serviço de email fake)
    - [x] `yarn add @types/nodemailer -D`
- [x] enviar email
- [x] craindo um template customizado para envio de email
    - [x] Handlebars -> `yarn add handlebars`

# Aula 4

## Finalizando a API com validações

- [x] refatorar o SendMailContoller
- [x] criar controller de resposta de usuario
    - [x] validar se o usuario existe
    - [x] alterar a nota de resposta
- [x] criar controller com cálculo de NPS
- [x] criar validações

<!-- "posttest": "rm ./src/database/database.test.sqlite" -->