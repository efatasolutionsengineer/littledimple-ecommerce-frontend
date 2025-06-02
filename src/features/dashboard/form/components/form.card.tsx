'use client';

import FilterIcon from "@/assets/icons/filter";
import CustomDatePicker from "@/shared/components/form/datepicker";
import SearchInput from "@/shared/components/form/search-input";
import Select from "@/shared/components/form/select";
import { useState } from "react";
import FormTable from "./form.table";
import { Pagination } from "@/shared/components/pagination";
import { Form } from "../types";

export const optionsFilterData = [
    { label: "All", value: "all" },
    { label: "Name", value: "name" },
    { label: "Receipt Number", value: "receipt_number" },
    { label: "Phone Number", value: "phone_no" },
    { label: "Email", value: "email" },
    { label: "Address", value: "address" },
    { label: "Attachment", value: "attachment" },
    { label: "Description", value: "description" },
]

const forms: Form[] = [
    {
        id: "1",
        name: "Product 1",
        receipt_number: "1234567890",
        phone_no: "1234567890",
        email: "1234567890",
        address: "1234567890",
        attachment: "1234567890",
        description: "Description",
        notes: "Notes rq",
        created_at: "2021-01-01",
    },
    {
        id: "2",
        name: "Product 2",
        receipt_number: "1234567890",
        phone_no: "1234567890",
        email: "1234567890",
        address: "1234567890",
        attachment: "1234567890",
        description: "Description",
        notes: "Notes er2",
        created_at: "2021-01-01",
    },
    {
        id: "3",
        name: "Product 3",
        receipt_number: "1234567890",
        phone_no: "1234567890",
        email: "1234567890",
        address: "1234567890",
        attachment: "1234567890",
        description: "Description",
        notes: "Notes",
        created_at: "2021-01-01",
    }
]

export const FormCard = () => {
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
            <h3 className="text-lg font-bold">Product</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <SearchInput onChange={setSearch} />
                <Select icon={<FilterIcon />} options={optionsFilterData} onChange={handleChangeOrderStatus} defaultValue={productFilter} />
                <CustomDatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <FormTable forms={forms} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
}