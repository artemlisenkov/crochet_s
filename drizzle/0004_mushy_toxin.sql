CREATE TYPE "public"."catalog_category" AS ENUM('cardigans', 'tops');--> statement-breakpoint
CREATE TABLE "catalog_product" (
	"id" text PRIMARY KEY NOT NULL,
	"category" "catalog_category" NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_path" text NOT NULL,
	"image_alt" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_published" boolean DEFAULT true NOT NULL,
	"created_at" timestamp (6) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (6) with time zone DEFAULT now() NOT NULL
);
