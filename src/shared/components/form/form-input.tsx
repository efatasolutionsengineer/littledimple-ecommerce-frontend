import { UseFormRegister, FieldValues, FieldErrors, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    errors?: FieldErrors<T>;
    rows?: number;
    className?: string;
    containerClassName?: string;
}

export default function FormInput<T extends FieldValues>({
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
}: FormInputProps<T>) {
    const InputComponent = rows ? "textarea" : "input";
    const inputProps = {
        id,
        type,
        placeholder,
        className: `w-full p-3 border border-gray-300 rounded-lg bg-neutral-white focus:outline-none focus:ring-2 focus:ring-hijau-tua ${className}`,
        ...(rows && { rows }),
        ...register(name),
    };

    return (
        <div className={`font-(family-name:--font-dm-sans) text-[16px] font-medium ${containerClassName}`}>
            {label && (
                <label htmlFor={id} className="block mb-1">
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