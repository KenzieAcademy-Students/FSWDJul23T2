export const DB_URI =
  process.env.DB_URI ||
  "mongodb+srv://someperson:somepassword@cluster0.zufxdou.mongodb.net/auth-db-demo?retryWrites=true&w=majority";
export const API_URL = process.env.API_URL || "/api";
export const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
export const JWT_SECRET =
  process.env.JWT_SECRET || "peterpiperpickedapeckofpickledpeppers";
