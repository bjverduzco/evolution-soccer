var pg = require('pg');
var url = require('url');
var config = {
  database: 'evolution-soccer',
  port: 5432,
  idleTimeoutMills: 30000
};

var pool = new pg.Pool(config);

function addTeam(data, callback){
  console.log('models/addTeam');
  pool.connect(function(err, client, done){
    if(err){
      done();
      return callback();
    }

    client.query('INSERT stuff;', [stuff.name, stuff.season], function(err, result){
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

function editTeam(data, callback){
  console.log('models/editTeam');
  pool.connect(function(err, client, done){
    if(err){
      done();
      return callback(err);
    }

    client.query('UPDATE stuff;', [data.idk, data.more], function(err, result){
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
}

module.exports = {
  addTeam: addTeam,
  editTeam: editTeam
};
