DROP DATABASE IF EXISTS atlantic_glamping_db;

CREATE DATABASE atlantic_glamping_db;

USE atlantic_glamping_db;

DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Location;
DROP TABLE IF EXISTS Features;

CREATE TABLE Category (
    id int not null auto_increment primary key,
    category_name varchar(30) not null
);

CREATE TABLE Location (
   id int not null auto_increment primary key,
   city_name varchar(30) not null,
   province varchar(30) not null,
   page_url varchar(50) not null,
   img_url varchar(50) not null,
   title varchar(100) not null,
   description TEXT not null,
   short_desc varchar (100) not null,
   price int not null,
   category_id int,
   foreign key (category_id) references Category(id)
);

CREATE TABLE Features (
    id int not null auto_increment primary key,
    num_guests int not null,
    num_beds int not null,
    wifi BOOLEAN not null,
    cell_service BOOLEAN not null,
    fireplace BOOLEAN not null, 
    kitchen BOOLEAN not null,
    electricity BOOLEAN not null,
    shower BOOLEAN not null,
    waterfront BOOLEAN not null,
    category_id int,
    foreign key (category_id) references Category(id),
    location_id int,
    foreign key (location_id) references Location(id)
);