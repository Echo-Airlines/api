-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "UserId" UUID;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
