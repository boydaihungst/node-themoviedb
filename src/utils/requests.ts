import got from 'got';

const request = got.extend({
  prefixUrl: 'https://api.themoviedb.org/3',
  headers: { 'user-agent': 'node-moviedb/0.1.0' },
});

export default request;
