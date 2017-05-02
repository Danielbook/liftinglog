const config = {
  mongoURL: process.env.ATLAS_URL || process.env.MONGO_URL || 'mongodb://localhost/lifting_log',
  PORT: process.env.PORT || 8000,
  jwtSecret: "a secret phrase!!",
};
export default config;
