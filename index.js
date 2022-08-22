import http from 'http';

const host = 'worldtimeapi.org';
const path = '/api/timezone/Asia/Ho_Chi_Minh';
const interval = 1000;

const options = {
  method: 'GET',
  host: host,
  path: path
};

const callback = (response) => {
  let answer = '';
  response.on('data', (chunk) => {
    answer += chunk.toString();
  });

  response.on('end', () => {
    console.log(answer, '\n__________________\n');
  });
};

setInterval(() => {
  const request = http.request(options, callback).end();
  request.on('error', (err) => {
    console.error(err);
  });
}, interval);
