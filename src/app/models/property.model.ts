// models/property.model.ts

export interface Property {
    _id?: string;
    title: string;
    description: string;
    image: string;
    contact: string;
    price: number;
    area: number;
    reviews?: Review[];
}

export interface Review {
    user: string;
    rating: number;
    comment: string;
}
