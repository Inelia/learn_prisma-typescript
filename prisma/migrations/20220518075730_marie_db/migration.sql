-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "dateCreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateBirthday" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,
    "profilePicture" TEXT,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
