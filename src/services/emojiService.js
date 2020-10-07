

import axios from 'axios';

const url = 'http://day-emoji-library.azurewebsites.net/api/getEmojis';

export default class EmojiService {
  static get = async () => {
    return await axios.get(url).then((response) => 
      response.data
    ).catch((err) => {
      console.log(err)
    });
  };

}
