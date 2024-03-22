
import Container from "@/components/Container";
import { TbWorld } from "react-icons/tb";
import { LuEuro } from "react-icons/lu";
import { MdAccessibilityNew } from "react-icons/md";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[currentDate.getMonth()];
    return (
        <footer className=" body-font ">
            <Container>
                <div className=" py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center">
                        <div className="w-1/2 md:w-1/4  px-2">
                            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/catergories">Catergories</a>
                                </li>
                                <li>
                                    <a href="/products">Products</a>
                                </li>
                                <li>
                                    <a href="/flashsales">Flashsales</a>
                                </li>
                                <li>
                                    <a href="/about-us">About Us</a>
                                </li>
                                <li>
                                    <a href="/contact-us">Contact Us</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-1/2 md:w-1/4   px-2">
                            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">Resources</h2>
                            <nav className="list-none mb-10">
                                <li className="my-2">
                                    <a className="footer-link">Help Center</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">Blog</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">Tutorials</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">FAQs</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-1/2 md:w-1/4   px-2">
                            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">Solutions</h2>
                            <nav className="list-none mb-10">
                                <li className="my-2">
                                    <a className="footer-link">Contact Us</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">Developers</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">Documentation</a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">Integrations</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-1/2 md:w-1/4   px-2">
                            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">Company</h2>
                            <nav className="list-none mb-10">
                                <li className="my-2">
                                    <a className="footer-link">
                                        Terms
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a className="footer-link">
                                        Privacy
                                    </a>
                                </li>
                                <li className="my-2">
                                    <a className=" footer-link">
                                        Contact
                                    </a>
                                </li>

                            </nav>
                        </div>

                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="container px-5 py-4 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm ">Placeholder</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex btn">Email</button>
                            <p className=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                            </p>
                        </div>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a className="">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 ">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 ">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 ">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                            <a className="ml-3 footer-link inline-flex">
                                {/* <Image src={world} className='size-6 mr-2 text-black' alt="world" /> */}
                                <TbWorld className='size-6 mr-2' />
                                <span>EN</span>
                            </a>
                            <a className="ml-3  footer-link inline-flex">
                                {/* <Image src={euro} className='size-6 mr-2 text-black' alt="euro" /> */}
                                <LuEuro className='size-6 mr-2' />
                                <span>EURO</span>
                            </a>
                            <a className="ml-3 footer-link inline-flex">
                                {/* <Image src={access} className="size-6 mr-2 text-black" alt="access" /> */}
                                <MdAccessibilityNew className="size-6 mr-2" />
                                <span>Accessibility</span>
                            </a>

                        </span>
                    </div>
                </div>
                <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className=" text-sm text-center sm:text-left">© <span>{currentMonth} {currentYear}</span> Scrubs Emporium —
                        <a href="https://twitter.com/knyttneve" className=" ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center  text-sm">Enamel pin tousled raclette tacos irony</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;