const config = {
  mongoURL: 'mongodb://localhost/lifting_log' || process.env.ATLAS_URL,
  PORT: process.env.PORT || 8000,
  jwtSecret: "a secret phrase!!",
};
export default config;
