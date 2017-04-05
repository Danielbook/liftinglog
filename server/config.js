const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin@ds060369.mlab.com:60369/liftinglog',
  port: process.env.PORT || 8000,
};

export default config;
