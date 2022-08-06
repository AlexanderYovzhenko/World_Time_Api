const body = document.querySelector('body');

const site = 'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh';
const interval = 1000;

function queryTimeApi (site) {
  setInterval(async () => {
    try {
      const response = await fetch(site);
      const data = await response.text();
      body.innerText = data;
    } catch (error) {
      body.innerText = error;
      console.error(error);
    }
  }, interval);
};

queryTimeApi(site);
