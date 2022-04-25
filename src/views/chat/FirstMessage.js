const FirstMessage = () => {
    return (
        <div className="flex justify-center items-center bg-gray-500 min-h-screen">
            <div className="right_side w-96 h-full bg-gray-200">
                <div className="h-20 bg-white flex items-center gap-4 ">
                    <span className=" ml-3 h-12 w-12 flex overflow-hidden rounded-full ">
                        <img className="object-cover" src="https://imgur.com/tkcorXW.jpg" height="100%" width="100%" />
                    </span>
                    <p className="text-center text-2xl font-semibold">Daria Nikitina</p>
                </div>
                <div className="mt-4 px-3 flex items-center gap-3">
                    <span className="h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-52 flex bg-white">Hi, Mary how do you feel?</span>
                    <p className="text-sm font-semibold text-gray-800">10:00</p>
                </div>
                <div className="mt-4 px-3 flex justify-end items-center gap-3">
                    <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl rounded-tl-xl rounded-bl-xl w-96 flex bg-blue-600 text-white">
                        Hi, Daniel i am OK but a bit bored! What about you?
                    </span>
                    <p className="text-sm font-semibold text-gray-800">10:02</p>
                </div>
                <div className="mt-4 px-4 flex items-center gap-3">
                    <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl rounded-tl-xl rounded-br-xl	w-80 flex bg-white">I am trying to deal with my job in isolation.</span>
                    <p className="text-sm font-semibold text-gray-800">10:03</p>
                </div>
                <div className="mt-4 px-4 flex items-center gap-3">
                    <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-90 flex bg-white">You know I have got an interesting news for you.</span>
                    <p className="text-sm font-semibold text-gray-800">10:03</p>
                </div>
                <div className="mt-4 px-3 flex justify-end items-center gap-3">
                    <span className="px-2 h-10 justify-center items-center text-sm rounded-tr-xl rounded-tl-xl rounded-bl-xl w-24 flex bg-blue-600 text-white">Hmmm</span>
                    <p className="text-sm font-semibold text-gray-800">10:04</p>
                </div>
                <div className="mt-[52px] h-16 px-3 bg-white flex justify-center items-center gap-3 text-xl">
                    <i className="fa fa-smile-o"></i>
                    <input placeholder="Can't imagine what!" type="text" className="h-10 -mt-1 w-full text-sm px-2 outline-none rounded-lg border" />
                    <i className="fa fa-arrow-circle-o-up">

                    </i>
                </div>
            </div>

        </div>
    )
}
export default FirstMessage;