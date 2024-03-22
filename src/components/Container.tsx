import { ReactNode } from 'react'

type TChildren = {
    children: ReactNode,
    className?: string
}
const Container = ({ children, className }: TChildren) => {
    return (
        // <div className={cn('w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto', className)}>{children}</div>
        <div className={`w-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-10 sm:px-0 ${className}`}>{children}</div>
    )
}

export default Container