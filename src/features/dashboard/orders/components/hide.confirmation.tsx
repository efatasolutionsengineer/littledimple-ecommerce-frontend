import { useCenterPopup } from "@/providers/centerpopup-provider";
import { Order } from "../types";

export const HideConfirmation = ({ order, onChange }: { order: Order, onChange: (hide: boolean) => void }) => {
    const { closePopup } = useCenterPopup();
    const handleCancel = () => {
        closePopup()
    }
    const handleChangeHide = () => {
        onChange(!order.hide)
        closePopup()
    }

    return <div className="flex flex-col items-center justify-center gap-2 font-(family-name:--font-dm-sans)">
        <h3 className="text-2xl font-bold pt-4 w-full bg-white sticky top-0 z-10 text-center">{order?.hide ? 'Show' : 'Hide'} Confirmation</h3>
        <p className="text-sm text-gray-500 mb-6">Are you sure you want to {order?.hide ? 'show' : 'hide'} this order?</p>
        <div className="flex justify-end gap-4 w-full">
            <button className="w-full bg-blue-400 text-sm text-white px-8 py-2 rounded-lg hover:bg-blue-800 transition duration-300" onClick={handleCancel}>Cancel</button>
            <button className="w-full bg-red-400 text-sm text-white px-8 py-2 rounded-lg hover:bg-red-800 transition duration-300" onClick={handleChangeHide}>Yes, {order?.hide ? 'Show' : 'Hide'}</button>
        </div>
    </div>
}