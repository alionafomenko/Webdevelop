const oracledb = require('oracledb');
const dbconfig = require('./config.json');
let connection;
module.exports.loginUser = loginUser;
module.exports.connect = connect;
module.exports.getBooks = getBooks;
module.exports.registrationUser = registrationUser;
module.exports.getAllUserInf = getAllUserInf;
module.exports.logout = logout;
module.exports.addToOrder = addToOrder;
module.exports.registrationAuthor = registrationAuthor;
module.exports.loginAuthor = loginAuthor;
module.exports.addApplication = addApplication;
module.exports.getAllAuthorInf = getAllAuthorInf;
module.exports.loginAdmin = loginAdmin;
module.exports.getUsers = getUsers;
module.exports.getAuthors = getAuthors;
module.exports.getOrders = getOrders;
module.exports.saveBook = saveBook;
module.exports.deleteBook = deleteBook;
module.exports.getApplications = getApplications;
module.exports.saveStatus = saveStatus;
module.exports.addBook = addBook;
module.exports.isAdmin = isAdmin;

async function connect(){
try {
    connection = await oracledb.getConnection(dbconfig);
    console.log('connected');

} catch (e) {
    console.error(e)
}

}


async function loginUser(sessionId, email, password) {
    console.log('loginUser', sessionId, email);
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

async function loginAuthor(sessionId, email, password) {
    try {
        let result = await connection.execute(`begin
  loginauthor(p_sessionid => :p_sessionid,
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

async function loginAdmin(sessionId, email, password) {
    try {
        let result = await connection.execute(`begin
  loginadmin(p_sessionid => :p_sessionid,
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


async function logout(sessionId) {
    try {
        await connection.execute(`begin
  logout(p_sessionid => :p_sessionid);
end;`, [sessionId]);
    } catch (e) {
        console.error(e);
    }

}



async function registrationUser(sessionId, name, lastName, email, password, phone) {
    try {
        let result = await connection.execute(`begin
          registrationuser(p_sessionid => :p_sessionid,
                           p_name => :p_name,
                           p_lastname => :p_lastname,
                           p_email => :p_email,
                           p_password => :p_password,
                           p_phone => :p_phone,
                           p_error => :p_error);
            end;`, [sessionId, name, lastName, email, password, phone,
            {
            type: oracledb.DB_TYPE_VARCHAR,
            dir: oracledb.BIND_OUT
            }],
            {outFormat: oracledb.OUT_FORMAT_OBJECT});
        console.log(result);
        return result.outBinds[0];
    } catch (e) {
        console.error(e);
    }

}

async function registrationAuthor(sessionId, name, lastName, email, password, phone) {
    try {
        let result = await connection.execute(`begin
  registrationauthor(p_sessionid => :p_sessionid,
                     p_name => :p_name,
                     p_lastname => :p_lastname,
                     p_email => :p_email,
                     p_password => :p_password,
                     p_phone => :p_phone,
                     p_error => :p_error);
end;`, [sessionId, name, lastName, email, password, phone,
                {
                    type: oracledb.DB_TYPE_VARCHAR,
                    dir: oracledb.BIND_OUT
                }],
            {outFormat: oracledb.OUT_FORMAT_OBJECT});
        console.log(result);
        return result.outBinds[0];
    } catch (e) {
        console.error(e);
    }

}



async function getBooks() {
    try {
        let result = await connection.execute(`begin get_books(c_books => :c_books); end;`,
            {c_books:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }},
            {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = result.outBinds.c_books;
        const records = await resultSet.getRows();
        await resultSet.close();
        return records;
    } catch (e) {
        console.error(e);
    }

}


async function getUsers(sessionId) {
    console.log(sessionId);
    try {
        let result = await connection.execute(`begin
  getusers(p_sessionid => :p_sessionid,
           c_users => :c_users);
end;`, {p_sessionid: sessionId,  c_users:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }},
            {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = result.outBinds.c_users;
        const records = await resultSet.getRows();
        await resultSet.close();
        console.log(records);
        return records;
    } catch (e) {
        console.error(e);
    }

}



async function isAdmin(sessionId) {
    try {
        let result = await connection.execute(`begin
  isadmin(p_sessionid => :p_sessionid,
          p_isadmin => :p_isadmin);
end;`, [sessionId,
                {
                    type: oracledb.DB_TYPE_VARCHAR,
                    dir: oracledb.BIND_OUT
                }],
            {outFormat: oracledb.OUT_FORMAT_OBJECT});
        return result.outBinds[0];
    } catch (e) {
        console.error(e);
    }

}

async function getAuthors(sessionId) {
    try {
        let result = await connection.execute(`begin
getauthors(p_sessionid => :p_sessionid,
    c_authors => :c_authors);
end;`, {p_sessionid: sessionId,  c_authors:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }},
            {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = result.outBinds.c_authors;
        const records = await resultSet.getRows();
        await resultSet.close();
        return records;
    } catch (e) {
        console.error(e);
    }

}


async function getOrders(sessionId) {
    try {
        let result = await connection.execute(`begin
getorders(p_sessionid => :p_sessionid,
    c_orders => :c_orders);
end;
`, {p_sessionid: sessionId,  c_orders:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }},
            {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = result.outBinds.c_orders;
        const records = await resultSet.getRows();
        await resultSet.close();
        return records;
    } catch (e) {
        console.error(e);
    }

}


async function getApplications(sessionId) {
    console.log('meth');
    try {
        let result = await connection.execute(`begin
  getapplications(p_sessionid => :p_sessionid,
                  c_applications => :c_applications);
end;

`, {p_sessionid: sessionId,  c_applications:{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }},
            {outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resultSet = result.outBinds.c_applications;
        const records = await resultSet.getRows();
        await resultSet.close();
        console.log(records);
        return records;
    } catch (e) {
        console.error(e);
    }

}



async function saveBook(bId, bTitle, bLanguage,
                        bPageAmount, bPrice) {
    try {
        await connection.execute(`begin
  savebook(p_bid => :p_bid,
           p_btitle => :p_btitle,
           p_blanguage => :p_blanguage,
           p_bpageamount => :p_bpageamount,
           p_bprice => :p_bprice);
end;`, [bId, bTitle, bLanguage,
                bPageAmount, bPrice]);
    } catch (e) {
        console.error(e);
    }

}

async function saveStatus(id, status) {
    try {
        await connection.execute(`begin
  savestatus(p_satus => :p_satus,
             p_id => :p_id);
end;
`, [status, id]);
    } catch (e) {
        console.error(e);
    }

}



async function deleteBook(bookId) {
    try {
        await connection.execute(`begin
  deletebook(p_bookid => :p_bookid);
end;`, [bookId]);
    } catch (e) {
        console.error(e);
    }

}

async function addBook(appId) {
    try {
        await connection.execute(`begin
  addbook(p_appid => :p_appid);
end;`, [appId]);
    } catch (e) {
        console.error(e);
    }

}



async function addToOrder(sessionid, bookId) {
    try {
        await connection.execute(`begin
  addtoorder(p_sessionid => :p_sessionid,
             p_bookid => :p_bookid);
end;`, [sessionid, bookId]);
    } catch (e) {
        console.error(e);
    }

}


async function addApplication(sessionid, title, annotation) {
    try {
        await connection.execute(`begin
  addapplication(p_sessionid => :p_sessionid,
                 p_title => :p_title,
                 p_annotation => :p_annotation);
end;`, [sessionid, title, annotation]);
    } catch (e) {
        console.error(e);
    }

}


async function getAllUserInf(sessionId) {

    try {
        let result = await connection.execute(`begin
  getalluserinf(p_sessionid => :p_sessionid,
                c_user => :c_user,
                c_order => :c_order,
                p_error => :p_error);
end;`,
            {p_sessionid: sessionId,
            c_user: {dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
            c_order: {dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
            p_error: {dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_VARCHAR}
            },
            {outFormat: oracledb.OUT_FORMAT_OBJECT, autoCommit: false});

        console.log(result.outBinds.p_error, 'error');
        if (result.outBinds.p_error) {
            return {user: null, order: null, error: result.outBinds.p_error};
        } else {
            const resultSetUser = result.outBinds.c_user;
            const resultSetOrder = result.outBinds.c_order;
            const recordsUser = await resultSetUser.getRows();
            const recordsOrder = await resultSetOrder.getRows();
            await resultSetUser.close();
            await resultSetOrder.close();
            return {
                user: recordsUser,
                order: recordsOrder,
                error: null
            };
        }
    } catch (e) {
        console.error(e);
        return {user: null, order: null };
    }

}


async function getAllAuthorInf(sessionId) {
    try {
        let result = await connection.execute(`begin
getallauthorinf(p_sessionid => :p_sessionid,
    c_author => :c_author,
    c_application => :c_application,
    p_error => :p_error);
end;`,
            {p_sessionid: sessionId,
                c_author: {dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
                c_application: {dir: oracledb.BIND_OUT, type: oracledb.CURSOR },
                p_error: {dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_VARCHAR}
            },
            {outFormat: oracledb.OUT_FORMAT_OBJECT, autoCommit: false});


        if (result.outBinds.p_error) {
            return {author: null, application: null, error: result.outBinds.p_error};
        } else {
            const resultSetAuthor = result.outBinds.c_author;
            const resultSetApplication = result.outBinds.c_application;
            const recordsAuthor = await resultSetAuthor.getRows();
            const recordsApplication = await resultSetApplication.getRows();
            await resultSetAuthor.close();
            await resultSetApplication.close();
            return {
                author: recordsAuthor,
                application: recordsApplication,
                error: null
            };
        }
    } catch (e) {
        console.error(e);
        return {author: null, application: null };
    }

}



