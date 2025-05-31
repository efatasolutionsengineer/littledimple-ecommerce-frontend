import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { cn } from '@/lib/utils';
import CalendarIcon from '@/assets/icons/calendar';
import { ChevronDown } from '@/assets/icons/chevron';

interface CustomDatePickerProps {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    placeholderText?: string;
    className?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    showTimeSelect?: boolean;
    dateFormat?: string;
    stripped?: boolean;
}

export const BasicDatePicker: React.FC<CustomDatePickerProps> = ({
    selected,
    onChange,
    placeholderText = "Select date",
    className,
    disabled = false,
    minDate,
    maxDate,
    showTimeSelect = false,
    dateFormat = "MM/dd/yyyy",
    stripped = false,
}) => {
    return (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-300 max-w-[400px] w-full">
            <DatePicker
                selected={selected}
                onChange={onChange}
                className={cn(
                    "outline-none bg-gray-100  w-full text-black border-none",
                    disabled && "bg-gray-100 cursor-not-allowed",
                    className
                )}
                placeholderText={placeholderText}
                disabled={disabled}
                minDate={minDate}
                maxDate={maxDate}
                showTimeSelect={showTimeSelect}
                dateFormat={dateFormat}
                popperClassName="z-50"
            />
        </div>
    );
};
