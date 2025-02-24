drop database if exists library;

create database library;

use library;

create table logintable
 (
  id int NOT NULL IDENTITY(1,1) primary key,
  Username varchar(150) NOT NULL,
  Password varchar(150) NOT NULL,
  
 );

 insert into logintable (Username,Password) values ('Navoda','1234');
 insert into logintable (Username,Password) values ('Harshi','4050');

 select * from newbook;