const url = 'http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh';
const interval = 1000;


const awaitTimeout = (interval) => {
  return new Promise(resolve => setTimeout(resolve, interval));
};

const getWorldTimeApi = async () => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.text();
      console.log(data, '\n');
    }
  } catch (error) {
    console.error(error);
  };
  await awaitTimeout(interval);
  getWorldTimeApi();
};

getWorldTimeApi();
