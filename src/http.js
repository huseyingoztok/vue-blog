import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const responseBody = response => response.data;

const request = {
  get: url => apiClient.get(url).then(responseBody),
  post: (url, body) => apiClient.post(url, body).then(responseBody),
  put: (url, body) => apiClient.put(url, body).then(responseBody),
  delete: url => apiClient.delete(url).then(responseBody),
  postForm: (url, file) => {
    let formData = new FormData();
    formData.append('File', file);
    return apiClient
      .post(url, formData, {
        headers: { 'Content-type': 'multipart/form-data' }
      })
      .then(responseBody);
  }
};

const Posts = {
  list: (page, limit) => apiClient.get(`/posts?_page=${page}&_limit=${limit}`),
  get: id => request.get(`/posts/${id}`)
};

export default {
  Posts
};
