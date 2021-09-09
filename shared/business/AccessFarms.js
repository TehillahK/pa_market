import Axios from 'axios';
const PROXY="68.183.195.135";
const PORT= 3000

//GETS ALL FARMS FROM DB
async export function getAllFarms() {
    let result=[]; //farms array will be stored here
    try {
      const response = await Axios.get('/get-all-farms',
      {
        proxy: {
            host: PROXY,
            port: PORT
          }
      }
      );
      result    =   response.data;
    } catch (error) {
      console.error(error);
    }
  }
