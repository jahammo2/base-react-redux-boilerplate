import apiService from './api';

export default {
  find(id) {
    const params = {
      query     : print(find),
      variables : { id },
    };

    return apiService
      .post('/graphql', params)
      .then(({ data : { data } }) => data)
      .catch(handleError);
  },
};
