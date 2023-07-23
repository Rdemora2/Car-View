# Catalog of cars for sale

## Tools and technologies
    - Python
    - Django rest framework
    - Typescript
    - Angular

# How to configure the backend environment to run the project on a windows operating system

## 1 - Create the virtual environment
    python3 -m venv venv

## 2 - Activate your venv
	.\venv\Scripts\activate

## 3 - Install the requirements
    pip install -r requirements.txt

## 4 - Make the migrations from the back end
    cd .\catalogo_veiculos\
    python manage.py makemigrations
    python manage.py migrate


# How to configure the frontend environment to run the project on a windows operating system

## 1 - Download Angular, node and angular jwt
    npm install @auth0/angular-jwt
    npm install bootstrap
    npm install jquery
    npm install popper.js