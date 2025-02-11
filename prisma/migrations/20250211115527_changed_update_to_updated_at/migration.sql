-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TagOnEvent" (
    "eventId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,

    PRIMARY KEY ("eventId", "tagId"),
    CONSTRAINT "TagOnEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagOnEvent_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TagOnEvent" ("createAt", "eventId", "tagId", "updateAt") SELECT "createAt", "eventId", "tagId", "updateAt" FROM "TagOnEvent";
DROP TABLE "TagOnEvent";
ALTER TABLE "new_TagOnEvent" RENAME TO "TagOnEvent";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
