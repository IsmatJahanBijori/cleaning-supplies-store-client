import Container from '@/components/Container'
import { getFlashSaleData } from '@/utils/flashsale'
import Image from 'next/image'

const FlashSale = () => {
    const flashSaleData = getFlashSaleData()
    const flashSale = flashSaleData.sort((a, b) => {
        return (Number(new Date(b.createdAt))) - (Number(new Date(a.createdAt)));
    })
    return (
        <Container className='mt-10 md:my-20'>
            <h1 className='text-xl font-bold md:text-3xl mb-3'>Flash Sale Cleaning Supplies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis molestiae vero dolores perferendis et explicabo cumque optio accusantium cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur recusandae molestias suscipit, eum earum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-14">
                {
                    flashSale?.map((item: any) =>
                        <div>
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
        </Container>
    )
}

export default FlashSale