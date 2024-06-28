var my_sql = require('mysql2');
var path = require('path');

var db_config = require(path.join(__dirname, '..', 'config', 'db_config.json'))[process.env.SERVICE || 'my_com']['db'];
var log_db_config = require(path.join(__dirname, '..', 'config', 'db_config.json'))[process.env.SERVICE || 'my_com']['log_db'];

var pool = my_sql.createPool(db_config);
var log_db_pool = my_sql.createPool(log_db_config);

console.log("======================Init DB Host IP " + db_config.host + "==============================");
console.log("======================Init Log DB Host IP " + log_db_config.host + "==============================");
function getConnection(callback) {
    pool.getConnection(function (err, conn) {
        if (!err) {
            callback(conn);
        }
        else {
            console.error('error connecting: ' + err.stack);
        }
    });
}

function getLogDBConnection(callback) {
    log_db_pool.getConnection(function (err, conn) {
        if (!err) {
            callback(conn);
        }
        else {
            console.error('error connecting: ' + err.stack);
        }
    });
}

module.exports = getConnection;
module.exports.Log_DB = getLogDBConnection;
module.exports.db_config = db_config;

