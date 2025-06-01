'use client';

import FilterIcon from "@/assets/icons/filter";
import CustomDatePicker from "@/shared/components/form/datepicker";
import SearchInput from "@/shared/components/form/search-input";
import Select from "@/shared/components/form/select";
import { useState } from "react";
import ProductTable from "./product.table";
import { Pagination } from "@/shared/components/pagination";
import { Product } from "../types";

export const optionsOrderStatus = [
    { label: "All", value: "all" },
    { label: "Packing", value: "packing" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
]

const products: Product[] = [
    {
        id: "1",
        name: "Product 1",
        variant: "Variant 1",
        code: "1234567890",
        barcode: "1234567890",
        stock: 10,
        price: 100000,
        weight: 100,
        size: "100x100",
        label_1: "Label 1",
        label_2: "Label 2",
        description: "Description",
        more_info: "More Info",
        category: "Category",
        sold: 10,
        rating: 5,
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "2",
        name: "Product 2",
        variant: "Variant 2",
        code: "1234567890",
        barcode: "1234567890",
        stock: 10,
        price: 100000,
        weight: 100,
        size: "100x100",
        label_1: "Label 1",
        label_2: "Label 2",
        description: "Description",
        more_info: "More Info",
        category: "Category",
        sold: 10,
        rating: 5,
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "3",
        name: "Product 3",
        variant: "Variant 3",
        code: "1234567890",
        barcode: "1234567890",
        stock: 10,
        price: 100000,
        weight: 100,
        size: "100x100",
        label_1: "Label 1",
        label_2: "Label 2",
        description: "Description",
        more_info: "More Info",
        category: "Category",
        sold: 10,
        rating: 5,
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    }
]

export const ProductCard = () => {
    const [, setSearch] = useState("");
    const [productFilter, setProductFilter] = useState("all");
    const [date, setDate] = useState<Date | null>(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,] = useState(10);

    const handleChangeOrderStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductFilter(e.target.value);
    }

    return <div className="bg-white rounded-lg p-4 shadow-md my-8">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 rounded-lg pb-4">
            <h3 className="text-lg font-bold">Order</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <SearchInput onChange={setSearch} />
                <Select icon={<FilterIcon />} options={optionsOrderStatus} onChange={handleChangeOrderStatus} defaultValue={productFilter} />
                <CustomDatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <ProductTable products={products} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
}