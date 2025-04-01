"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

/**
 * Fetches the latest products from the database.
 *
 * This function retrieves a limited number of the most recently created products 
 * from the database, ordered by their creation date in descending order. The 
 * number of products retrieved is determined by the LATEST_PRODUCTS_LIMIT constant.
 *
 * @returns An array of product objects converted to plain JavaScript objects.
 */

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}
