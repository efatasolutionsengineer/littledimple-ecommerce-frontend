import { usePopSlide } from "@/providers/popslide-provider";
import { useGetCart } from "../hooks";
import { CartItem } from "../types";
import { ProductCard } from "./product.card"

export const CartPopup = () => {
    const { data: cartItems, isLoading, isError, error } = useGetCart();
    const { closePopup } = usePopSlide();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className='w-full flex items-center justify-between pb-8 mb-8 border-b border-[#cccccc]'>
                <h5 className='font-(family-name:--font-dm-sans) font-bold text-lg'>Cart ({cartItems.data.length})</h5>
                <button className='size-[34px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.20)]' onClick={closePopup}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.8 14.75L3.75 13.7L7.95 9.5L3.75 5.3L4.8 4.25L9 8.45L13.2 4.25L14.25 5.3L10.05 9.5L14.25 13.7L13.2 14.75L9 10.55L4.8 14.75Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div className="overflow-y-auto flex-1">
                {cartItems.data
                    ? cartItems.data.map((item: CartItem, index: number) => (
                        <ProductCard key={index} data={item} quantity={item.quantity} />
                    ))
                    : <div>No items in cart</div>
                }
            </div>
            <div className="font-(family-name:--font-dm-sans) text-[16px] font-semibold pt-2">
                <div className="flex items-center justify-between pb-2 mb-5 border-b border-[#DBDBDB]">
                    <p>Subtotal</p>
                    <p>Rp {cartItems.data.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toLocaleString('id-ID')}</p>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <a href="/checkout" className="bg-hijau-tua text-white text-center px-4 py-2 rounded-lg w-full">Checkout
                    </a>
                    <button className="bg-black text-white px-4 py-2 rounded-lg w-full">View Cart
                    </button>
                </div>

            </div>
        </div>
    )
}