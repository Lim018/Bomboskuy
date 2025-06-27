import Image, { StaticImageData } from "next/image";

interface ClickableImageProps {
    src: string | StaticImageData;
    alt: string;
    onClick?: () => void;
    badgeText: string;
    title: string;
    description: string;
    buttonText: React.ReactNode;

}

export default function ClickableImage({
    src,
    alt,
    onClick,
    badgeText,
    title,
    description,
    buttonText,
}: ClickableImageProps) {
    return (
        <div
            className="relative h-full w-full cursor-pointer overflow-hidden group"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick && onClick();
                }
            }}
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                priority={true}
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 z-10 bg-primary opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />

            <div className="absolute inset-0 z-20 flex flex-col items-start justify-end p-8 text-white">
                {badgeText && (
                    <div className="mb-2 inline-block rounded-full bg-pink-600 px-4 py-1">
                        <p className="text-sm font-semibold text-white">{badgeText}</p>
                    </div>
                )}

                <h2 className="text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.7)]">
                    {title}
                </h2>

                <p className="mt-2 max-w-sm text-base text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                    {description}
                </p>

                {/* --- THIS IS THE CORRECTED BUTTON --- */}
                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-bold text-pink-600 shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
