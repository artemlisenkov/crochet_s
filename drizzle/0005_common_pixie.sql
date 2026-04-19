ALTER TABLE "catalog_product" ALTER COLUMN "title" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "catalog_product" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "catalog_product" ALTER COLUMN "image_alt" DROP NOT NULL;--> statement-breakpoint
CREATE INDEX "catalog_product_category_sort_idx" ON "catalog_product" USING btree ("category","sort_order");--> statement-breakpoint
CREATE INDEX "catalog_product_published_idx" ON "catalog_product" USING btree ("is_published");