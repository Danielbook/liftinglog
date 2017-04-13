const config = {
  dbUri: "mongodb://localhost/mern-starter",
  dbUri_remote: "mongodb://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST,
  jwtSecret: "a secret phrase!!",
  port: 8000
};
export default config;
