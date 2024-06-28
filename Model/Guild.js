
var mysql = require('mysql2');
var dbpool = require(`../db/db_pool.js`);
class Guild{
    static async getGuildInfo(guildNo)
    {        
        let SQL = `select * from af2_guild where guild_idx = ?`;
        let SQL_PARAM = guildNo; // let SQL_PARAM = [1,1];
        
        return new Promise((resolve, reject)=>{ dbpool((conn)=>{
            let db_result = conn.query(SQL, SQL_PARAM,(err, result)=>{
                if(err){
                    return reject(err);
                }
                else{
                    return resolve(result);
                }
            })
            conn.release();
        })});
    };
}
module.exports = Guild;

