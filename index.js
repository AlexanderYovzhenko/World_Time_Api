const url = 'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh';
const interval = 1000;


const awaitTimeout = (interval) => {
  return new Promise(resolve => setTimeout(resolve, interval));
};

const getWorldTimeApi = async () => {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh');

  if (res.ok) {
      const data = await res.text();
      console.log(data, '\n');
      const timeout = await awaitTimeout(interval);
      getWorldTimeApi();
      clearTimeout(timeout);
  }
};

getWorldTimeApi();

// import { request } from 'https';

// const host = 'worldtimeapi.org';
// const path = '/api/timezone/Asia/Ho_Chi_Minh';

// const options = {
//   timeout: 5000,
//   host: host,
//   path: path
// };

// const callback = (response) => {
//   let answer = '';
//   response.on('data', (chunk) => {
//     answer += chunk.toString();
//   });

//   response.on('end', () => {
//     console.log(answer, '\n__________________\n');
//   });
// };


// function doRequest(options) {
//   return new Promise ( async (resolve, reject) => {
//     let req = request(options, callback);

//     req.on('response', res => {
//       resolve(res);
//     });

//     req.on('error', err => {
//       reject(err);
//     });

//     req.end();

//   }); 
// }


// const worldTimeApiRequest = async () => {
//   try {
//     await doRequest(options);
//   } catch (error) {
//     console.log(error, '111111111');
//   } 
//   const timer = await awaitTimeout(interval);
//   worldTimeApiRequest(); 
//   clearTimeout(timer);
// }

// worldTimeApiRequest();
