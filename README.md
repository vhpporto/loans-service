## Desafio de Empréstimos

Este é um serviço simples que determina quais modalidades de empréstimo uma pessoa tem acesso com base em sua idade, salário e localização. Este desafio faz parte do repositório [backend-br](https://github.com/backend-br).

## Funcionalidades

- Concede empréstimo pessoal se o salário do cliente for igual ou inferior a R$ 3000.
- Concede empréstimo pessoal se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30 anos e residir em São Paulo (SP).
- Concede empréstimo consignado se o salário do cliente for igual ou superior a R$ 5000.
- Concede empréstimo com garantia se o salário do cliente for igual ou inferior a R$ 3000.
- Concede empréstimo com garantia se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30 anos e residir em São Paulo (SP).

## Como rodar o projeto

1 - Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vhpporto/loans-service
```

2 - Instale as dependências:

```bash
cd loans-service
yarn
```

3 - Execute o projeto

```bash
yarn dev
```

O serviço estará rodando em http://localhost:3000.

## Uso

Faça uma chamada POST para o endpoint /customer-loans com o seguinte corpo:

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 7000.0,
  "location": "SP"
}
```

A resposta será uma lista de empréstimos aos quais o cliente tem acesso, com os respectivos tipos e taxas de juros.

```json
{
  "customer": "Vuxaywua Zukiagou",
  "loans": [
    {
      "type": "PERSONAL",
      "interest_rate": 4
    },
    {
      "type": "GUARANTEED",
      "interest_rate": 3
    },
    {
      "type": "CONSIGNMENT",
      "interest_rate": 2
    }
  ]
}
```
