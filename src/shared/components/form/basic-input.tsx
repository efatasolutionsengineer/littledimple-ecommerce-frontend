import { ReactNode } from "react";
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
}: BasicInputProps<T>) => {
    const InputComponent = rows ? "textarea" : "input";
    const inputProps = {
        id,
        type,
        placeholder,
        className: `w-full p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-hijau-tua ${className}`,
        ...(rows && { rows }),
        ...register(name),
    };

    return (
        <div className={`font-(family-name:--font-dm-sans) text-[16px] font-medium ${containerClassName}`}>
            {label && (
                <label htmlFor={id} className="block mb-1" defaultValue={defaultValue}>
                    {label}
                </label>
            )}
            <InputComponent {...inputProps} />
            {errors?.[name] && (
                <p className="text-red-500 text-sm mt-1">
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    );
} 