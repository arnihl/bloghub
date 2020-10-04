'use strict'

const { sequelize } = require('../sequelize');

sequelize.sync({ force: true });