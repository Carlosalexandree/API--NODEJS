# API--NODEJS
Projeto Rocketseat - api/nodejs

# Projeto Rocketseat - api/nodejs

## Insomnia REST API Documentation
Este documento fornece informações sobre os endpoints da API REST para o aplicativo Insomnia.

## Base URL
O URL base para todos os endpoints é localhost:3333.

## Users
Create USer

- URL: POST /users
- Description: Create a new user.
- Request Body:
{
    "name": "Carlos",
    "email": "n.eco.1@gmail.com",
    "password": "123"
}
- Headers:
Content-Type: application/json
User-Agent: insomnia/8.6.0

Update User
- URL: PUT /users/1
- Description: Update an existing user.
- Request Body:
  {
    "name": "Carlos Alexandre",
    "email": "n.eco.12354@gmail.com",
    "password": "123",
    "old_password": "1234"
}

- Headers:
Content-Type: application/json
User-Agent: insomnia/8.6.0

Delete User
- URL: DELETE /users
- Description: Delete a user.
- Headers:
- Content-Type: application/json
- User-Agent: insomnia/8.6.0
- 
Index Users
- URL: GET /users/1
- Description: Get user details.
- Parameters:
- user_id: 7
- title:
- tags:
- Headers:
User-Agent: insomnia/8.6.0

## Notes
Create Note
- URL: POST /notes
- Description: Create a new note.
- Request Body:
{
    "title": "Criptografia de dados",
    "description": "Essa é uma nota exemplo.",
    "tags": ["node", "bcryptjs"],
    "links": ["link1", "links2"]
}
- Headers:
- Content-Type: application/json
- User-Agent: insomnia/8.6.0

## Index Note
- URL: GET /notes/1
- Description: Get note details.
- Headers:
- User-Agent: insomnia/8.6.0

## Show Note
- URL: GET /notes/1
- Description: Show details of a specific note.
- Headers:
- User-Agent: insomnia/8.6.0

## Tags

Index Tags
- URL: GET /tags/1
- Description: Get details of all tags.
- Headers:
- User-Agent: insomnia/8.6.0
