<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@1&family=Nova+Mono&display=swap" rel="stylesheet">
<h2 align= "center">
Object-Relational Mapping - E-Commerce Backend - Assignment 13

 <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/datfoosteve/E-Commerce-Omega?style=plastic)![Lines of code](https://img.shields.io/tokei/lines/github/datfoosteve/E-Commerce-Omega?style=plastic)

</h2>

## Table of Contents

***

- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Mockup](#mockup)
- [Integration/Deploy Links](#integrationdeploy-links)
  - [Demo](#demo)
- [Credits](#credits)
- [License](#license)
- [Project/Assignment-Status](#projectassignment-status)
- [Future Plans + Questions](#future-plans--questions)

***
## Description

***

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@1&family=Nova+Mono&display=swap" rel="stylesheet">



    Project was developed with starter code. As an assignment, its purpose is to help students gain a understanding on how Object Relational Mapping works in Database systems and 
    also learn a little bit about the Sequelize and MySql2 codebase. By using MySQL2, Sequelize, and Express.js, we are able to connect to the database to store data, and with insomnia we were able to check all endpoints .To initialize the database we use a package named 
    "dotenv" which stores Username info, database name, and password. This package file and is able to communicate and sync the Sequelize models to the MySql database on startup.
    Being themed as the backend of a fictional e-commerce website, this assignment helps acclimate and prepare students early to industry standard database design language , thus progressing another layer of the stack.

***
## Installation

***
If you are positioned on your root directory, then from
 the command line, type and run the following commands


    `npm i`   

Thats it.



This 'npm i' should install all the packages below, check the package.json
file if its not installed see if they are even listed as a dependency,
 and if these files are not listed, these commands below will
install them and give you an updated version.

    `npm install mysql2`

    `npm install sequelize`

    `npm install express`

    `npm install dotenv`

*Note: Node package manager must be installed on your computer in order for these commands to work with the CLI.* 

*<a href = "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"> Click here to download npm , which gives you the ability to publish and install the dependencies for this application.</a>*

***
## Usage

***


Run the following commands at root to seed the file

    `mysql -u root`

Enter the following inside the mysql command line

    `source db/schema.sql`

    `quit`

Then Run the following commands

    `npm run seed`
    
    `npm start`

## Mockup

    The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

<div style="height: 0; padding-bottom: calc(80.93%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/62104f1b2ebe9900a05df5c4?autoplay=true" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:100%" title="Yeah Right" width="100%"></iframe></div>

    The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

<div style="height: 0; padding-bottom: calc(80.93%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://www.kapwing.com/e/621054bfc674ec007f79fcac?autoplay=true" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:100%" title="Embedded content made on Kapwing" width="100%"></iframe></div>

    The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

<div style="height: 0; padding-bottom: calc(80.93%); position:relative; width: 100%;"><iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src="https://imgur.com/gallery/0vZeurs" style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:100%" width="100%"></iframe></div>

   
***
## Integration/Deploy Links

***

### Demo

This walkthrough video shows the POST, PUT, and DELETE routes for products and tags, by being tested in Insomnia.

[thisLinkWIllbeTheVideoLink]

***
## Credits

***

Stephen Puthenpurackal

<a href ="https://github.com/sayex" alt="Tutor">Eric Sayez</a>

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
## Future Plans + Questions

***

My plans for after the project?

    "Go back over it as reference for anything that has to do with MySql OR Sequelize.....I guess"

***

Feel Free to email me your questions!

Email: stephenandarlie@gmail.com

Github: <a href ="https://github.com/datfoosteve">datfoosteve</a>

***