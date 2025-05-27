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
import { Product, YourProductTableProps } from '../types';


export const YourProductTable: React.FC<YourProductTableProps> = ({ products }) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const columns: ColumnDef<Product>[] = [
        {
            accessorKey: 'no',
            header: 'No',
        },
        {
            accessorKey: 'name',
            header: 'Product Name',
        },
        {
            accessorKey: 'code',
            header: 'Unique Code',
        },
        {
            accessorKey: 'warranty_date',
            header: 'Warranty Date',
        },
        {
            accessorKey: 'purchase_date',
            header: 'Purchase Date',
        },
    ];

    const table = useReactTable({
        data: products,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="w-full overflow-x-auto mt-16">
            <h4 className='text-hijau-tua text-center text-3xl mb-8'>Your Products</h4>
            <table className="min-w-full divide-y divide-gray-200 font-(family-name:--font-dm-sans)">
                <thead className="bg-gray-50">
                    {table.getHeaderGroups().map((headerGroup: HeaderGroup<Product>) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-semibold text-gray-500 text-black tracking-wider cursor-pointer hover:bg-gray-100"
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
                                                </svg>
                                            }
                                        </span>
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row: Row<Product>, index: number) => (
                        <tr key={row.id} className="text-center hover:bg-gray-50">
                            {row.getVisibleCells().map((cell: Cell<Product, unknown>) => (
                                <td
                                    key={cell.id}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
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
};
