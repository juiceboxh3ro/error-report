import axios from 'axios';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('fzrtoken'));

  return axios.create({
    baseURL: `/`,
    headers: {
      Authorization: token
    }
  });
};