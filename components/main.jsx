import React from "react";
import Link from "next/link";

const Main = () => {
    return (
    <div className="sm:pt-10 flex h-screen place-content-center" id='main'>
        <div className="text-center text-xl items-center justify-center z-10 p-4 m-auto">
            <h1 className="p-4">Hello, I&apos;m <span className="text-[#ffed28]">Cody</span>.</h1>
            <h2 className="pt-4 pb-16">I&apos;m a web developer in the making.</h2>
                <Link href="/#projects">
                    <button
                        className=
                        "w-[200px] h-[60px] curser-pointer hover:bg-[#fff263] hover:scale-105 ease-in duration-300">
                            View my work.
                    </button>
                </Link>
        </div>
    </div>
    )
}

export default Main

