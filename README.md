# Music Match



# Create Database Locally
-From command line enter postgreSQL
sudo -u postgres psql

-Create User in postgres
create user xxxxx with password ' ' ;

-Create Database in postgres
create database xxxxxxxxx with owner admin;

-Alter role in postgres
alter role xxxxxxx with login;

# Create Config File 
-In directory: server/database

module.exports = {
  user: 'user',
  password: 'password',
  database: 'database'
}

-Don't forget to add config file to .gitignore

