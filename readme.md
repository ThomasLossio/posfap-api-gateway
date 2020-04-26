# Sobre

Um projeto que simula uma api-gateway, onde, internamente, ela sabe quais serviços e suas urls para execução de algum recurso.

O cliente pode solicitar os serviços de Somar, subtração, multiplicação e divisão de 2 números, os quais passam por uma pre-validação dos parâmetros enviados através do serviço de validação de números.

| URL          | Método | Resposta Sucesso                          |
|--------------|--------|-------------------------------------------|
| /somar       | POST   | - resultado -> Resultado da soma          |
| /subtrair    | POST   | - resultado -> Resultado da subtração     |
| /multiplicar | POST   | - resultado -> Resultado da multiplicação |
| /dividir     | POST   | - resultado -> Resultado da divisão       |

Todas as rotas, devem aceitam os seguintes parâmetros:

- valorA -> Number 
- valorB -> Number

Caso algum serviço não esteja funcionando, a api retornará a mensagem de "Recurso temporariamente indisponível". Caso você não envie os valores como Number, a api retornará "Valor não informado ou não numérico!".

# Teconologias

## Para execução:

- NodeJS 12.9.1;
- Yarn 1.19.1;

## Na construção:

- ExpressJS;
- express-http-proxy;
- axios;

# Como executar

Como nesse repositório são 6 "servidores", você precisará de 6 instâncias de terminal, abra-os e em cada um, você vai em uma pasta diferente.

Em cada pasta, rode o seguinte comando:

```sh
yarn
```

Esse comando irá baixar as dependências de cada projeto, após baixar nos 6 projetos, vamos executar cada um também com o comando:

```sh
yarn dev
```

Lembrando que você pode mudar as portas utilizadas caso você já esteja usando alguma para outra coisa.

# Testando

Para testar, basta você abrir algum aplicativo como Insomnia ou GetPostman e simular a requisição da api com o seguinte body:

```json
{
  "valorA": 10,
  "valorB": 5
}
```

Altere os valores conforme necessitar.

