# npm init -y
- initialisation mta3 el projet

# ExpressJS ( npm i express )
- creation d'un serveur
- creation des APIs

# nodemon
- t5ali e serveur yredemarri automatiquement ba3d ctrl+s

# body-parser
- definition des données eli dekhlin lel server

# GET , POST , PATCH/PUT , DELETE
- param1 : path mta3 API /register
- param2 : callback function

# callback fn :
- p1 : obj : Request => najmou nmanipuliw les données eli jeyin mel front
- p2 : obj : Response => najmou nmanipuliw les données eli n7ebou nab3thouhom lel front

# Requette HTTP / https://httpstatuses.com/
- => headers , body , params
- GET / DELETE : headers , params
- POST / PATCH : headres , params , body

# import project from github
- open Terminal
- npm install

# User contrller
- [X] /add - POST
- /login - POST
- [X] /all - GET // yraj3lna liste des membres
- [X] /allUsers - GET //yrja3 el users lkol
- [X] /one/:id - GET
- [X] /update_account_state - PTACH
- [X] /update_info/:id - PATCH
- [X] /delete/:id - DELETE

# Task controller
- /add - POST
- /all - GET
- /all/:member_id - GET
- /one/:task_id - GET
- /update_state/:task_id - PTACH
- /update_content/:task_id - PATCH
- /delete/:task_id - DELETE

# MONGO DB LINKS
[] - SGBD MONGODB : https://www.mongodb.com/try/download/community?tck=docs_server

- NB : Décocher case install mongodb compass

[] - MONGODB COMPASS : https://www.mongodb.com/try/download/compass

- ATLAS : https://www.mongodb.com/cloud/atlas

# connect to mongodb
- mongodb
- mongoose ( ODM )
- ODM = Object Document Mapping
- Mapping bin Model wel Collection
- Model User <=> users
- NoSQL ( Base de données )
- Tables <=> Collections [ tableau des objets JSON ]
- Lignes <=> Documents
- Cols <=> Attributs

# bcryptjs
- t5alina nhashiw ay donnée