const client = require('./test_script.js');


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name = '${process.argv[2]}' OR last_name = '${process.argv[2]}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log('Searching ...');
    console.log(`Found 1 person by the name '${process.argv[2]}':`)
    console.log(`${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born '${result.rows[0].birthdate}'`);
    client.end();
  });
});

