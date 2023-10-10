/*
  Warnings:

  - You are about to drop the column `orderId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `orderCode` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderCode` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderCode" TEXT NOT NULL,
    "coffeeName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "OrderItem_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "Order" ("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("coffeeName", "id", "price", "quantity") SELECT "coffeeName", "id", "price", "quantity" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Order" ("address", "contact", "done", "id", "name", "total") SELECT "address", "contact", "done", "id", "name", "total" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_orderCode_key" ON "Order"("orderCode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
