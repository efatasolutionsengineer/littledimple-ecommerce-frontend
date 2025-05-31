'use client';

import FilterIcon from "@/assets/icons/filter";
import CustomDatePicker from "@/shared/components/form/datepicker";
import SearchInput from "@/shared/components/form/search-input";
import Select from "@/shared/components/form/select";
import { useState } from "react";
import OrderTable from "./order.table";
import { Pagination } from "@/shared/components/pagination";

export const optionsOrderStatus = [
    { label: "All", value: "all" },
    { label: "Packing", value: "packing" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
]

const orders = [
    {
        orderId: "1234567890",
        createdAt: "2021-01-01",
        customer: "John Doe",
        priority: "High",
        total: 100000,
        payment_status: "paid",
        items: 1,
        delivery_number: "1234567890",
        order_status: "packing",
    },
    {
        orderId: "1234567890",
        createdAt: "2021-01-01",
        customer: "John Doe",
        priority: "High",
        total: 100000,
        payment_status: "unpaid",
        items: 1,
        delivery_number: "1234567890",
        order_status: "cancelled",
    },
    {
        orderId: "1234567890",
        createdAt: "2021-01-01",
        customer: "John Doe",
        priority: "High",
        total: 100000,
        payment_status: "paid",
        items: 1,
        delivery_number: "1234567890",
        order_status: "completed",
    },
]

export const OrderCard = () => {
    const [search, setSearch] = useState("");
    const [orderStatus, setOrderStatus] = useState("all");
    const [date, setDate] = useState<Date | null>(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handleChangeOrderStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrderStatus(e.target.value);
    }

    return <div className="bg-white rounded-lg p-4 shadow-md my-8">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 rounded-lg pb-4">
            <h3 className="text-lg font-bold">Order</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <SearchInput onChange={setSearch} />
                <Select icon={<FilterIcon />} options={optionsOrderStatus} onChange={handleChangeOrderStatus} defaultValue={orderStatus} />
                <CustomDatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <OrderTable orders={orders} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
}