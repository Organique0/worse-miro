import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="animate-pulse duration-1000 rounded-full" />
        </div>
    )
}