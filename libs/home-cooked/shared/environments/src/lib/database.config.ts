declare var process: any;

export default () => ({
  DATABASE: {
    CONNECTION: process.env.HOMECOOKED_MONGODB_CONNSTR,
  }
});
