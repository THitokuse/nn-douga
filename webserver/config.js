'use strict';

const config = {
  MYSQL_HOST: '127.0.0.1',
  MYSQL_DB: 'nn_douga',
  MYSQL_USER: 'root',
  MYSQL_PASSWORD: 'mysql',
  MYSQL_CONNECTIONPOOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = config;
