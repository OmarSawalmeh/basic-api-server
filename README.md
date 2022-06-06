# **Basic-Api-Server**
🔗[Heroku App](https://api-server-express.herokuapp.com/)
🔗[GitHub Actions](https://github.com/OmarSawalmeh/basic-api-server/actions)
### **Summary work of the application**
---
---
- Build server with express node.

- Server contain some of routes.

- Create a Home / route called just to chech specific when beging build app.
<br/>
<br/>
- Add route to check any problem for example:
    - 404 To catch any error in the input from the user.
    - 500 To catch any error in internal server.  
<br/>
- Create Database

```js
 // in terminal to start psql ----> pg_ctl -D /home/linuxbrew/.linuxbrew/var/
```
 
```sql
CREATE DATABASE serverapi;   
```

- Create a index.js in models folder -- This is a template to create any table we need.
<br/><br/>

- Create a clothes.js and food.js in models folder -- This is a table created  from index.js , and i can declare any thing i need in table for example any coulmn any datatype like a SQL language.
<br/><br/>

- Make some of route in router folder for clothes and food , to RESTFul Api.

- Then i make test file to check each file and each route, to check work the right way.


### **Notes and Steps :**
---
---
- **GitHub** <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="25" height="25">
    1. Create a new repository, called a basic-express-seerver.
    2. Select Add a README, Select the Add gitignore, and choose Node.js and choose MIT license.
    3. In GitHub Add **Node Actions**  then add **dev** branch in node.js.yaml.
    4. The last step to test my code befor push it in GitHub.
    5. Clone this to your local machine.
    6. Create a “dev” branch to do your work in [ git checkout -b dev ].
---
- **Code In VS** <img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" width="25" height="25">
    1. Create Server   ---> npm init -y
    2. Install Packges ---> 
        - npm i express dotenv
		- npm i nodemon
		- npm i sequelize pg sqlite3
		- npm install --save-dev jest
		- npm install supertest --save-dev
    3. To Add Test In Code:
        - create Folder name **--test--** in main root, inside **--test--** create file [anyName.test.js].
        - in package-json modify --->  "scripts": {
                                            "init": "sequelize db:create",
                                            "test": "NODE_ENV=test jest",
                                            "dev": "NODE_ENV=development nodemon index.js",
                                            "start": "NODE_ENV=production node index.js"
                                            },

---
- **Heroku** <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" width="25" height="25">
    1. Create a new Heroku app, called [api-server-express](https://api-server-express.herokuapp.com/)
    2. Go to the deployment tab
    3. Choose “GitHub”
    4. Connect to your repository
    5. Choose the “master” or “main” branch
    6. Choose the “Wait for CI to pass before deploy” option
    7. Choose the “enable automatic deploys” optio
    8.   
        - go to resources in the heroku app
        - search about postgres , you will find "heroku postgres"
        - click on it and then submit 
    - After this steps i am use this [vedio](https://www.youtube.com/watch?v=gPOa0LvIwHQ) to solve all problem when connect my app with heroku website.