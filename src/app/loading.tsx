"use client"
import { Vortex } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex  mx-auto place-items-center'>
            <Vortex
                visible={true}
                height="80"
                width="80"

                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default Loading