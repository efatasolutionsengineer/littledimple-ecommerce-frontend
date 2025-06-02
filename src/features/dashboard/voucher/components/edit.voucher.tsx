import { VoucherSchema, VoucherFormType } from "../types";
import { useForm, Resolver } from "react-hook-form";
import Select from "@/shared/components/form/select";
import { BasicInput } from "@/shared/components/form/basic-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCenterPopup } from "@/providers/centerpopup-provider";
import { toast } from "sonner";
import { useState } from "react";
import { BasicDatePicker } from "@/shared/components/form/basic-datepicker";

const specificUserOptions = [
    { label: "Joko", value: "joko" },
    { label: "Budi", value: "budi" },
    { label: "Ani", value: "ani" },
    { label: "Siti", value: "siti" },
    { label: "Dedi", value: "dedi" },
    { label: "Eko", value: "eko" },
    { label: "Fajar", value: "fajar" },
]

const nominalOrPercentageOptions = [
    { label: "Nominal", value: "nominal" },
    { label: "Percent", value: "percentage" },
]

export default function EditVoucher({ voucher }: { voucher: VoucherFormType }) {
    const { closePopup } = useCenterPopup();
    const [isPercentage, setIsPercentage] = useState(Boolean(voucher.percentage));
    const [nominalPercentage, setNominalPercentage] = useState({
        nominal: isPercentage ? 0 : voucher.nominal,
        percentage: isPercentage ? voucher.percentage || 0 : 0,
    });
    const [previousValues, setPreviousValues] = useState({
        nominal: voucher.nominal,
        percentage: voucher.percentage || 0,
    });

    const form = useForm<VoucherFormType>({
        resolver: zodResolver(VoucherSchema) as Resolver<VoucherFormType>,
        defaultValues: voucher,
    })

    const onSubmit = (data: VoucherFormType) => {
        console.log(data)
        const timeout = setTimeout(() => {
            toast.success("Voucher updated successfully", {
                description: "Voucher updated successfully",
            })
            closePopup()
        }, 1000)
        return () => clearTimeout(timeout)
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newIsPercentage = e.target.value === "percentage";

        if (newIsPercentage !== isPercentage) {
            // Store current values before switching
            setPreviousValues({
                nominal: nominalPercentage.nominal,
                percentage: nominalPercentage.percentage,
            });

            // Update state based on new type
            if (newIsPercentage) {
                setNominalPercentage(prev => ({
                    ...prev,
                    nominal: 0,
                    percentage: previousValues.percentage || 0
                }));
            } else {
                setNominalPercentage(prev => ({
                    ...prev,
                    nominal: previousValues.nominal || 0,
                    percentage: 0
                }));
            }
        }

        setIsPercentage(newIsPercentage);
    };

    return <div className="font-(family-name:--font-dm-sans) max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold pt-4 pb-8 w-full bg-white sticky top-0 z-1">Form Voucher</h3>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                    <label htmlFor="nominal_percentage" className="block mb-1">Nominal/Percent</label>
                    <Select
                        className="w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg"
                        selectClassName="!outline-none !bg-gray-100 w-full !text-black !border-none"
                        options={nominalOrPercentageOptions}
                        defaultValue={isPercentage ? "percentage" : "nominal"}
                        icon={<></>}
                        onChange={handleTypeChange}
                    />
                </div>
                <BasicInput
                    label="Percent (%)"
                    name="percentage"
                    id="percentage"
                    defaultValue={voucher.percentage || 0}
                    value={nominalPercentage.percentage}
                    type="number"
                    disabled={!isPercentage}
                    register={form.register}
                    onChange={(e) => {
                        setNominalPercentage(prev => ({
                            ...prev,
                            percentage: Number(e.target.value)
                        }))
                    }} />
                <BasicInput
                    label="Nominal"
                    name="nominal"
                    id="nominal"
                    defaultValue={voucher.nominal}
                    value={nominalPercentage.nominal}
                    isCurrency={true}
                    disabled={isPercentage}
                    register={form.register}
                    onChange={(e) => {
                        setNominalPercentage(prev => ({
                            ...prev,
                            nominal: Number(e.target.value)
                        }))
                    }} />
                <BasicInput label="Min. Purchase" name="min_purchase" id="min_purchase" defaultValue={voucher.min_purchase} register={form.register} />
                <div>
                    <label htmlFor="start_date" className="block mb-1">Start Date</label>
                    <BasicDatePicker selected={new Date(form.watch("start_date"))} onChange={(date: Date | null) => form.setValue("start_date", date?.toISOString() ?? "")} dateFormat="dd/MM/yyyy" />
                </div>
                <div>
                    <label htmlFor="end_date" className="block mb-1">End Date</label>
                    <BasicDatePicker selected={new Date(form.watch("end_date"))} onChange={(date: Date | null) => form.setValue("end_date", date?.toISOString() ?? "")} dateFormat="dd/MM/yyyy" />
                </div>
                <div className="col-span-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full">
                        <label htmlFor="specific_user" className="block mb-1">Specific User</label>
                        <Select
                            className="w-full py-2 max-w-full !bg-white border border-gray-300 rounded-lg"
                            selectClassName="!outline-none !bg-white w-full !text-black !border-none"
                            options={specificUserOptions}
                            defaultValue={voucher.specific_user || ""}
                            icon={<></>}
                            onChange={(e) => {
                                form.setValue("specific_user", e.target.value)
                            }}
                        />
                    </div>
                    <BasicInput containerClassName="w-full" className="bg-white" label="Qty" name="qty" id="qty" type="number" defaultValue={voucher.qty} register={form.register} />
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