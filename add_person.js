const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people').insert({first_name: `${process.argv[2]}`, last_name: `${process.argv[3]}`, birthdate: `${process.argv[4]}`}).asCallback(function(err, result){
    if (err) {
        return console.error("error running query", err);
      }
    console.log(`Inserted ${process.argv[2]} ${process.argv[3]} in famous_people.`);
    knex.destroy();
  });