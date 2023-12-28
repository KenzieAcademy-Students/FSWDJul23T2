export default {
  app: {
    port: process.env.PORT || 3001,
    apiUrl: process.env.API_URL || "/api",
  },
  database: {
    url:
      process.env.DB_URL ||
      "mongodb+srv://someperson:somepassword@cluster0.vljookl.mongodb.net/w10ko?retryWrites=true",
  },
};
