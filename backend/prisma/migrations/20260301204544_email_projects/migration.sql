-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL DEFAULT 'nouser@gmail.com',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "artist" TEXT
);
INSERT INTO "new_Project" ("artist", "description", "id", "name") SELECT "artist", "description", "id", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
