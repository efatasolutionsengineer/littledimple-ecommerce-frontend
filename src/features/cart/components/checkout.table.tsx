import { CartItem } from "../types";

export default function CheckoutTable({ data }: { data: CartItem[] }) {
    return (
        <table className="w-full text-hijau-tua mb-10">
            <thead>
                <tr className="border-b border-gray-200">
                    <th className="text-left py-4 w-[40%]">Item</th>
                    <th className="text-left py-4">Price</th>
                    <th className="text-left py-4">Quantity</th>
                    <th className="text-left py-4">Subtotal</th>
                    <th className="text-left py-4 w-[10%]">Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item: CartItem) => (
                        <tr key={item.id} className="border-b border-gray-200">
                            <td className="py-4 w-[40%] flex gap-5 items-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.media_link}
                                    alt={item.product_name}
                                    className="w-[100px] h-[100px] object-cover rounded-md"
                                />
                                {item.product_name}</td>
                            <td className="py-4 text-left font-(family-name:--font-dm-sans)">
                                {item.price}</td>
                            <td className="py-4 text-left font-(family-name:--font-dm-sans)">{item.quantity}</td>
                            <td className="py-4 text-left font-(family-name:--font-dm-sans)">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</td>
                            <td className="py-4 text-right w-[10%]">
                                <button className="hover:bg-red-500/20">
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.8 14.75L3.75 13.7L7.95 9.5L3.75 5.3L4.8 4.25L9 8.45L13.2 4.25L14.25 5.3L10.05 9.5L14.25 13.7L13.2 14.75L9 10.55L4.8 14.75Z" fill="var(--hijau-tua)" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}