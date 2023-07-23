# Car view, a fullstack car catalog project

## Technologies
    - Python
    - Django rest framework
    - Django rest framework simple jwt
    - Django cors
    - Typescript
    - Angular

## Used ports
    - Back end: 8000
    - Front end: 4200

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

## 5 - Run the backend server
    python manage.py runserver


# How to configure the frontend environment to run the project on a windows operating system

## 1 - Download Angular, node, jquery, bootstrap and popper

    npm install angular bootstrap jquery popper.js