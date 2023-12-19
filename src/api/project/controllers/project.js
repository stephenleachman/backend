'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::project.project');

module.exports = createCoreController('api::project.project', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

    //     const entity = await strapi.db.query('api::project.project').findOne({
    //         where: { slug }
    //     });

    //     // @ts-ignore
    //     const sanitizedEntity = await this.sanitizeOutput(entity);

    //     return this.transformResponse(sanitizedEntity);
    // }

    const query = {
        filters: { slug },
        ...ctx.query,
      };
  
      const project = await strapi.entityService.findMany("api::project.project", query);
  
      return this.transformResponse(project[0]);
    },
  }));
// }));