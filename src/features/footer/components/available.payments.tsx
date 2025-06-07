import { HomeAvailablePayment } from "@/features/home/types"
import { LoadDataUntilReady } from "@/shared/components/load.data.until.ready"

export const AvailablePayments = ({ data, isLoading }: { data?: HomeAvailablePayment[], isLoading: boolean }) => {
    return (
        <div className="text-white w-full sm:w-auto">
            <h3 className="text-[24px] mb-5">Available Payment Options</h3>
            <div className="grid grid-cols-3 gap-4">
                <LoadDataUntilReady
                    isLoading={isLoading}
                    placeholder={
                        <>
                            <div className="size-[76px] flex items-center justify-center rounded-lg bg-white hover:shadow-lg transition-all duration-300 animate-pulse" />
                            <div className="size-[76px] flex items-center justify-center rounded-lg bg-white hover:shadow-lg transition-all duration-300 animate-pulse" />
                            <div className="size-[76px] flex items-center justify-center rounded-lg bg-white hover:shadow-lg transition-all duration-300 animate-pulse" />
                            <div className="size-[76px] flex items-center justify-center rounded-lg bg-white hover:shadow-lg transition-all duration-300 animate-pulse" />
                        </>
                    }
                >
                    {
                        data?.sort((a, b) => a.sort_order - b.sort_order).map((item: HomeAvailablePayment) => (
                            <AvailablePaymentsCard key={item.name} data={item} />
                        ))
                    }
                </LoadDataUntilReady>
            </div>
        </div>
    )
}

const AvailablePaymentsCard = ({ data }: { data: HomeAvailablePayment }) => {
    return (
        <div className="size-[76px] flex items-center justify-center rounded-lg bg-white hover:shadow-lg transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.logo} alt={data.name} width={64} className="font-poppins text-black text-sm" />
        </div>
    )
}