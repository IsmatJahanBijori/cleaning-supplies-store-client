// pages/404.js
import Link from 'next/link'

const Custom404 = () => {
    return (
        // <div className="flex justify-center items-center mt-10 ">

        <main className="flex mt-20 justify-center">
            <p className="bg-gradient-to-br from-pink-400 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent ">
                404
            </p>
            <div className="overflow-y-hidden ml-6">
                <div className="border-l border-gray-200 pl-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Page not found
                    </h1>
                    <p className="mt-1 text-base text-gray-500">
                        Please check the URL in the address bar and try again.
                    </p>
                </div>
                <div className="mt-10 flex space-x-3 border-l border-transparent pl-6">
                    <Link href="/">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </main>
        // </div>
    )
}

export default Custom404
