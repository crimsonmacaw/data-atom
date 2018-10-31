var a=''
var b=''
var c=''
var d=''
var e=''
var snowflake = require('snowflake-sdk');
var connection = snowflake.createConnection({
  account: 'st30992',
  username: b,
  password: a,
  warehouse:c,
  database:d,
  schema:e,
  region: 'eu-central-1'
});
connection.connect(function(err, conn) {
  if (err) {
    console.error('Unable to connect: ' + err.message);
  } else {
    console.log('Successfully connected as id: ' + connection.getId());
    connection.execute({sqlText: 'select r_reason_desc as "r" from reason',
      complete: function(err, stmt, rows) {
        if (err) {
        console.error('Failed to execute statement due to the following error: ' + err.message);
        } else {
          console.log('r: ' + JSON.stringify(rows));
        }
      }
    });
  }
});
connection.destroy(function(err, conn) {
  if (err) {
    console.error('Unable to disconnect: ' + err.message);
  } else {
    console.log('Disconnected connection with id: ' + connection.getId());
  }
});
