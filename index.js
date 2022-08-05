const body = document.querySelector('body');

const site = 'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh';
const interval = 1000;

async function queryTimeApi (site) {
  return await (await fetch(site)).text();
};

setInterval(() => {
  queryTimeApi(site)
    .then(data => {
      body.innerText = data;
    })
    .catch(err => {
      body.innerText = err;
      console.error(err);
    });
}, interval);
