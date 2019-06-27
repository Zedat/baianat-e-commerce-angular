import { Injectable } from '@angular/core';

export interface Product {
    id: string;
    categoryId: string;
    categoryName: string;
    title: string;
    price: number;
    isSpecial: boolean;
    desc: string;
    imageS: string;
    imageL: string;
}

@Injectable()
export class ProductService {
    private products: Array<Product> = [
        // Bakery
        { id: '1', categoryId: '1', categoryName: 'Bakery', title: 'Baguette/French Bread', price: 1.5, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '2', categoryId: '1', categoryName: 'Bakery', title: 'Croissants', price: 0.5, isSpecial: true, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        // Takeaway
        { id: '3', categoryId: '2', categoryName: 'Takeaway', title: 'Pizza', price: 1.2, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        // Dairy
        { id: '4', categoryId: '3', categoryName: 'Dairy', title: 'Milk', price: 1.7, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '5', categoryId: '3', categoryName: 'Dairy', title: 'Cream Cheese', price: 2.35, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        // Meat
        { id: '6', categoryId: '4', categoryName: 'Meat', title: 'Pork Tenderloin', price: 5.60, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '7', categoryId: '4', categoryName: 'Meat', title: 'Ribs, Baby Back', price: 4.85, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '8', categoryId: '4', categoryName: 'Meat', title: 'Ground Beef', price: 9.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        // Seafood
        { id: '9', categoryId: '5', categoryName: 'SeaFood', title: 'Tuna', price: 3.45, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '10', categoryId: '5', categoryName: 'SeaFood', title: 'Salmon', price: 4.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '11', categoryId: '5', categoryName: 'SeaFood', title: 'Oysters', price: 7.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '12', categoryId: '5', categoryName: 'SeaFood', title: 'Scalops', price: 2.70, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        // Fruit & Veg
        { id: '13', categoryId: '6', categoryName: 'Fruit & Veg', title: 'Banana', price: 1.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '14', categoryId: '6', categoryName: 'Fruit & Veg', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '15', categoryId: '6', categoryName: 'Fruit & Veg', title: 'Apple', price: 0.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '16', categoryId: '6', categoryName: 'Fruit & Veg', title: 'Lemon', price: 3.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '17', categoryId: '6', categoryName: 'Fruit & Veg', title: 'Pear', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        // Hot Drinks
        { id: '18', categoryId: '7', categoryName: 'Hot Drinks', title: 'Banana', price: 1.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '19', categoryId: '7', categoryName: 'Hot Drinks', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '20', categoryId: '7', categoryName: 'Hot Drinks', title: 'Apple', price: 0.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '21', categoryId: '7', categoryName: 'Hot Drinks', title: 'Lemon', price: 3.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '22', categoryId: '7', categoryName: 'Hot Drinks', title: 'Pear', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        // Fresh Drinks
        { id: '23', categoryId: '8', categoryName: 'Fresh Drinks', title: 'Banana', price: 1.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171',  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '24', categoryId: '8', categoryName: 'Fresh Drinks', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '25', categoryId: '8', categoryName: 'Fresh Drinks', title: 'Apple', price: 0.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '26', categoryId: '8', categoryName: 'Fresh Drinks', title: 'Lemon', price: 3.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        { id: '27', categoryId: '8', categoryName: 'Fresh Drinks', title: 'Pear', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        // Cocktails
        { id: '28', categoryId: '9', categoryName: 'Cocktails', title: 'Banana', price: 1.55, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171',  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '29', categoryId: '9', categoryName: 'Fresh Drinks', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '30', categoryId: '9', categoryName: 'Fresh Drinks', title: 'Apple', price: 0.80, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '31', categoryId: '9', categoryName: 'Fresh Drinks', title: 'Lemon', price: 3.20, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { id: '32', categoryId: '9', categoryName: 'Fresh Drinks', title: 'Pear', price: 4.25, isSpecial: false, imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' }
    ];

    getProducts(category?: string, search?: string) {
        if (category) {
            return this.products.filter(
                (product: Product, index: number, array: Product[]) => {
                    return product.categoryId === category;
                }
            );
        } else if (search) {
            let lowSearch = search.toLowerCase();
            return this.products.filter(
                (product: Product, index: number, array: Product[]) => {
                    return product.title
                                  .toLowerCase()
                                  .indexOf(lowSearch) != -1;
                }
            );
        } else {
            return this.products;
        }
    }

    getProduct(id: string): Product {
        for (let i = 0; this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
    }

}
