'use strict';

/**
 * npm-dependency router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::npm-dependency.npm-dependency');
