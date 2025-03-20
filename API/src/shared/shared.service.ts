import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SharedService {
  constructor(private prisma: PrismaService) { }

  async displayProduct() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        productVariants: {
          include: {
            discount: true,
            productimage: true,
          },
        },
      },
    });
  }

  async displayProductByID(id: number) {
    const product = await this.prisma.product.findUnique({
      include: {
        brand: true, // Include the brand
        // Include the discounts
        productVariants: {
          include: {
            discount: true,
            productimage: true,
          },
        },
      },
      where: { id },
    });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }
  async displayProductByName({ name }) {
    try {
      if (!name) {
        throw new Error('something went wrong');
      }
      const product = await this.prisma.product.findMany({
        include: {
          brand: true,

          productVariants: {
            include: {
              discount: true,
              productimage: true,
            },
          },
        },
        where: { name },
      });
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return product; // Return the result.
    } catch (error) {
      throw new Error('something went wrong');
    }
  }
  async getCategory() {
    return this.prisma.category.findMany();
  }
  async getProductByCategory({ categoryName }) {
    try {
      // Find category by name
      const category = await this.prisma.category.findUnique({
        where: {
          name: categoryName, // Category name
        },
        select: {
          id: true, // Only select the id of the category
        },
      });

      // Handle case where category is not found
      if (!category) {
        console.error(`Category '${categoryName}' not found`);
        throw new Error('Category not found');
      }

      // Fetch products that belong to the found category
      const products = await this.prisma.product.findMany({
        where: {
          categoryId: category.id, // Filter products by the category id
        },
        include: {
          brand: true, // Include brand information
          productVariants: {
            include: {
              discount: true, // Include discount info
              productimage: true, // Include product images
            },
          },
        },
      });

      // Return the list of products
      console.log(
        `Fetched ${products.length} products for category ${categoryName}`,
      );
      return products;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products');
    }
  }

  // async getSortPrice({ min, max }) {
  //   try {
  //     const products = await this.prisma.product.findMany({
  //       include: {
  //         productVariants: {
  //           include: {
  //             discount: true,
  //           },
  //         },
  //       },
  //       where: {
  //         OR: [
  //           {
  //             productVariants: {
  //               some: {
  //                 discount: {
  //                   some: {
  //                     value: {
  //                       gte: min,
  //                       lte: max,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //           {
  //             productVariants: {
  //               some: {
  //                 price: {
  //                   gte: min,
  //                   lte: max,
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     });

  //     // Process the products to determine the actual price
  //     return products.map((product) => {
  //       let price = null;

  //       // Find the lowest price from product variants
  //       const variantPrices = product.productVariants.map((variant) => {
  //         // Check if variant has a discount
  //         if (variant.discount.length > 0) {
  //           return variant.discount[0].value; // Use discount value
  //         }
  //         return variant.price; // Otherwise, use regular price
  //       });

  //       // Get the minimum price among variants
  //       if (variantPrices.length > 0) {
  //         price = Math.min(...variantPrices);
  //       }

  //       return {
  //         ...product,
  //         finalPrice: price,
  //       };
  //     });
  //   } catch (error) {
  //     console.error('Error fetching sorted products:', error);
  //     throw error;
  //   }
  // }

  async getDiscountedProducts() {
    try {
      const productsWithDiscounts = await this.prisma.productVariants.findMany({
        where: {
          discount: {
            startDate: { lte: new Date() }, // Discount should have started
            endDate: { gte: new Date() }, // Discount should still be valid
          },
        },
        include: {
          product_fk: true, // Include the related product
          discount: true,
          productimage: true, // Include discount details
        },
      });

      return productsWithDiscounts;
    } catch (error) {
      console.error('Error fetching discounted products:', error);
      throw new Error('Could not fetch discounted products');
    }
  }

  async getOrderByCustomerName(firstName: string, lastName: string) {
    try {
      // Validate input
      if (!firstName || !lastName) {
        throw new Error('First name and last name are required.');
      }

      // Find customer
      const customer_row = await this.prisma.customer.findFirst({
        where: { firstName, lastName }, // ✅ Correct way
      });

      if (!customer_row) {
        throw new Error('Customer not found');
      }

      // Find orders related to the customer
      const orders = await this.prisma.order.findMany({
        where: { customerId: customer_row.id },
        include: {
          orderitem: {
            include: {
              productVariant: {
                include: { product_fk: true },
              },
            },
          },
        },
      });

      return orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw new Error(`Something went wrong: ${error}`);
    }
  }
  async displayBrand() {
    return await this.prisma.brand.findMany();
  }
}
