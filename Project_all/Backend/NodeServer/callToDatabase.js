const oracledb = require('oracledb');
const dbconfig = require('./config.json');
let connection;
module.exports.loginUser = loginUser;
module.exports.connect = connect;
module.exports.getBooks = getBooks;

async function connect(){
try {
    connection = await oracledb.getConnection(dbconfig);
    console.log('connected');

} catch (e) {
    console.error(e)
}

}


async function loginUser(sessionId, email, password) {
    try {
        let result = await connection.execute(`begin
              loginuser(p_sessionid => :p_sessionid,
                    p_email => :p_email,
                    p_password => :p_password,
                    p_error => :p_error);
            end;`, [sessionId, email, password, {
            type: oracledb.DB_TYPE_VARCHAR,
            dir: oracledb.BIND_OUT
        }]);
        console.log(result);
        return result.outBinds[0];
    } catch (e) {
        console.error(e);
    }

}

async function getBooks() {
    try {
        let result = await connection.execute(`begin get_books(c_books => :c_books); end;`,
            {c_books:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }}, {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = await result.outBinds.c_books;
        const records = await resultSet.getRows();
        await resultSet.close();
        return records;
    } catch (e) {
        console.error(e);
    }

}

