import Image, { StaticImageData } from "next/image";

export const SuperiorityCard = ({
    title,
    description,
    buttonText,
    icon,
    backgroundColorClassName,
    textTitleClassName,
    hideMoreInfoButton = false,
    onMoreInfoClicked,
}: {
    title: string;
    description: string;
    buttonText: string;
    icon: StaticImageData;
    backgroundColorClassName: string;
    textTitleClassName: string;
    hideMoreInfoButton?: boolean;
    onMoreInfoClicked?: (clicked: boolean) => void;
}) => {
    return (
        <div className={`rounded-2xl shadow-none max-w-[379px] p-8 flex flex-col items-center justify-center ${backgroundColorClassName}`}>
            <div className="text-center font-poppins">
                <Image
                    src={icon}
                    alt={title}
                    width={55}
                    height={34}
                    className="mx-auto mb-2"
                    loading="lazy"
                />
                <p className={`${textTitleClassName} pb-2 font-semibold font-md`}>{title}</p>
                <p className="text-gray pb-4 text-sm">{description}</p>
                {!hideMoreInfoButton && (
                    <button className="text-sm text-biru-gelap hover:underline" onClick={() => onMoreInfoClicked?.(true)}>{buttonText}</button>
                )}
            </div>
        </div>
    )
}