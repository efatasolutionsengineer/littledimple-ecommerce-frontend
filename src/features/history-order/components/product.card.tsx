import { OrderHistory } from "../types"

export const ProductCard = ({
    data,
}: {
    data: OrderHistory,
}) => {
    return (
        <div className="grid grid-cols-3 mb-4 border-b border-[#D3D3D3] pb-4">
            <div className="flex items-center justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.media_link} alt={data.product_name} className="object-cover w-[77px] h-[77px] rounded-[5px] bg-gray-100" loading="lazy" />
            </div>
            <div className="col-span-2 flex items-start justify-between">
            <div className="w-full">
                <h1 className="text-[20px] mb-2">{data.product_name}</h1>
                <p className="mt-2 font-(family-name:--font-dm-sans) text-[16px] font-semibold">Rp {data.total_price.toLocaleString('id-ID')}</p>
            </div>

            </div>
        </div>
    )
}