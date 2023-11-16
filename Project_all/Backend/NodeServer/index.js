const http = require('http');
const url = require('url');
const callToDB = require('./callToDatabase');
const uuid = require('uuid');



const HTTP_PORT = 8080;



async function request(request, response) {
    let cookies = parseCookies(request.headers.cookie);
    let sessionId = cookies['SESSIONID'];

    let setSessionId;
    if (!sessionId) {
        setSessionId = uuid.v4();
        sessionId = setSessionId;
    }


    let data = await read_params(request);

    console.log('data: ' + JSON.stringify(data));

    if (/^\/login/.test(request.url) && request.method === 'POST') {
        let error = await callToDB.loginUser(sessionId, data.params.email, data.params.password);
        data.error = error;
    } else if (/^\/getBooks/.test(request.url) && request.method === 'GET'){
        let books = await callToDB.getBooks();
        data.books = books;
        data.sessionCallback = sessionId;
    }



    gen_response(data, setSessionId, response);
}


function gen_response(data, setSessionId, response) {
    if (setSessionId){
        response.setHeader('Set-Cookie', 'SESSIONID=' + setSessionId + '; Expires=Sat, 1 Jan 2050 00:00:00 GMT; Secure; HttpOnly');
    }
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end(JSON.stringify(data));
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
                        data.params = JSON.parse(body);
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