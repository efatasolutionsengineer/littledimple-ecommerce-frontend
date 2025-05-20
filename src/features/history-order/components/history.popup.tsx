import { usePopSlide } from "@/providers/popslide-provider";
import { useGetOrderHistory } from "../hooks";
import { OrderHistory } from "../types";
import { ProductCard } from "./product.card"

export const HistoryPopup = () => {
    const { data: orderHistory, isLoading, isError, error } = useGetOrderHistory();
    const { closePopup } = usePopSlide();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>
            <div className='w-full flex items-center justify-between mb-8'>
                <h5 className='font-(family-name:--font-dm-sans) font-bold text-lg'>Order History</h5>
                <button className='size-[34px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.20)]' onClick={closePopup}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.8 14.75L3.75 13.7L7.95 9.5L3.75 5.3L4.8 4.25L9 8.45L13.2 4.25L14.25 5.3L10.05 9.5L14.25 13.7L13.2 14.75L9 10.55L4.8 14.75Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div>Error: {error.message}</div>
        </div>
    }

    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className='w-full flex items-center justify-between mb-8'>
                <h5 className='font-(family-name:--font-dm-sans) font-bold text-lg'>Order History</h5>
                <button className='size-[34px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.20)]' onClick={closePopup}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.8 14.75L3.75 13.7L7.95 9.5L3.75 5.3L4.8 4.25L9 8.45L13.2 4.25L14.25 5.3L10.05 9.5L14.25 13.7L13.2 14.75L9 10.55L4.8 14.75Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div className="overflow-y-auto flex-1">
                {JSON.stringify(orderHistory)}
                {orderHistory.data
                    ? orderHistory.data.map((item: OrderHistory, index: number) => (
                        <ProductCard key={index} data={item} />
                    ))
                    : <div>No items in cart</div>
                }
            </div>
        </div>
    )
}