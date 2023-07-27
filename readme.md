# Car view, um projeto full stack de um catalogo de carros

![Print do site](main_screen.png)

## Descrição do Projeto
Este é um projeto desenvolvido com TypeScript e Angular no frontend e Python com Django Rest Framework no backend. O projeto tem como objetivo permitir o gerenciamento de veículos, incluindo visualização, cadastro, edição e exclusão dos mesmos. Os veículos são listados em ordem decrescente de valor.

## Recursos Principais
Autenticação Administrativa: O projeto conta com um login administrativo(mesmas credenciais de acesso que o superuser do django) que utiliza o token JWT. O acesso ao gerenciamento de veículos só é permitido para usuários autenticados, ou seja, usuários não autenticados somente conseguem visualizar os dados do site.

Autenticação de Requisições Privadas: Todas as requisições privadas no sistema requerem um token válido, gerado no momento do login, para que a requisição funcione corretamente.

Gerenciamento de Veículos: O sistema permite visualizar, cadastrar, editar e deletar os veículos. Os dados dos veículos são persistidos no banco de dados.

# Instruções de Uso Backend:

## 1 - Crie e ative a venv
    abra um terminal na pasta root do projeto e execute:
    python3 -m venv venv
    .\venv\Scripts\activate

## 2 - Instale os requirements
    pip install -r requirements.txt

## 3 - Faça as migrações do db
    cd .\backend\
    python manage.py makemigrations
    python manage.py migrate

## 4 - Rode o servidor
    python manage.py runserver

## 5 - Pronto!
    o backend está rodando e poder ser accesado em: http://localhost:8000/


# Instruções de Uso Frontend:

## 1 - Baixe o node.js
    https://nodejs.org/pt-br/download

## 2 - Download Angular, node, jquery, bootstrap and popper
    Em um terminal, execute
    npm install angular bootstrap jquery popper.js

## 3 - Rode o servidor
    abra um terminal na raiz do seu projeto
    cd .\frontend\
    ng serve



## Tecnologias Utilizadas
TypeScript
Angular
Python
Django Rest Framework

## Autor
Roberto de Moraes Zarzur
Dev Full Stack