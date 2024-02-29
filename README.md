# CLI application

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

This is an application using node.js and REST API that offers the following functionalities:

- Adding, deleting, editing, and searching users using RESTAPI and MongoDB.
- Assigning contacts to a specific user, allowing them to add, edit, and delete contacts.
- Creating endpoints responsible for user registration, login, logout, considering full user authorization based on tokens.
- Allowing users to upload avatars using Multer.
- Adding a user verification process by sending them an email with an approval link using MailGun.

## Technologies Used

Project is created with:

![JavaScript](https://badges.aleen42.com/src/javascript.svg)
![NodeJS](https://badges.aleen42.com/src/node.svg)

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

Once the dependencies are installed, you can run `npm run start:dev`.

Open your browser or postman and check all available methods and endpoint's for:

CONTACTS:

- GET (get all contacts) : `http://localhost:3000/api/contacts`
- GET (find contact by id) : `http://localhost:3000/api/contacts/CONTACT_ID`
- POST (add new contact) : `http://localhost:3000/api/contacts/`
- DELETE (remove contact by id) : `http://localhost:3000/api/contacts/CONTACT_ID`
- PUT (update contact with json) : `http://localhost:3000/api/contacts/CONTACT_ID`
- PATCH (update one field with contact): `http://localhost:3000/api/contacts/CONTACT_ID/FAVOURITE`

USERS:

- POST (signup/register user) : `http://localhost:3000/api/users/signup`
- POST (login user) : `http://localhost:3000/api/users/login`
- POST (verify if the verify email was send) : `http://localhost:3000/api/users/verify`
- GET (logout user) : `http://localhost:3000/api/users/logout`
- GET (to get current user) : `http://localhost:3000/api/users/current`
- POST (to send verification email to user) : `http://localhost:3000/api/users/verify/:verificationToken`
- PATCH (to get avatar for user) : `http://localhost:3000/api/users/avatar`

## Project Status

Project is: _in-progress_

## Acknowledgements

- Many thanks for GoIT Team.

## Contact

Feel free to contact with me: [@EmiliaWenta](https://www.linkedin.com/in/emilia-wenta-455782294/).
