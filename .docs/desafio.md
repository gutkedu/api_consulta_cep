# Desafio

Desenvolver uma API em Node.JS que recebe requisições POST com um CEP como
parâmetro. O CEP deve ser pesquisado em https://viacep.com.br/ e o retorno deve vir na
resposta da requisição. Esta API deve possuir algum tipo de autenticação, fica a seu critério
escolher qual utilizar.

## Critérios de avaliação:

- Quais validações foram feitas na entrada de dados;
- Clareza do código-fonte;
- Lint do projeto;
- Organização da estrutura base do projeto.

### Critérios que farão toda a diferença (opcionais):

- Usar uma solução de cache para que se o mesmo CEP for digitado em um intervalo
  de até cinco minutos, não ir para o ViaCEP e buscar os dados diretamente do cache.
  Sinalizar no retorno da requisição se o dado está vindo do ViaCep ou do cache.
- Mandar um exemplo de como a requisição deve ser feita. Isso pode ser feito via
  CURL, PostMan ou Insomnia.
