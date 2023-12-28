export const DB_URI =
  process.env.DB_URI ||
  "mongodb+srv://someperson:somepassword@cluster0.zufxdou.mongodb.net/file-upload-demo?retryWrites=true";
export const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
