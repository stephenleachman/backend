'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        // const entity = await strapi.db.query('api::blog.blog').findOne({
        //     where: { slug }
        // });

        // @ts-ignore
        // const sanitizedEntity = await this.sanitizeOutput(entity);

        // return this.transformResponse(sanitizedEntity);

        
        const query = {
            filters: { slug },
            ...ctx.query,
          };

        const blog = await strapi.entityService.findMany("api::blog.blog", query);
  
        return this.transformResponse(blog[0]);
    }
}));