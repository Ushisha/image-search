
/* import axios from 'axios';

const unsplash = axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {  
        Authorization: "Client-ID omHJGjS3dZX1N4h3DwyL2G4o-aj5U2IV5ouBaPOp74o"
    }
});

export default unsplash; */

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID omHJGjS3dZX1N4h3DwyL2G4o-aj5U2IV5ouBaPOp74o',
  },
});
