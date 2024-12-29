import { useState } from 'react';

import { Product } from '@/types/product.types';

const useCart = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        console.log('product', product);
        // if (!cart.find((item) => item.id === product.id)) {
        setCart([...cart, product]);
        // }
    };
    const removeFromCart = (productId: number) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const isInCart = (productId: number) => cart.filter((item) => item.id === productId);

    return { cart, addToCart, isInCart, removeFromCart };
};

export default useCart;