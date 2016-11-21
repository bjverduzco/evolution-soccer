var pg = require('pg');
var url = require('url');
var config = {
  database: 'evolution-soccer',
  port: 5432,
  idleTimeoutMills: 30000
};

var pool = new pg.Pool(config);

function pullStandings(callback){
  console.log('models/pullStandings');
  pool.connect(function(err, client, done){
    if(err){
      done();
      return callback(err);
    }

    client.query('GET stuff;', [stuff.stuff], function(err, result){
      if(err){
        done();
        return callback(err);
      }
      else{
        callback(null, result.rows[0]);
        done();
      }
    });
  });
};

function updateStandings(data, callback){
  console.log('/models/updateStandings', data);
  pool.connect(function(err, client, done){
    if(err){
      done();
      return callback(err);
    }

    client.query('query', [data.stuff], function(err, result){
      if(err){
        done();
        return callback(err);
      }
      else{
        callback(null, result.rows[0]);
        done();
      }
    });
  });
};

module.exports = {
  pullStandings: pullStandings,
  updateStandings: updateStandings
};
