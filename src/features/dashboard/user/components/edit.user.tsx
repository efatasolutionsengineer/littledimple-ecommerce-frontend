import { UserFormType, UserSchema } from "../types";
import { useForm, Resolver } from "react-hook-form";
import { BasicInput } from "@/shared/components/form/basic-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCenterPopup } from "@/providers/centerpopup-provider";
import { toast } from "sonner";
import Select from "@/shared/components/form/select";
import { BasicDatePicker } from "@/shared/components/form/basic-datepicker";

const userRoleOptions = [{
    label: 'Manager',
    value: 'manager',
},
{
    label: 'Staff',
    value: 'staff',
},
{
    label: 'Admin',
    value: 'admin',
}]

export default function EditUser({ user }: { user: UserFormType }) {
    const { closePopup } = useCenterPopup();
    const form = useForm<UserFormType>({
        resolver: zodResolver(UserSchema) as Resolver<UserFormType>,
        defaultValues: user,
    })

    const onSubmit = (data: UserFormType) => {
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
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mb-4">
                <div className="col-span-3 flex flex-col sm:flex-row gap-4">
                    <div>
                        <label htmlFor="nominal_percentage" className="block mb-1">Role</label>
                        <Select
                            className="w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg"
                            selectClassName="!outline-none !bg-white w-full !text-black !border-none"
                            options={userRoleOptions}
                            defaultValue='manager'
                            icon={<></>}
                        />
                    </div>
                    <BasicInput className="bg-white" label="Phone No" name="phone_number" id="phone_number" defaultValue={user.phone_number} register={form.register} />
                </div>
                <BasicInput className="bg-white" label="Email" name="email" id="email" type="email" defaultValue={user.email} register={form.register} />
                <div>
                    <label htmlFor="nominal_percentage" className="block mb-1">Gender</label>
                    <Select
                        className="w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg"
                        selectClassName="!outline-none !bg-white w-full !text-black !border-none"
                        options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
                        defaultValue='male'
                        icon={<></>}
                    />
                </div>
                <div>
                    <label htmlFor="end_date" className="block mb-1">Birth of Day</label>
                    <BasicDatePicker containerClassName="bg-white" className="bg-white" selected={form.watch("birthday") ? new Date(form.watch("birthday")) : null} onChange={(date: Date | null) => form.setValue("birthday", date?.toISOString() ?? "")} dateFormat="dd/MM/yyyy" />
                </div>
                <div className="col-span-3">
                    <label htmlFor="address" className="block mb-2">Address</label>
                    <textarea id="address" className="p-4 w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg" {...form.register("address")} placeholder="Address" rows={4} />
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