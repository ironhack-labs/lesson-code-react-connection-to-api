import axios from 'axios';

const service = axios.create({
  baseURL: 'https://dog.ceo/api'
});

const DOG_BREED_SERVICE = {
  listAllBreeds: () => {
    return new Promise((resolve, reject) => {
      service
        .get('/breeds/list/all')
        .then(result => {
          const objectOfBreeds = result.data.message;
          const breeds = Object.keys(objectOfBreeds);
          resolve(breeds);
        })
        .catch(error => reject(error));
    });
  },
  listSubBreeds: breed => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/breed/${breed}/list`)
        .then(result => {
          const subBreeds = result.data.message;
          resolve(subBreeds);
        })
        .catch(error => reject(error));
    });
  }
};

export default DOG_BREED_SERVICE;
