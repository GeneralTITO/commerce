# Documentação da API

## Visão Geral

Esta API é projetada para gerenciar um sistema de vendas, incluindo operações para clientes, produtos, vendas e itens de venda. 

## Endpoints

### Clientes

- **Listar todos os clientes**
  - `GET /clientes/`
  - **Descrição**: Retorna uma lista de todos os clientes.
  - **Exemplo de Resposta**:
    ```json
    [
      {
        "id": 1,
        "nome": "Tito",
        "cpf": "123321123321",
        "email": "tito@gmail.com",
        "endereco": "rua tal bairro acolá",
        "telefone": "123321123"
      }
    ]
    ```

- **Obter um cliente**
  - `GET /clientes/{id}`
  - **Descrição**: Retorna um cliente específico.
  - **Parâmetros de Path**:
    - `id`: ID do cliente.
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "nome": "Tito",
      "cpf": "123321123321",
      "email": "tito@gmail.com",
      "endereco": "rua tal bairro acolá",
      "telefone": "123321123"
    }
    ```

- **Criar um cliente**
  - `POST /clientes`
  - **Descrição**: Cria um novo cliente.
  - **Corpo da Requisição**:
    ```json
    {
      "nome": "Tito",
      "cpf": "123321123321",
      "email": "tito@gmail.com",
      "endereco": "rua tal bairro acolá",
      "telefone": "123321123"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "nome": "Tito",
      "cpf": "123321123321",
      "email": "tito@gmail.com",
      "endereco": "rua tal bairro acolá",
      "telefone": "123321123"
    }
    ```

- **Atualizar um cliente**
  - `PATCH /clientes/{id}`
  - **Descrição**: Atualiza os detalhes de um cliente específico.
  - **Parâmetros de Path**:
    - `id`: ID do cliente.
  - **Corpo da Requisição**:
    ```json
    {
      "nome": "Tito",
      "email": "tito_novo@gmail.com"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "nome": "Tito",
      "cpf": "123321123321",
      "email": "tito_novo@gmail.com",
      "endereco": "rua tal bairro acolá",
      "telefone": "123321123"
    }
    ```

- **Excluir um cliente**
  - `DELETE /clientes/{id}`
  - **Descrição**: Remove um cliente específico.
  - **Parâmetros de Path**:
    - `id`: ID do cliente.
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Cliente excluído com sucesso."
    }
    ```

### Produtos

- **Listar todos os produtos**
  - `GET /produtos/`
  - **Descrição**: Retorna uma lista de todos os produtos.
  - **Exemplo de Resposta**:
    ```json
    [
      {
        "id": 1,
        "nome": "Cama",
        "preco": 1009.99,
        "quantidadeEmEstoque": 5
      }
    ]
    ```

- **Obter um produto**
  - `GET /produtos/{id}`
  - **Descrição**: Retorna um produto específico.
  - **Parâmetros de Path**:
    - `id`: ID do produto.
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "nome": "Cama",
      "preco": 1009.99,
      "quantidadeEmEstoque": 5
    }
    ```

- **Criar um produto**
  - `POST /produtos`
  - **Descrição**: Cria um novo produto.
  - **Corpo da Requisição**:
    ```json
    {
      "nome": "Ventilador",
      "preco": 305.10,
      "quantidadeEmEstoque": 50
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 2,
      "nome": "Ventilador",
      "preco": 305.10,
      "quantidadeEmEstoque": 50
    }
    ```

- **Atualizar um produto**
  - `PATCH /produtos/{id}`
  - **Descrição**: Atualiza os detalhes de um produto específico.
  - **Parâmetros de Path**:
    - `id`: ID do produto.
  - **Corpo da Requisição**:
    ```json
    {
      "nome": "Ventilador",
      "preco": 310.00
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 2,
      "nome": "Ventilador",
      "preco": 310.00,
      "quantidadeEmEstoque": 50
    }
    ```

- **Excluir um produto**
  - `DELETE /produtos/{id}`
  - **Descrição**: Remove um produto específico.
  - **Parâmetros de Path**:
    - `id`: ID do produto.
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Produto excluído com sucesso."
    }
    ```

