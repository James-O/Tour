'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Product } from './productType'

export default function useProducts() {
    const fetchProducts = async (): Promise<Product[]> => {
        const products = await fetch('https://fakestoreapi.com/products')
        const data = await products.json();
        return data;
    }

    const { data, isPending, isError, error } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
    return {
        data,
        isError,
        isPending,
        error
    }
}
