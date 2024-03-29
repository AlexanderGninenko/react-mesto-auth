# Проект: Mesto. React и авторизация пользователей. Frontend

### Обзор
* О проекте
* Особенности
* Инструкция
* Технологии
___

❔ **О проекте**

Данный проект представляет собой фронтенд часть проекта Mesto.
Обращается к API Яндекса.
Сервис Mesto: интерактивная страница, упрощенная версия Инстаграм, где можно загружать и удалять свои фото, оценить картинки загруженные другими пользователями.
Каждый пользователь может менять свои данные (Имя, статус, Аватар). \
Все данные о пользователях и загруженных ими картинках хранятся в базе данных на сервере. \
На всех активных элементах (кнопках, ссылках) есть эффект наведения, а всплывающие окна с формами имеют анимацию с плавным появлением и исчезновением.

[Ссылка на сайт](https://alexandergninenko.github.io/react-mesto-auth)

[Ссылка на макет](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?type=design&t=idrY8RFwKE10YrJh-6)

🔍 **Особенности**

На данном этапе реализован следущий функционал:
* Загрузка с сервера данных с фотографиями, их описанием и количеством лайков
* Загрузка с сервера данных с именем, профессии и аватара пользователя
* Отображение на странице карточек и информации о пользователе.
* Открытие и закрытие попапов редактирования имени и профессии пользователя, добавления новой аватарки и новой карточки
* Регистрация, авторизация пользователя
* Всплывающее окно с информацией об успешной регистрации или ошибкой авторизации
* Реализованы защищенные роуты. Теперь контент и функционал доступен только авторизованным пользователям

Проект написан на функциональных компонентах

___

⚙️ **Инструкция по развёртыванию:**

* Сборщик уже настроен. Достаточно клонировать репозиторий
```sh
$ git clone https://github.com/AlexanderGninenko/react-mesto-auth.git
```
* Установить зависимости
```sh
$ npm install
```
* Запустить проект
```sh
$ npm start
```

#### 🔧 Технологии

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![JSON](https://img.shields.io/badge/-JSON-05122A?style=flat&logo=JSON)&nbsp;
![BEM](https://img.shields.io/badge/-BEM-05122A?style=flat&logo=BEM)&nbsp;
![OOP](https://img.shields.io/badge/-ООП-05122A?style=flat&logo=StackShare&logoColor=green)\
![Webpack](https://img.shields.io/badge/-Webpack-05122A?style=flat&logo=Webpack)&nbsp;
![Figma](https://img.shields.io/badge/-Figma-05122A?style=flat&logo=Figma)&nbsp;

**Автор проекта:**  Александр Гниненко
