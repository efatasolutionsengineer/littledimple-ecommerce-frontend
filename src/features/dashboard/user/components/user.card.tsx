'use client';

import FilterIcon from "@/assets/icons/filter";
import CustomDatePicker from "@/shared/components/form/datepicker";
import SearchInput from "@/shared/components/form/search-input";
import Select from "@/shared/components/form/select";
import { useState } from "react";
import { Pagination } from "@/shared/components/pagination";
import { User } from "../types";
import UserTable from "./user.table";

export const optionsFilterData = [
    { label: "All", value: "all" },
    { label: "Name", value: "name" },
    { label: "Email", value: "email" },
    { label: "Phone Number", value: "phone_number" },
    { label: "Gender", value: "gender" },
    { label: "Birthday", value: "birthday" },
    { label: "Address", value: "address" },
]

const users: User[] = [
    {
        id: "1",
        role: "Admin",
        name: "Jhon Em",
        email: "jhon@gmail.com",
        phone_number: "081234567890",
        gender: "Male",
        birthday: "12/08/1990",
        address: "Jl. Raya No. 123",
    },
    {
        id: "2",
        role: "Admin",
        name: "Malik Surya",
        email: "malik@gmail.com",
        phone_number: "081234567890",
        gender: "Male",
        birthday: "12/04/1990",
        address: "Jl. Raya No. 123",
    },
    {
        id: "3",
        role: "Admin",
        name: "Malik Surya",
        email: "malik@gmail.com",
        phone_number: "081234567890",
        gender: "Male",
        birthday: "12/08/1990",
        address: "Jl. Raya No. 123",
    },
    {
        id: "4",
        role: "Admin",
        name: "Korin",
        email: "korin@gmail.com",
        phone_number: "081234567890",
        gender: "Male",
        birthday: "12/08/1990",
        address: "Jl. Raya No. 123",
    }
]

export const UserCard = () => {
    const [, setSearch] = useState("");
    const [userFilter, setUserFilter] = useState("all");
    const [date, setDate] = useState<Date | null>(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,] = useState(10);

    const handleChangeOrderStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserFilter(e.target.value);
    }

    return <div className="bg-white rounded-lg p-4 shadow-md my-8">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 rounded-lg pb-4">
            <h3 className="text-lg font-bold">User</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2">
                <SearchInput onChange={setSearch} />
                <Select icon={<FilterIcon />} options={optionsFilterData} onChange={handleChangeOrderStatus} defaultValue={userFilter} />
                <CustomDatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <UserTable users={users} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
}