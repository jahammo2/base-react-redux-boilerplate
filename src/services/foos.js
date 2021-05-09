import handleError from 'src/services/shared/handleError';

import apiService from './api';

export default {
  find(id) {
    const params = { id };

    return apiService
      .post('/foos', params)
      .then(({ data : { data } }) => data)
      .catch(handleError);
  },
};
