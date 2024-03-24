// import Container from '@/components/Container'
import { getFlashSaleData } from '@/utils/flashsale'
import Image from 'next/image'
// import Link from 'next/link'

const FlashSaleCard = () => {
    const flashSaleData = getFlashSaleData()
    const flashSale = flashSaleData.sort((a, b) => {
        return (Number(new Date(b.createdAt))) - (Number(new Date(a.createdAt)));
    }).slice(0, 6)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-14">
            {
                flashSale?.map((item: any) =>
                    <div className='mx-auto'>
                        <Image width={300} height={1000} className="rounded-lg object-cover object-center" src={item.imageUrl} alt="blog" />
                        <div className="my-3 ">
                            <h1 className="text-lg md:text-xl font-semibold mb-3">{item.name}</h1>
                            <p className="mb-3 flex flex-wrap">{item.description}</p>
                            <p className="flex justify-start">
                                {item.price}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FlashSaleCard