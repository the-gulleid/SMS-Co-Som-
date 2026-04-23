const { createApp } = require('./app');
const { env } = require('./config/env');

const app = createApp();

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${env.PORT}`);
});