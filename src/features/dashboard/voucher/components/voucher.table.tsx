'use client'

import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    SortingState,
    ColumnDef,
    HeaderGroup,
    Row,
    Cell,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Voucher } from '../types';
import { useCenterPopup } from '@/providers/centerpopup-provider';
import { HideConfirmation } from './hide.confirmation';
import { DeleteConfirmation } from './delete.confirmation';
import EditVoucher from './edit.voucher';

interface VoucherTableProps {
    vouchers: Voucher[];
}

export default function VoucherTable({ vouchers }: VoucherTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const { openPopup } = useCenterPopup();

    const columns: ColumnDef<Voucher>[] = [
        {
            accessorKey: 'code',
            header: 'Kode Voucher',
        },
        {
            accessorKey: 'nominal',
            header: 'Nominal',
            cell: ({ row }) => {
                return <div className="flex items-center justify-center gap-2">
                    <span className="text-sm">Rp. {row.original.nominal.toLocaleString('id-ID')}</span>
                </div>
            },
        },
        {
            accessorKey: 'percentage',
            header: 'Percent (%)',
            cell: ({ row }) => {
                return <div className="tetx-center">
                    {row.original.percentage ? <span className="text-sm mb-1 text-black font-semibold">{row.original.percentage} %</span> : <span className="text-sm mb-1 text-black font-semibold">0 %</span>}
                </div>
            },
        },
        {
            accessorKey: 'min_purchase',
            header: 'Min. Purchase',
            cell: ({ row }) => {
                return <div className="flex items-center justify-center gap-2">
                    <span className="text-sm">Rp. {row.original.min_purchase.toLocaleString('id-ID')}</span>
                </div>
            },
        },
        {
            accessorKey: 'start_date',
            header: 'Start Date',
            cell: ({ row }) => {
                return (
                    <div className="flex items-center gap-2">
                        {new Date(row.original.start_date).toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </div>
                );
            },
        },
        {
            accessorKey: 'end_date',
            header: 'End Date',
            cell: ({ row }) => {
                return (
                    <div className="flex items-center gap-2">
                        {new Date(row.original.end_date).toLocaleDateString('id-ID', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </div>
                );
            },
        },
        {
            accessorKey: 'specific_user',
            header: 'Specific User',
        },
        {
            accessorKey: 'action',
            header: 'Action',
            cell: ({ row }) => (
                <div className="flex items-center justify-center gap-2">
                    <button
                        className="p-2 bg-[#F4F9FF] rounded border border-[#F4F9FF] hover:border-[#3D6FAA]"
                        onClick={() => openPopup(<HideConfirmation voucher={row.original} onChange={() => { }} />, 'max-w-lg')}
                    ><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6144 8.23317C13.2677 5.1065 10.7344 3.1665 8.00102 3.1665C5.26769 3.1665 2.73435 5.1065 1.38769 8.23317C1.35098 8.31728 1.33203 8.40806 1.33203 8.49984C1.33203 8.59161 1.35098 8.68239 1.38769 8.7665C2.73435 11.8932 5.26769 13.8332 8.00102 13.8332C10.7344 13.8332 13.2677 11.8932 14.6144 8.7665C14.6511 8.68239 14.67 8.59161 14.67 8.49984C14.67 8.40806 14.6511 8.31728 14.6144 8.23317V8.23317ZM8.00102 12.4998C5.88769 12.4998 3.88769 10.9732 2.73435 8.49984C3.88769 6.0265 5.88769 4.49984 8.00102 4.49984C10.1144 4.49984 12.1144 6.0265 13.2677 8.49984C12.1144 10.9732 10.1144 12.4998 8.00102 12.4998ZM8.00102 5.83317C7.4736 5.83317 6.95803 5.98957 6.5195 6.28258C6.08097 6.5756 5.73918 6.99208 5.53734 7.47935C5.33551 7.96662 5.2827 8.5028 5.38559 9.02008C5.48849 9.53736 5.74246 10.0125 6.1154 10.3855C6.48834 10.7584 6.9635 11.0124 7.48078 11.1153C7.99806 11.2182 8.53424 11.1653 9.02151 10.9635C9.50878 10.7617 9.92526 10.4199 10.2183 9.98136C10.5113 9.54283 10.6677 9.02725 10.6677 8.49984C10.6677 7.79259 10.3867 7.11432 9.88664 6.61422C9.38654 6.11412 8.70827 5.83317 8.00102 5.83317V5.83317ZM8.00102 9.83317C7.73731 9.83317 7.47953 9.75497 7.26026 9.60846C7.041 9.46195 6.8701 9.25372 6.76918 9.01008C6.66826 8.76645 6.64186 8.49836 6.69331 8.23972C6.74475 7.98108 6.87174 7.7435 7.05821 7.55703C7.24468 7.37056 7.48226 7.24357 7.7409 7.19212C7.99954 7.14068 8.26763 7.16708 8.51127 7.268C8.7549 7.36891 8.96314 7.53981 9.10965 7.75908C9.25616 7.97834 9.33435 8.23613 9.33435 8.49984C9.33435 8.85346 9.19388 9.1926 8.94383 9.44265C8.69378 9.69269 8.35464 9.83317 8.00102 9.83317Z" fill="#3D6FAA" />
                        </svg>
                    </button>
                    <button
                        className="p-2 bg-[#FFE8DD] rounded border border-[#FFE8DD] hover:border-[#ED743A]"
                        onClick={() => openPopup(<EditVoucher voucher={row.original} />)}
                    >
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9987 8.50012C13.8219 8.50012 13.6523 8.57036 13.5273 8.69538C13.4023 8.82041 13.332 8.98998 13.332 9.16679V13.1668C13.332 13.3436 13.2618 13.5132 13.1368 13.6382C13.0117 13.7632 12.8422 13.8335 12.6654 13.8335H3.33203C3.15522 13.8335 2.98565 13.7632 2.86063 13.6382C2.7356 13.5132 2.66536 13.3436 2.66536 13.1668V3.83346C2.66536 3.65664 2.7356 3.48708 2.86063 3.36205C2.98565 3.23703 3.15522 3.16679 3.33203 3.16679H7.33203C7.50884 3.16679 7.67841 3.09655 7.80344 2.97153C7.92846 2.8465 7.9987 2.67693 7.9987 2.50012C7.9987 2.32331 7.92846 2.15374 7.80344 2.02872C7.67841 1.90369 7.50884 1.83346 7.33203 1.83346H3.33203C2.8016 1.83346 2.29289 2.04417 1.91782 2.41924C1.54275 2.79431 1.33203 3.30302 1.33203 3.83346V13.1668C1.33203 13.6972 1.54275 14.2059 1.91782 14.581C2.29289 14.9561 2.8016 15.1668 3.33203 15.1668H12.6654C13.1958 15.1668 13.7045 14.9561 14.0796 14.581C14.4547 14.2059 14.6654 13.6972 14.6654 13.1668V9.16679C14.6654 8.98998 14.5951 8.82041 14.4701 8.69538C14.3451 8.57036 14.1755 8.50012 13.9987 8.50012ZM3.9987 9.00679V11.8335C3.9987 12.0103 4.06894 12.1798 4.19396 12.3049C4.31898 12.4299 4.48855 12.5001 4.66536 12.5001H7.49203C7.57977 12.5006 7.66674 12.4838 7.74797 12.4506C7.82919 12.4175 7.90307 12.3686 7.96536 12.3068L12.5787 7.68679L14.472 5.83346C14.5345 5.77148 14.5841 5.69775 14.618 5.61651C14.6518 5.53527 14.6692 5.44813 14.6692 5.36012C14.6692 5.27211 14.6518 5.18498 14.618 5.10374C14.5841 5.0225 14.5345 4.94876 14.472 4.88679L11.6454 2.02679C11.5834 1.9643 11.5097 1.91471 11.4284 1.88086C11.3472 1.84702 11.26 1.82959 11.172 1.82959C11.084 1.82959 10.9969 1.84702 10.9156 1.88086C10.8344 1.91471 10.7607 1.9643 10.6987 2.02679L8.8187 3.91346L4.19203 8.53346C4.13024 8.59575 4.08136 8.66963 4.04818 8.75085C4.01501 8.83208 3.99819 8.91905 3.9987 9.00679V9.00679ZM11.172 3.44012L13.0587 5.32679L12.112 6.27346L10.2254 4.38679L11.172 3.44012ZM5.33203 9.28012L9.28537 5.32679L11.172 7.21346L7.2187 11.1668H5.33203V9.28012Z" fill="#ED743A" />
                        </svg>
                    </button>
                    <button
                        className="p-2 bg-[#FFE7E7] rounded border border-[#FFE7E7] hover:border-[#E04949]"
                        onClick={() => openPopup(<DeleteConfirmation />, 'max-w-lg !bg-red-100')}
                    >
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 12.5002C6.84348 12.5002 7.01305 12.4299 7.13807 12.3049C7.2631 12.1799 7.33333 12.0103 7.33333 11.8335V7.8335C7.33333 7.65669 7.2631 7.48712 7.13807 7.36209C7.01305 7.23707 6.84348 7.16683 6.66667 7.16683C6.48986 7.16683 6.32029 7.23707 6.19526 7.36209C6.07024 7.48712 6 7.65669 6 7.8335V11.8335C6 12.0103 6.07024 12.1799 6.19526 12.3049C6.32029 12.4299 6.48986 12.5002 6.66667 12.5002ZM13.3333 4.50016H10.6667V3.8335C10.6667 3.30306 10.456 2.79436 10.0809 2.41928C9.70581 2.04421 9.1971 1.8335 8.66667 1.8335H7.33333C6.8029 1.8335 6.29419 2.04421 5.91912 2.41928C5.54405 2.79436 5.33333 3.30306 5.33333 3.8335V4.50016H2.66667C2.48986 4.50016 2.32029 4.5704 2.19526 4.69543C2.07024 4.82045 2 4.99002 2 5.16683C2 5.34364 2.07024 5.51321 2.19526 5.63823C2.32029 5.76326 2.48986 5.8335 2.66667 5.8335H3.33333V13.1668C3.33333 13.6973 3.54405 14.206 3.91912 14.581C4.29419 14.9561 4.8029 15.1668 5.33333 15.1668H10.6667C11.1971 15.1668 11.7058 14.9561 12.0809 14.581C12.456 14.206 12.6667 13.6973 12.6667 13.1668V5.8335H13.3333C13.5101 5.8335 13.6797 5.76326 13.8047 5.63823C13.9298 5.51321 14 5.34364 14 5.16683C14 4.99002 13.9298 4.82045 13.8047 4.69543C13.6797 4.5704 13.5101 4.50016 13.3333 4.50016ZM6.66667 3.8335C6.66667 3.65669 6.7369 3.48712 6.86193 3.36209C6.98695 3.23707 7.15652 3.16683 7.33333 3.16683H8.66667C8.84348 3.16683 9.01305 3.23707 9.13807 3.36209C9.2631 3.48712 9.33333 3.65669 9.33333 3.8335V4.50016H6.66667V3.8335ZM11.3333 13.1668C11.3333 13.3436 11.2631 13.5132 11.1381 13.6382C11.013 13.7633 10.8435 13.8335 10.6667 13.8335H5.33333C5.15652 13.8335 4.98695 13.7633 4.86193 13.6382C4.7369 13.5132 4.66667 13.3436 4.66667 13.1668V5.8335H11.3333V13.1668ZM9.33333 12.5002C9.51014 12.5002 9.67971 12.4299 9.80474 12.3049C9.92976 12.1799 10 12.0103 10 11.8335V7.8335C10 7.65669 9.92976 7.48712 9.80474 7.36209C9.67971 7.23707 9.51014 7.16683 9.33333 7.16683C9.15652 7.16683 8.98695 7.23707 8.86193 7.36209C8.73691 7.48712 8.66667 7.65669 8.66667 7.8335V11.8335C8.66667 12.0103 8.73691 12.1799 8.86193 12.3049C8.98695 12.4299 9.15652 12.5002 9.33333 12.5002Z" fill="#E04949" />
                        </svg>
                    </button>
                </div>
            ),
        }
    ];

    const table = useReactTable({
        data: vouchers,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 font-(family-name:--font-dm-sans) text-black">
                <thead className="bg-gray-50">
                    {table.getHeaderGroups().map((headerGroup: HeaderGroup<Voucher>) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-black text-black tracking-wider cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <span className='flex items-center justify-center gap-2'>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        <span className="ml-1">
                                            {{
                                                asc: '🔼',
                                                desc: '🔽',
                                            }[header.column.getIsSorted() as string] ?? <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.30078 0L7.76488 3.63025H0.83668L4.30078 0Z" fill="#2C2B2B" />
                                                    <path d="M4.30078 9L0.836679 5.36975H7.76488L4.30078 9Z" fill="#2C2B2B" />
                                                </svg>}
                                        </span>
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row: Row<Voucher>, index: number) => (
                        <tr key={row.id} className="text-center hover:bg-gray-50">
                            {row.getVisibleCells().map((cell: Cell<Voucher, unknown>) => (
                                <td
                                    key={cell.id}
                                    className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-black"
                                >
                                    {cell.column.id === 'no' ? index + 1 : flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}