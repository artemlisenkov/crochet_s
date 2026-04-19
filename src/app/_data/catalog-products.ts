import "server-only";

import { asc, eq } from "drizzle-orm";
import { db } from "@/src/db";
import { catalogProduct } from "@/src/db/schema";

export const getPublishedCatalogProducts = async () => db
    .select({
        id: catalogProduct.id,
        category: catalogProduct.category,
        title: catalogProduct.title,
        description: catalogProduct.description,
        imagePath: catalogProduct.imagePath,
        imageAlt: catalogProduct.imageAlt,
    })
    .from(catalogProduct)
    .where(eq(catalogProduct.isPublished, true))
    .orderBy(asc(catalogProduct.category), asc(catalogProduct.sortOrder));

export type PublishedCatalogProduct = Awaited<ReturnType<typeof getPublishedCatalogProducts>>[number];
