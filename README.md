<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@1&family=Nova+Mono&display=swap" rel="stylesheet">

***

<h1 align= "center" background color="black">

    # 13 Object-Relational Mapping (ORM):E-Commerce Back End

</h1>

***

<h2 align= "center">

 <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/datfoosteve/E-Commerce-Omega?style=plastic)![Lines of code](https://img.shields.io/tokei/lines/github/datfoosteve/E-Commerce-Omega?style=plastic)

</h2>

***
## Table of Contents

***
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Integration/Deploy Links](#integrationdeploy-links)
- [Credits](#credits)
- [License](#license)
- [Project/Assignment-Status](#projectassignment-status)
- [Future Plans](#future-plans)

***
## Description

***

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@1&family=Nova+Mono&display=swap" rel="stylesheet">



    This application is basically a database and a backend. As an assignment, its purpose is to help students gain a understanding on how Object Relational Mapping works in Database systems and 
    also learn Sequelize and MySql code. By using MySQL2, Sequelize, and Express.js, we are able to connect to the database to store data .To initialize the database we use a package named 
    "dotenv" which stores Username info, database name and password. This package file and is able to communicate and  sync the Sequelize models to the MySql database on startup.
    Being themed as the backend of a fictional e-commerce site, this assignment helps acclimate and prepare students early to industry standard database design language situations and challenges.

***
## Installation

***

    `npm init`

    `npm install mysql2`

    `npm install sequelize`

    `npm install dotenv`


***
## Usage

***

Run the following command at the root of your project and answer the prompted questions:

    `mysql -u root -p`

Enter PW when prompted

    `source db/schema.sql`

    `quit`

    `npm run seed`
    
    `npm start`


 

    The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

    ![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

    The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

    ![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

    The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

    ![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

   
***
## Integration/Deploy Links

***

This walkthrough video shows the POST, PUT, and DELETE routes for products and tags, by being tested in Insomnia.

[thisLinkWIllbeTheVideoLink]

***
## Credits

***

Stephen Puthenpurackal and tutor Eric Sayez

***
## License

***

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

***
## Project/Assignment-Status

***

*Completed and Finalized*

<img src="https://img.shields.io/github/last-commit/datfoosteve/E-Commerce-Omega" >

***
## Future Plans
***

Go back over it as reference for anything that has to do with MySql OR Sequelize
***