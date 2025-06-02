import { ChangeEventHandler, ReactNode } from "react";
import { UseFormRegister, FieldValues, FieldErrors, Path } from "react-hook-form";

interface BasicInputProps<T extends FieldValues> {
    id: string;
    label?: string | ReactNode;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    errors?: FieldErrors<T>;
    rows?: number;
    className?: string;
    containerClassName?: string;
    defaultValue?: string | number;
    value?: string | number;
    disabled?: boolean;
    isCurrency?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BasicInput = <T extends FieldValues>({
    id,
    label,
    type = "text",
    placeholder,
    register,
    name,
    errors,
    rows,
    className = "",
    containerClassName = "",
    defaultValue,
    value,
    disabled = false,
    isCurrency = false,
    onChange,
}: BasicInputProps<T>) => {
    const InputComponent = rows ? "textarea" : "input";
    
    const formatCurrency = (value: string | number) => {
        if (!value) return "";
        const number = typeof value === "string" ? parseFloat(value.replace(/[^\d]/g, "")) : value;
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(number);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isCurrency) {
            const rawValue = e.target.value.replace(/[^\d]/g, "");
            e.target.value = rawValue;
        }
        onChange?.(e);
    };

    const inputProps = {
        id,
        type: isCurrency ? "text" : type,
        placeholder,
        className: `w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-hijau-tua disabled:bg-gray-200 disabled:text-gray-500 font-normal ${className}`,
        ...(rows && { rows }),
        ...register(name, {
            onChange: (e) => {
                if (isCurrency) {
                    const rawValue = e.target.value.replace(/[^\d]/g, "");
                    e.target.value = rawValue;
                }
            },
        }),
    };

    return (
        <div className={`font-(family-name:--font-dm-sans) text-[16px] font-medium ${containerClassName}`}>
            {label && (
                <label htmlFor={id} className="block mb-1" defaultValue={defaultValue}>
                    {label}
                </label>
            )}
            <InputComponent 
                {...inputProps} 
                value={isCurrency && value ? formatCurrency(value) : value} 
                disabled={disabled}
                onChange={handleChange as ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement>}
            />
            {errors?.[name] && (
                <p className="text-red-500 text-sm mt-1">
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    );
} 