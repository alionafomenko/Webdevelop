const http = require('http');
const url = require('url');
const callToDB = require('./callToDatabase');
const uuid = require('uuid');



const HTTP_PORT = 8080;



async function request(request, response) {

    let cookies = parseCookies(request.headers.cookie);
    let sessionId = cookies['SESSIONID'];
    console.log('sessionId', sessionId);

    let setSessionId;
    if (!sessionId) {
        setSessionId = uuid.v4();
        sessionId = setSessionId;
    }


    let data = await read_params(request);

    console.log('data: ' + JSON.stringify(data));

    if (/^\/loginUser/.test(request.url) && request.method === 'POST') {
        let error = await callToDB.loginUser(sessionId, data.params.email, data.params.password);
        data.error = error;
    } else if (/^\/loginAuthor/.test(request.url) && request.method === 'POST'){
        let error = await callToDB.loginAuthor(sessionId, data.params.email, data.params.password);
        data.error = error;
    } else if (/^\/getBooks/.test(request.url) && request.method === 'GET'){
        let books = await callToDB.getBooks();
        data.books = books;
    } else if (/^\/registrationUser/.test(request.url) && request.method === 'POST'){
        let error = await callToDB.registrationUser(sessionId, data.params.name, data.params.lastName, data.params.email, data.params.password, data.params.phone);
        data.error = error;
    } else if (/^\/registrationAuthor/.test(request.url) && request.method === 'POST'){
        let error = await callToDB.registrationAuthor(sessionId, data.params.name, data.params.lastName, data.params.email, data.params.password, data.params.phone);
        data.error = error;
    } else if (/^\/getAllUserInf/.test(request.url) && request.method === 'GET') {
        let res = await callToDB.getAllUserInf(sessionId);
        data.user = res.user;
        data.order = res.order;
    } else if (/^\/logout/.test(request.url) && request.method === 'POST') {
        await callToDB.logout(sessionId);
        data.error = '';
    }  else if (/^\/addToOrder/.test(request.url) && request.method === 'POST') {
        await callToDB.addToOrder(sessionId, data.params);
        data.error = '';
    } else if (/^\/sendApplication/.test(request.url) && request.method === 'POST') {
        await callToDB.addApplication(sessionId, data.params.title, data.params.annotation);
        data.error = '';
    } else if (/^\/getAllAuthorInf/.test(request.url) && request.method === 'GET') {
        let res = await callToDB.getAllAuthorInf(sessionId);
        data.author = res.author;
        data.application = res.application;
    } else if (/^\/loginAdmin/.test(request.url) && request.method === 'POST'){
        let error = await callToDB.loginAdmin(sessionId, data.params.email, data.params.password);
        data.error = error;
    }  else if (/^\/getUsers/.test(request.url) && request.method === 'GET'){
        let users = await callToDB.getUsers(sessionId);
        data.users = users;
    } else if (/^\/isAdmin/.test(request.url) && request.method === 'GET'){
        let isAdmin = await callToDB.isAdmin(sessionId);
        data.isAdmin = isAdmin;
    } else if (/^\/getAuthors/.test(request.url) && request.method === 'GET'){
        let authors = await callToDB.getAuthors(sessionId);
        data.authors = authors;
    } else if (/^\/getOrders/.test(request.url) && request.method === 'GET'){
        let orders = await callToDB.getOrders(sessionId);
        data.orders = orders;
    } else if (/^\/saveBook/.test(request.url) && request.method === 'POST'){
       await callToDB.saveBook(data.params.bId, data.params.bTitle,
           data.params.bLanguage, data.params.bPageAmount,
           data.params.bPrice);
        data.error = '';
    } else if (/^\/deleteBook/.test(request.url) && request.method === 'POST'){
        await callToDB.deleteBook(data.params.bookId);
        data.error = '';
    } else if (/^\/getApplications/.test(request.url) && request.method === 'GET'){
        let applications = await callToDB.getApplications(sessionId);
        data.applications = applications;
    } else if (/^\/saveStatus/.test(request.url) && request.method === 'POST'){
        await callToDB.saveStatus(data.params.id ,data.params.status);
        data.error = '';
    } else if (/^\/addBook/.test(request.url) && request.method === 'POST'){
        await callToDB.addBook(data.params.appId );
        data.error = '';
    }




    gen_response(data, setSessionId, response);
}


function gen_response(data, setSessionId, response) {
    if (setSessionId){
        console.log('setSessionId:', setSessionId);
        response.setHeader('Set-Cookie', 'SESSIONID=' + setSessionId +'; Path=/');
    }
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', 'http://aliona:5173');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Allow-Methods','*')
    response.end(JSON.stringify(data));

   /* console.log('response',data);*/
};


http.createServer(function (req, res) {

    request(req, res);

}).listen(HTTP_PORT);

console.log('Server is listening on ' + HTTP_PORT);

function read_params(req) {

    let data = {url: req.url, method: req.method};

    return new Promise((resolve) => {

            if (req.method === 'POST') {
                let body = '';

                req.on('end', function () {
                    try {
                        if (body) {
                            data.params = JSON.parse(body);
                        } else {
                            data.params = '';
                        }
                    } catch (e) {
                        data.params = '';
                    }

                    resolve(data);
                });

                req.on('data', function (data) {
                    body += data;
                });

            } else {
                data.params = url.parse(req.url, true).query;
                resolve(data);
            }
        }
    );

}

function parseCookies(cookies) {
    let list = {},
        rc = cookies;

    rc && rc.split(';').forEach(function (cookie) {
        //util.log('cookie:' + cookie);
        let parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return list;
}




async function main() {
   await callToDB.connect();

}

main();