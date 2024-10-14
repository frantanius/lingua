DO $$ BEGIN
 CREATE TYPE "public"."UserRole" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "UserRole" DEFAULT 'USER';