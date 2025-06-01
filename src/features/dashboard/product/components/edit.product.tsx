import { ProductSchema, ProductFormType } from "../types";
import { useForm, Resolver } from "react-hook-form";
import Select from "@/shared/components/form/select";
import { BasicInput } from "@/shared/components/form/basic-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCenterPopup } from "@/providers/centerpopup-provider";
import { toast } from "sonner";

const labelOptions = [
    { label: "Hot", value: "hot" },
    { label: "Latest", value: "latest" },
    { label: "Best Seller", value: "best_seller" },
    { label: "New", value: "new" },
]

export default function EditProduct({ product }: { product: ProductFormType }) {
    const { closePopup } = useCenterPopup();
    const form = useForm<ProductFormType>({
        resolver: zodResolver(ProductSchema) as Resolver<ProductFormType>,
        defaultValues: product,
    })

    const onSubmit = (data: ProductFormType) => {
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
        <h3 className="text-2xl font-bold pt-4 pb-8 w-full bg-white sticky top-0 z-10">Form Product</h3>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mb-4">
                <BasicInput label="Product Name" name="name" id="name" defaultValue={product.name} register={form.register} />
                <BasicInput label="Product Variant" name="variant" id="variant" defaultValue={product.variant} register={form.register} />
                <BasicInput label="Product Code" name="code" id="code" defaultValue={product.code} register={form.register} />
                <BasicInput label="Product Barcode" name="barcode" id="barcode" defaultValue={product.barcode} register={form.register} />
                <BasicInput label="Product Stock" name="stock" id="stock" defaultValue={product.stock} register={form.register} />
                <BasicInput label="Product Price" name="price" id="price" defaultValue={product.price} register={form.register} />
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mb-4">
                <BasicInput label="Product Weight" name="weight" id="weight" defaultValue={product.weight} register={form.register} />
                <BasicInput label="Product Size" name="size" id="size" defaultValue={product.size} register={form.register} />
                <div>
                    <label htmlFor="label_1" className="block mb-2">Label 1</label>
                    <Select
                        className="w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg"
                        selectClassName="!outline-none !bg-gray-100 w-full !text-black !border-none"
                        options={labelOptions.filter(opt => opt.value !== form.watch("label_2"))}
                        defaultValue={product.label_1}
                        icon={<></>}
                        onChange={(e) => {
                            form.setValue("label_1", e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="label_2" className="block mb-2 font-medium">Label 2</label>
                    <Select
                        className="w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg"
                        selectClassName="!outline-none !bg-gray-100 w-full !text-black !border-none"
                        options={labelOptions.filter(opt => opt.value !== form.watch("label_1"))}
                        defaultValue={product.label_2}
                        icon={<></>}
                        onChange={(e) => {
                            form.setValue("label_2", e.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block mb-2">Description</label>
                <textarea className="p-4 w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg" {...form.register("description")} placeholder="Description" />
            </div>
            <div>
                <label htmlFor="more_info" className="block mb-2">More Info</label>
                <textarea className="p-4 w-full py-2 max-w-full !bg-gray-100 border border-gray-300 rounded-lg" {...form.register("more_info")} placeholder="More Info" />
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