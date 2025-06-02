'use client';

import FilterIcon from "@/assets/icons/filter";
import CustomDatePicker from "@/shared/components/form/datepicker";
import SearchInput from "@/shared/components/form/search-input";
import Select from "@/shared/components/form/select";
import { useState } from "react";
import VoucherTable from "./voucher.table";
import { Pagination } from "@/shared/components/pagination";
import { Voucher } from "../types";

export const optionsVoucher = [
    { label: "All", value: "all" },
    { label: "Kode Voucher", value: "code" },
    { label: "Nominal", value: "nominal" },
    { label: "Min. Purchase", value: "min_purchase" },
    { label: "Start Date", value: "start_date" },
    { label: "End Date", value: "end_date" },
    { label: "Specific User", value: "specific_user" },
    { label: "Qty", value: "qty" },
]

const vouchers: Voucher[] = [
    {
        code: "1234567890",
        nominal: 100000,
        percentage: 10,
        min_purchase: 100000,
        start_date: "2021-01-01",
        end_date: "2021-01-01",
        specific_user: "1234567890",
        qty: 10,
    },
    {
        code: "1234567890",
        nominal: 100000,
        percentage: 10,
        min_purchase: 100000,
        start_date: "2021-01-01",
        end_date: "2021-01-01",
        specific_user: "1234567890",
        qty: 10,
    },
    {
        code: "1234567890",
        nominal: 100000,
        percentage: 10,
        min_purchase: 100000,
        start_date: "2021-01-01",
        end_date: "2021-01-01",
        specific_user: "1234567890",
        qty: 10,
    },
    {
        code: "1234567890",
        nominal: 100000,
        percentage: 10,
        min_purchase: 100000,
        start_date: "2021-01-01",
        end_date: "2021-01-01",
        specific_user: "1234567890",
        qty: 10,
    }
]

export const VoucherCard = () => {
    const [, setSearch] = useState("");
    const [voucherFilter, setVoucherFilter] = useState("all");
    const [date, setDate] = useState<Date | null>(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,] = useState(10);

    const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVoucherFilter(e.target.value);
    }

    return <div className="bg-white rounded-lg p-4 shadow-md my-8">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 rounded-lg pb-4">
            <h3 className="text-lg font-bold">Voucher</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <SearchInput onChange={setSearch} />
                <Select icon={<FilterIcon />} options={optionsVoucher} onChange={handleChangeFilter} defaultValue={voucherFilter} />
                <CustomDatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <VoucherTable vouchers={vouchers} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
}