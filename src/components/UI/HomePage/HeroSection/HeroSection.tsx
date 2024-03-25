
import Container from '@/components/Container'
import Slider from './Slider'



const HeroSection = () => {
    return (
        <div className='bg-gradient-to-r from-emerald-50 via-emerald-100 to-[#ecf5f1]'>
            <Container>
                <div className='text-center mt-5 lg:mt-10 w-4/5 lg:w-3/5 flex flex-col mx-auto'>
                    <h1 className='text-2xl lg:text-4xl'>Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
                    <p className='mt-3 mb-10 md:mt-5 md:mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                </div>
                <Slider />
            </Container>
        </div>
    )
}

export default HeroSection