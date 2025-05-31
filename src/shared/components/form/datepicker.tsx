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

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
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
    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 max-w-[400px] w-full">
      <div className="p-2">
        <CalendarIcon />
      </div>
    <DatePicker
      selected={selected}
      onChange={onChange}
      className={cn(
        "outline-none bg-white w-full text-black border-none",
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
      <div className="pr-4">
        <ChevronDown className="stroke-black" width={16} height={16} />
      </div>
    </div>
  );
};

export default CustomDatePicker;
