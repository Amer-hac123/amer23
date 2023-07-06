const baseURL = 'https://amer-23.onrender.com';

const fetchAPI = async (Link, methods, body) => {
  const url = baseURL + Link;
  return await fetch(url, {
    method: methods || 'GET',
    body: body,
  }).then(res => res.json());
};
