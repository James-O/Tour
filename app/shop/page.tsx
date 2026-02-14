'use client'
import React from 'react'
import useProducts from '@/components/hooks/useProducts'
import { Product } from '@/components/hooks/productType'
import { Loader } from 'lucide-react'
export default function Shop() {
    const { data, isPending, isError, error } = useProducts()

    if (isPending) {
        return <div>
            <Loader className='animate-spin text-gray-500 mx-auto mt-20' size={48} />
        </div>
    }
    if (isError) {
        return <div>Error:{error?.message}</div>
    }
    return (
        <div className='p-5 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
            data?.map((product:Product) => (
                <div key={product.id} className='border border-gray-100 p-4 flex flex-col items-center rounded-lg shadow-md'>
                    <img src={product.image} alt={product.title} className='w-40 h-40'/>
                    <h1 className='font-bold'>{product.title}</h1>
                    <h3 className='text-pink-950 font-bold'>${product.price}</h3>
                    <button className='mt-2 bg-blue-950 text-white p-2 rounded w-full'>Add to Cart</button>
                </div>
            ))
            }
        </div>
    )
}
