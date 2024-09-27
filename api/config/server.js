module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

// module.exports = ({ env }) => ({
//   proxy: true,
//   url: env('HOST_URL'), // Sets the public URL of the application.
//   app: {
//     keys: env.array('APP_KEYS')
//   },
// });
