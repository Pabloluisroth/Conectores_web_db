let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba',
  multipleStatements: true,
});

// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

let consultas = `create table if not exists users(
                id int primary key auto_increment,
                name varchar(50) not null,
                email varchar(100) not null unique key,
                rol varchar (100) default 'Subscriber',
                pass varchar (255) not null,
                image varchar(100) default 'random.png');
                create table if not exists tasks(
                id int primary key auto_increment,
                titulo varchar(50) not null,
                descripcion varchar(100) not null unique key,
                vencimiento TIMESTAMP DEFAULT CURRENT_TIMESTAMP); 
                create table if not exists notes(
                id int primary key auto_increment,
                descripcion varchar(100) not null unique key,
                date TIMESTAMP DEFAULT CURRENT_TIMESTAMP); 
                create table if not exists administrators(
                id int primary key auto_increment,
                name varchar(50) not null,
                email varchar(100) not null unique key,
                rol varchar (100) default 'Admin',
                pass varchar (255) not null,
                image varchar(100) default 'random.png');`; 

  connection.query(consultas,[1, 2, 3, 4, 5], function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }else{
      console.log(consultas);
    }
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});