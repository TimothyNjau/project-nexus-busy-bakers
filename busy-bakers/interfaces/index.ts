import { ReactNode } from "react";

export interface ReactComponentProps {
    children: ReactNode
}

export interface ProductProps {
    userId: number,
    name: string,
    category: string,
    price: number,
    description: string,
    imageURL: string
}
export interface ProductCardProps {
    product: ProductProps;
}