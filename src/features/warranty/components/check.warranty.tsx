'use client'

import { toast } from "sonner"
import { useGetWarranty } from "../hooks"
import { CheckWarrantyType } from "../types"
import { checkWarrantySchema } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function CheckWarranty({ onChecked }: { onChecked: (isValid: boolean) => void }) {
    const form = useForm<CheckWarrantyType>({
        resolver: zodResolver(checkWarrantySchema),
    })

    const { register, handleSubmit, formState: { errors } } = form

    const { mutate, isPending } = useGetWarranty()

    const onSubmit = (data: CheckWarrantyType) => {
        mutate(data, {
            onSuccess: (data) => {
                toast.success(data.isValid ? 'Warranty found' : 'Warranty not found')
                onChecked(data.isValid)
            },
            onError: (error) => {
                toast.error(error.message)
                onChecked(false)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[860px] w-full mx-auto">
            <input
                type="text"
                placeholder="input No Uniqe Barang"
                {...register("code")}
                className="placeholder:text-neutral-gray w-full bg-neutral-1 text-neutral-gray px-8 py-4 font-medium rounded-md font-(family-name:--font-dm-sans)" />
            {errors.code && <p className="text-red-500 font-(family-name:--font-dm-sans) text-sm">{errors.code.message}</p>}
            <button
                type="submit"
                disabled={isPending}
                className="mt-4 font-(family-name:--font-dm-sans) font-bold bg-hijau-2 hover:bg-primary-hijau/90 text-white px-8 py-4 rounded-md w-full"
            >
                {isPending ? 'Checking...' : 'Submit'}
            </button>
        </form>
    )
}