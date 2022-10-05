# Projeto de automação Web adotando o framework Cypress!
> Esse é um exemplo de como montar uma estrutura inicial de testes automáticos web com o auxílio do [Cypress.io][cy], o modelo de escrita de cenários foi o padrão BDD com as regras gramaticais do Gherkin.
> 

![emExecucao](https://github.com/marcosvmlopes/portifoliovml-cypress/blob/main/apresentacao.gif)


## Instalação

A IDE escolhida foi o [VS Code][vs].

Instale no Mac, Linux ou Windows seguindo as instruções da documentação do [Cypress.io][cyDOC].


## Exemplo de uso

Com todos as dependências instaladas, clone o projeto e execute esse comando:

Comando para rodar o teste apenas atraves do terminal
```sh
npx cypress run --browser chrome --no-exit
```
Comando para rodar usando a plataforma visual Cypress.io
```sh
npm run test 
```
Pronto, o projeto será executado em sua máquina.

[cy]:https://github.com/cypress-io/cypress 
[cyDOC]:https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
[cypress.io]: https://www.cypress.io/
[vs]: https://code.visualstudio.com/
