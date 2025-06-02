import { FormFormType, FormSchema } from "../types";
import { useForm, Resolver } from "react-hook-form";
import { BasicInput } from "@/shared/components/form/basic-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCenterPopup } from "@/providers/centerpopup-provider";
import { toast } from "sonner";

export default function EditForm({ form: formData }: { form: FormFormType }) {
    const { closePopup } = useCenterPopup();
    const form = useForm<FormFormType>({
        resolver: zodResolver(FormSchema) as Resolver<FormFormType>,
        defaultValues: formData,
    })

    const onSubmit = (data: FormFormType) => {
        console.log(data)
        const timeout = setTimeout(() => {
            toast.success("Order updated successfully", {
                description: "Order updated successfully",
            })
            closePopup()
        }, 1000)
        return () => clearTimeout(timeout)
    }

    return <div className="font-(family-name:--font-dm-sans) max-h-[90vh] overflow-y-auto px-1">
        <h3 className="text-2xl font-bold pt-4 pb-8 w-full bg-white sticky top-0 z-10">Form Admin</h3>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mb-4">
                <BasicInput label="Name" name="name" id="name" defaultValue={formData.name} register={form.register} />
                <BasicInput label="Receipt Number" name="receipt_number" id="receipt_number" defaultValue={formData.receipt_number} register={form.register} />
                <BasicInput label="Phone Number" name="phone_no" id="phone_no" defaultValue={formData.phone_no} register={form.register} />
                <BasicInput label="Email" name="email" id="email" defaultValue={formData.email} register={form.register} />
                <BasicInput containerClassName="col-span-2" label="Address" name="address" id="address" defaultValue={formData.address} register={form.register} />
                <div className="col-span-2">
                    <label htmlFor="description" className="block mb-2">Description</label>
                    <textarea className="p-4 w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg" {...form.register("description")} placeholder="Description" rows={4} />
                </div>
                <div className="col-span-2">
                    <label htmlFor="notes" className="block mb-2">Notes</label>
                    <textarea className="p-4 w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg" {...form.register("notes")} placeholder="Notes" rows={4} />
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