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

knex('famous_people').where('first_name', `${process.argv[2]}`).orWhere('last_name', `${process.argv[2]}`).asCallback(function(err, result){
    if (err) {
        return console.error("error running query", err);
      }
    console.log('Searching ...');
    console.log(`Found 1 person by the name '${process.argv[2]}':`)
    console.log(`${result[0].id}: ${result[0].first_name} ${result[0].last_name}, born '${result[0].birthdate}'`);
    knex.destroy();
  });

// .select('id', 'first_name', 'last_name', 'birthdate').from