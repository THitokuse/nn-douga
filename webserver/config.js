'use strict';

const config = {
  WEBSERVER_URL_ROOT: 'http://localhost:3000/',
  MYSQL_HOST: '127.0.0.1',
  MYSQL_DB: 'nn_douga',
  MYSQL_USER: 'root',
  MYSQL_PASSWORD: 'mysql',
  MYSQL_CONNECTIONPOOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  SECRET: 'steS6av@*uya',
  BCRYPT_ROUNDS: 15,
  REDIS_HOST: '127.0.0.1',
  REDIS_PORT: 6379,
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN
};

module.exports = config;
