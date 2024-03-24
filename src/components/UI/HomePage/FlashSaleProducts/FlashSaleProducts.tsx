
import Container from '@/components/Container'

import Link from 'next/link'
import FlashSaleCard from './FlashSaleCard';


const FlashSaleProducts = () => {


    return (
        <Container className='my-10 md:my-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold md:text-3xl'>Flash Sale Cleaning Supplies</h1>
                <Link href="/flash-sale"><button className='bg-black text-white rounded-md px-4 py-2'>View All</button></Link>
            </div>
            <FlashSaleCard />
        </Container>
    );
}


export default FlashSaleProducts