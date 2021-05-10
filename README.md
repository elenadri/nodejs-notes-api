# nodejs-notes-api

Api en node js usando expres y mongodb
Crud de Notas y autentificacion de usuarios 

### npm i

npm run dev 

or

npm run build 

npm start

## usuario

/signin  {"email": "tuemail","password": "pass"}

/signup {"username": "username","email": "email@gmail.com","password": "pass"}


## Notas
header x-access-token: tu token 

post /notes {"title": "text "}

get /notes

get /notes:id

put/:id

delete /notes:id
