import React from 'react';

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
                <div>
                    <p className="heading__mini">Get in Touch</p>
                    <h1 className="heading__primary">
                        Let&apos;s make your <span className="text-yellow-400">Brand</span> brillant
                    </h1>
                    <p className="text-[15px] text-white mt-[1rem] opacity-75">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur in deleniti laudantium a iste adipisci unde porro? A, architecto velit quam ab, enim voluptatibus blanditiis, in praesentium aut cum maxime!
                    </p>
                    <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
                        <a href="tel:+33669142804">+33 6 69 14 28 04</a>
                    </h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                        cols={50}
                        rows={4}
                    >
                    </textarea>
                    <button type="submit" className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact