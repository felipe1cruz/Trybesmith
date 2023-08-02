## Trybesmith - Typescript Project

## Sobre
&nbsp;&nbsp; Trybesmith é um projeto Typescript, back-end, onde foi criado uma loja de items medievais, no formato de uma API, criando todas as camadas da aplicação e operações básicas em um banco de dados CRUD: Create, Read, Update e Delete.

## Arquivos:
- tudo na pasta /src.
  A Trybe desenvolveu a configuração inicial do projeto.

## Tecnologias:
Tecnologias Aplicadas por mim nesse projeto:
- Typescript;


## Como executar a aplicação na sua máquina (com docker):
- Certifique-se de ter o docker instalado com as versões 1.29 ou superior;
- Clone o repositório;
- Suba todos os containers com o comando `docker-compose up -d`;
- Sua aplicação está pronta! Você pode testar e fazer requisições através da extensão `Thunder Client` do VSCode, ou utilizar programas como o Postman;

## 1 - Endpoint para Cadastro dos produtos
    Deve ser realizado um POST para a rota `/products`;
    Os produtos enviados são salvos na tabela products do banco de dados;
    O endpoint deve receber a seguinte estrutura:
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }

## 2 - Endpoint para listagem dos produtos
 Deve ser realizado um GET para a rota `/products`;

    O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um status http 200:

[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]

## 3 - Endpoint para cadastro de pessoas usuárias
 Deve ser realizado um POST para a rota `/users`;
 O endpoint deve receber a seguinte estrutura:
{ 
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}

## 4 - Endpoint para listar todos os pedidos
 Deve ser realizado um GET para a rota `/orders`;
 Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um status http 200:
  [
    {
      "id": 1,
      "userId": 2,
      "productsIds": [1, 2]
    },
    {
      "id": 2,
      "userId": 1,
      "productsIds": [3, 4]
    }
  ]

  



