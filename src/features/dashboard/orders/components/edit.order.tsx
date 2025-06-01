
import { OrderFormType, OrderSchema } from "../types";
import { useForm, Resolver } from "react-hook-form";
import Select from "@/shared/components/form/select";
import { BasicInput } from "@/shared/components/form/basic-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicDatePicker } from "@/shared/components/form/basic-datepicker";
import { useCenterPopup } from "@/providers/centerpopup-provider";
import { toast } from "sonner";

const optionsOrderStatus = [
    { label: "Packing", value: "packing" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
]

export default function EditOrder({ order }: { order: OrderFormType }) {
    const { closePopup } = useCenterPopup();
    const form = useForm<OrderFormType>({
        resolver: zodResolver(OrderSchema) as Resolver<OrderFormType>,
        defaultValues: order,
    })

    const onSubmit = (data: OrderFormType) => {
        console.log(data)
        const timeout = setTimeout(() => {
            toast.success("Order updated successfully", {
                description: "Order updated successfully",
            })
            closePopup()
        }, 1000)
        return () => clearTimeout(timeout)
    }

    return <div className="font-(family-name:--font-dm-sans) max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold pt-4 pb-8 w-full bg-white sticky top-0 z-10">Form Order</h3>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
                <BasicInput label="Order ID" name="orderId" id="orderId" defaultValue={order.orderId} register={form.register} />
                <div>
                    <label htmlFor="createdAt" className="block mb-1">Date</label>
                    <BasicDatePicker selected={new Date(form.watch("createdAt"))} onChange={(date: Date | null) => form.setValue("createdAt", date?.toISOString() ?? "")} dateFormat="dd/MM/yyyy" />
                </div>
                <BasicInput label="History Name" name="customer" id="customer" defaultValue={order.customer} register={form.register} />
                <BasicInput label="Item" name="items" id="items" type="number" defaultValue={order.items} register={form.register} />
                <BasicInput label="Total" name="total" id="total" defaultValue={order.total} register={form.register} />
                <BasicInput label="Payment Method" name="payment_method" id="payment_method" defaultValue={order.payment_method} register={form.register} />
                <div>
                    <label htmlFor="payment_status" className="block mb-2">Payment Status</label>
                    <Select className="w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg" selectClassName="!outline-none !bg-gray-100 w-full !text-black !border-none" options={[
                        { label: "Paid", value: "paid" },
                        { label: "Unpaid", value: "unpaid" }
                    ]} defaultValue={order.payment_status} icon={<></>} onChange={(e) => {
                        form.setValue("payment_status", e.target.value)
                    }} />
                </div>
                <BasicInput label="Shipping" name="shipping" id="shipping" defaultValue={order.shipping} register={form.register} />
                <BasicInput label="Shipping No" name="shipping_no" id="shipping_no" defaultValue={order.shipping_no} register={form.register} />
                <BasicInput label="Voucher" name="voucher" id="voucher" defaultValue={order.voucher} register={form.register} />
                <BasicInput label="Invoice Number" name="invoice_number" id="invoice_number" defaultValue={order.invoice_number} register={form.register} />
                <BasicInput label="Receipt no" name="receipt_no" id="receipt_no" defaultValue={order.receipt_no} register={form.register} />
                <div className="col-span-3">
                    <label htmlFor="order_status" className="block mb-2">Order Status</label>
                    <Select className="w-full py-2 max-w-full" options={optionsOrderStatus} defaultValue={order.order_status} icon={<></>} onChange={(e) => {
                        form.setValue("order_status", e.target.value)
                    }} />
                </div>
            </div>
            <div className="pt-4 mt-8 border-t border-gray-200 flex justify-end">
                <div className="flex justify-end gap-4 w-full max-w-[300px]">
                    <button type="button" className="text-sm bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800 transition duration-300" onClick={() => closePopup()}>Cancel</button>
                    <button type="submit" className="text-sm bg-blue-400 text-white px-8 py-2 rounded-lg hover:bg-blue-800 transition duration-300" onClick={() => form.handleSubmit(onSubmit)}>Save</button>
                </div>
            </div>
        </form>
    </div>
}