### Vendas

- **Listar todas as vendas**
  - `GET /vendas/`
  - **Descrição**: Retorna uma lista de todas as vendas.
  - **Exemplo de Resposta**:
    ```json
    [
      {
        "id": 1,
        "data": "2024-09-01",
        "cliente": {
          "id": 1,
          "nome": "Tito"
        }
      }
    ]
    ```

- **Obter uma venda**
  - `GET /vendas/{id}`
  - **Descrição**: Retorna uma venda específica.
  - **Parâmetros de Path**:
    - `id`: ID da venda.
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "data": "2024-09-01",
      "cliente": {
        "id": 1,
        "nome": "Tito"
      }
    }
    ```

- **Criar uma venda**
  - `POST /vendas`
  - **Descrição**: Cria uma nova venda.
  - **Corpo da Requisição**:
    ```json
    {
      "data": "2024-09-01",
      "cliente": {
        "id": 1
      }
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "data": "2024-09-01",
      "cliente": {
        "id": 1,
        "nome": "Tito"
      }
    }
    ```

- **Atualizar uma venda**
  - `PATCH /vendas/{id}`
  - **Descrição**: Atualiza os detalhes de uma venda específica.
  - **Parâmetros de Path**:
    - `id`: ID da venda.
  - **Corpo da Requisição**:
    ```json
    {
      "data": "2024-09-02"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "data": "2024-09-02",
      "cliente": {
        "id": 1,
        "nome": "Tito"
      }
    }
    ```

- **Excluir uma venda**
  - `DELETE /vendas/{id}`
  - **Descrição**: Remove uma venda específica.
  - **Parâmetros de Path**:
    - `id`: ID da venda.
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Venda excluída com sucesso."
    }
    ```

### Itens de Venda

- **Listar todos os itens de venda**
  - `GET /itensvenda/`
  - **Descrição**: Retorna uma lista de todos os itens de venda.
  - **Exemplo de Resposta**:
    ```json
    [
      {
        "id": 1,
        "quantidade": 2,
        "produto": {
          "id": 1,
          "nome": "Cama"
        },
        "venda": {
          "id": 1
        }
      }
    ]
    ```

- **Obter um item de venda**
  - `GET /itensvenda/{id}`
  - **Descrição**: Retorna um item de venda específico.
  - **Parâmetros de Path**:
    - `id`: ID do item de venda.
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 1,
      "quantidade": 2,
      "produto": {
        "id": 1,
        "nome": "Cama"
      },
      "venda": {
        "id": 1
      }
    }
    ```

- **Criar um item de venda**
  - `POST /itensvenda`
  - **Descrição**: Cria um novo item de venda.
  - **Corpo da Requisição**:
    ```json
    {
      "quantidade": 3,
      "produto": {
        "id": 2
      },
      "venda": {
        "id": 1
      }
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 2,
      "quantidade": 3,
      "produto": {
        "id": 2,
        "nome": "Ventilador"
      },
      "venda": {
        "id": 1
      }
    }
    ```

- **Atualizar um item de venda**
  - `PATCH /itensvenda/{id}`
  - **Descrição**: Atualiza os detalhes de um item de venda específico.
  - **Parâmetros de Path**:
    - `id`: ID do item de venda.
  - **Corpo da Requisição**:
    ```json
    {
      "quantidade": 4
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "id": 2,
      "quantidade": 4,
      "produto": {
        "id": 2,
        "nome": "Ventilador"
      },
      "venda": {
        "id": 1
      }
    }
    ```

- **Excluir um item de venda**
  - `DELETE /itensvenda/{id}`
  - **Descrição**: Remove um item de venda específico.
  - **Parâmetros de Path**:
    - `id`: ID do item de venda.
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Item de venda excluído com sucesso."
    }
    ```

---
.