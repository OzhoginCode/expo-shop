const initDb = async (db) => {
  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS cart(
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    price REAL,
    image TEXT,
    quantity INTEGER
  );`);
};

export default initDb;
