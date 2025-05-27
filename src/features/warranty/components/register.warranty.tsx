import { useForm } from "react-hook-form"
import { WarrantySubmission } from "../types"
import { warrantySubmissionSchema } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import FormInput from "@/shared/components/form/form-input"

export default function RegisterWarranty() {
    const form = useForm<WarrantySubmission>({
        resolver: zodResolver(warrantySubmissionSchema),
    })

    const { register, handleSubmit, formState: { errors } } = form

    const onSubmit = (data: WarrantySubmission) => {
        console.log(data)
    }

    return (
        <div className="mt-16 max-w-[860px] w-full mx-auto">
            <h3
                className="font-schoolbell text-lg text-center text-primary mb-0"
            >Warranty</h3>
            <h4 className="mb-8 text-3xl text-center text-hijau-tua">Register Your Warranty Manually Here!</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="font-(family-name:--font-dm-sans)">
                <div className="grid grid-cols-2 gap-4">
                    <FormInput placeholder="Full Name" label={
                        <span>Name <span className="text-red-500">*</span></span>
                    } register={register} errors={errors} id="name" name="name" className="border-none" />
                    <FormInput placeholder="jhondoe@gmail.com" label={
                        <span>Email <span className="text-red-500">*</span></span>
                    } register={register} errors={errors} id="email" name="email" className="border-none" />
                    <FormInput placeholder="081234567890" label={
                        <span>Phone Number <span className="text-red-500">*</span></span>
                    } register={register} errors={errors} id="nohp" name="nohp" type="number" className="border-none" />
                    <FormInput placeholder="1234567890" label={
                        <span>Warranty Number <span className="text-red-500">*</span></span>
                    } register={register} errors={errors} id="warrantyNumber" name="code" className="border-none" />
                    <div className="col-span-2">
                        <div className="flex flex-col gap-1">
                            <label className="block">
                                <span>Attachment <span className="text-red-500">*</span></span>
                            </label>
                            <div className="flex items-center gap-3 w-full p-3 rounded-lg bg-neutral-white relative">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 22.5365C9.96667 22.5365 8.66667 22.0032 7.6 20.9365C6.53333 19.8698 6 18.5698 6 17.0365V6.5365C6 5.4365 6.39167 4.49483 7.175 3.7115C7.95833 2.92817 8.9 2.5365 10 2.5365C11.1 2.5365 12.0417 2.92817 12.825 3.7115C13.6083 4.49483 14 5.4365 14 6.5365V16.0365C14 16.7365 13.7583 17.3282 13.275 17.8115C12.7917 18.2948 12.2 18.5365 11.5 18.5365C10.8 18.5365 10.2083 18.2948 9.725 17.8115C9.24167 17.3282 9 16.7365 9 16.0365V6.5365H10.5V16.0365C10.5 16.3198 10.5958 16.5573 10.7875 16.749C10.9792 16.9407 11.2167 17.0365 11.5 17.0365C11.7833 17.0365 12.0208 16.9407 12.2125 16.749C12.4042 16.5573 12.5 16.3198 12.5 16.0365V6.5365C12.5 5.8365 12.2583 5.24483 11.775 4.7615C11.2917 4.27817 10.7 4.0365 10 4.0365C9.3 4.0365 8.70833 4.27817 8.225 4.7615C7.74167 5.24483 7.5 5.8365 7.5 6.5365V17.0365C7.5 18.1365 7.89167 19.0782 8.675 19.8615C9.45833 20.6448 10.4 21.0365 11.5 21.0365C12.6 21.0365 13.5417 20.6448 14.325 19.8615C15.1083 19.0782 15.5 18.1365 15.5 17.0365V6.5365H17V17.0365C17 18.5698 16.4667 19.8698 15.4 20.9365C14.3333 22.0032 13.0333 22.5365 11.5 22.5365Z" fill="#1D1B20" />
                                </svg>
                                <div className="flex-1">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        {...register("attachments", {
                                            onChange: (e) => {
                                                const files = e.target.files;
                                                if (files && files.length > 0) {
                                                    const fileNames = Array.from(files)
                                                        .map(file => (file as File).name)
                                                        .slice(0, 2)
                                                        .join(", ");
                                                    const remaining = files.length > 2 ? ` and ${files.length - 2} more...` : "";
                                                    e.target.parentElement.querySelector("p").textContent = fileNames + remaining;
                                                } else {
                                                    e.target.parentElement.querySelector("p").textContent = "Please upload picture of your receipt, barcode, and product";
                                                }
                                            }
                                        })}
                                        className="absolute opacity-0 inset-0 w-full h-full cursor-pointer"
                                    />
                                    <p className="text-gray-500">Please upload picture of your receipt, barcode, and product</p>
                                </div>
                            </div>
                            {errors.attachments && (
                                <p className="text-red-500 text-sm">
                                    {errors.attachments.message as string}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                        <label className="block">
                            <span>Description <span className="text-red-500">*</span></span>
                        </label>
                        <textarea
                            className="w-full p-3 rounded-lg bg-neutral-white focus:outline-none focus:ring-2 focus:ring-hijau-tua"
                            placeholder="hello world"
                            rows={4}
                            {...register("description")}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">
                                {errors.description.message as string}
                            </p>
                        )}
                    </div>
                    <div className="col-span-2 mt-4 text-center">
                        <button
                            type="submit"
                            className="font-bold bg-hijau-2 hover:bg-primary-hijau/90 text-white px-8 py-4 rounded-md w-auto"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
