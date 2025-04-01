import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

/**
 * Seeds the database with sample data.
 *
 * This function deletes all existing products and then creates a set of new products
 * based on the sample data provided in `sample-data.ts`.
 */
async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany(
        {data:sampleData.products}
    );

    console.log('Data seeded');
}

main()