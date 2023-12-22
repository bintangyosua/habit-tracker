-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_userId_fkey";

-- DropForeignKey
ALTER TABLE "Hari" DROP CONSTRAINT "Hari_habitId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnRoles" DROP CONSTRAINT "UsersOnRoles_userId_fkey";

-- AddForeignKey
ALTER TABLE "UsersOnRoles" ADD CONSTRAINT "UsersOnRoles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hari" ADD CONSTRAINT "Hari_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
