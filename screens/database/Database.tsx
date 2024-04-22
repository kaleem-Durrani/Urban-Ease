import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("shoppingApp.db");

const initDatabase = () => {
  // Create users table
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          phone TEXT,
          password TEXT
        );`
    );

    // Create other tables (cart, wishlist, processed orders) if needed
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS cart (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER,
          itemId INTEGER,
          quantity INTEGER,
          FOREIGN KEY (userId) REFERENCES users(id)
        );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS wishlist (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER,
          itemId INTEGER,
          FOREIGN KEY (userId) REFERENCES users(id)
        );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS processedOrders (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userId INTEGER,
          status TEXT,
          FOREIGN KEY (userId) REFERENCES users(id)
        );`
    );
  });
};

const getWishlistById = (
  userId: number,
  callback: (itemIds: number[]) => void
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT itemId FROM wishlist WHERE userId = ?;",
      [userId],
      (_, results) => {
        const itemIds = [];
        for (let i = 0; i < results.rows.length; i++) {
          itemIds.push(results.rows.item(i).itemId);
        }
        callback(itemIds);
      }
    );
  });
};

const addToWishlist = (itemId: number, userId: number) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO wishlist (userId, itemId) VALUES (?, ?);",
      [userId, itemId],
      (_, results) => {
        if (results.rowsAffected > 0) {
          console.log("Item added to wishlist successfully!");
        } else {
          console.error("Failed to add item to wishlist.");
        }
      }
    );
  });
};

const removeFromWishlist = (itemId: number, userId: number) => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM wishlist WHERE itemId = ? AND userId = ?;",
      [itemId, userId],
      (_, results) => {
        if (results.rowsAffected > 0) {
          console.log("Item removed from wishlist successfully!");
        } else {
          console.error("Failed to remove item from wishlist.");
        }
      }
    );
  });
};

const deleteUserById = (userId: number) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM users WHERE id = ?;", [userId], (_, results) => {
      if (results.rowsAffected > 0) {
        console.log("User deleted successfully!");
      } else {
        console.error("User Does not exist.");
      }
    });
  });
};

export {
  db,
  initDatabase,
  getWishlistById,
  addToWishlist,
  removeFromWishlist,
  deleteUserById,
};
