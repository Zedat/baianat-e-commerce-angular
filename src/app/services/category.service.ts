import { Injectable } from '@angular/core';

export class Category {
    id: string;
    title: string;
    desc: string;
    image: string;
}

@Injectable()
export class CategoryService {

    categories: Array<Category> = [
        { 
            id: '1', 
            title: 'Bakery', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '2', 
            title: 'Takeaway', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '3', 
            title: 'Dairy', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '4', 
            title: 'Meat', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' 
        },
        { 
            id: '5', 
            title: 'Seafood', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '6', 
            title: 'Fruit & Veg', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '7', 
            title: 'Hot Drinks', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '8', 
            title: 'Fresh Drinks', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { 
            id: '9', 
            title: 'Cocktails', 
            image: 'http://placehold.it/270x171', 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
    ];

    getCategories(): Array<Category> {
        return this.categories;
    }

    getCategory(id: string): Category {
        let category = this.categories.filter(
            category => category.id === id
        );
        return category[0];
        throw new CategoryNotFoundException(`Category ${id} not found`);
    }
}


export class CategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}