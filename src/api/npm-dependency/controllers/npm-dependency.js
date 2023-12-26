'use strict';

/**
 * npm-dependency controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::npm-dependency.npm-dependency');
