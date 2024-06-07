'use strict';

/**
 * work controller
 */
const { sanitize } = require('@strapi/utils');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::note.note', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const note = await strapi.entityService.findMany('api::note.note', query);
    const schema = strapi.getModel('api::note.note');
    const sanitizedEntity = await sanitize.contentAPI.output(note, schema);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
