-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coffee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Coffee" ("description", "id", "imageUrl", "name", "price") SELECT "description", "id", "imageUrl", "name", "price" FROM "Coffee";
DROP TABLE "Coffee";
ALTER TABLE "new_Coffee" RENAME TO "Coffee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
