'use strict';

/**
 * npm-dependency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::npm-dependency.npm-dependency');
