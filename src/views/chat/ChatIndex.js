
import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as Fa from 'react-icons/fa'
import { getBuddyList } from 'api/user'
import { getMessage, postMessage } from 'api/message'



const ChatIndex = () => {
    const { userId } = useParams();

    // Buddy list elements
    const buddyRef = useRef();
    const [activeUser, setActiveUser] = useState(null);
    const [buddy, setBuddy] = useState([]);
    const [buddyPage, setBuddyPage] = useState(0);
    const [buddyTotalPage, setBuddyTotalPages] = useState();

    // Messages elements
    const messageRef = useRef();
    const [messages, setMessages] = useState([])
    const [messagePage, setMessagePages] = useState(0)
    const [scrollHigh, setScrollHight] = useState(0);
    const [messageTotalPages, setMessageTotalPages] = useState();
    const [input, setInput] = useState();



    // Buddly Logic , Api and Staging here
    useEffect(() => {
        getBuddyList(buddyPage)
            .then(res => {
                setBuddy([...buddy, ...res.data.content])
            })

    }, [buddyPage])

    useEffect(() => {

        buddy.map((data) => {
            if (userId !== null) {
                if (activeUser !== null && activeUser.senderId === Number(userId)) {
                    // console.log("already active")
                } else
                    if (Number(userId) === data.senderId) {
                        // console.log("Hit")
                        setActiveUser(data);
                    }
            }
        })
    })

    const onScroll = () => {
        const scrollY = buddyRef.current.scrollHeight;// Actuall height 
        const scrollTop = buddyRef.current.scrollTop + buddyRef.current.clientHeight // scrolled height + default window height 
        if (scrollTop === scrollY) {
            setBuddyPage(buddyPage + 1)
        }
    }


    // Message api , Logic and staging here 
    useEffect(() => {
        getMessage(userId, 0)
            .then(res => {
                setMessages(res.data.content.reverse())
            })
            .then(() => {
                const out = messageRef.current;
                out.scrollTo({
                    top: out.scrollTop + out.clientHeight,
                    behavior: 'auto'

                });
            })
        setMessagePages(0)
    }, [userId])

    // Scrollable message update
    useEffect(() => {
        getMessage(userId, messagePage)
            .then(res => {
                setMessages([...res.data.content.reverse(), ...messages])
            })
            .then(() => {
                // const out = messageRef.current();

            })

    }, [messagePage])

    const onscrollHandlar = () => {

        const scrollTop = messageRef.current.scrollTop;
        if (scrollTop === 0) {
            setMessagePages(messagePage + 1)
        }

    }

    function messageSendhandlar(e) {
        e.preventDefault()
        postMessage(userId, input)
            .then(res => {
                if (res.status === 201) {

                    const response = {
                        createdAt: res.data.createdAt,
                        message: res.data.message,
                        messageId: res.data.messageId,
                        userId: res.data.userId
                    }


                    setMessages([...messages, response])
                    setInput()
                }
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    
    if (buddy === null) return;

    return (
        <div className="flex  h-screen">
            <div className="w-72 h-screen overflow-hidden">
                <div ref={buddyRef} onScroll={onScroll} className="flex flex-col container h-full w-full  overflow-scroll rounded-lg shadow">
                    <ul className="flex flex-col  bg-gray-200 w-full" >


                        {buddy && buddy.map((buddy, index) => {
                            return (
                                <li className="flex flex-row" key={index}>
                                    <Link to={"/chat/" + buddy.senderId}>
                                        <div className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                <img alt="profil" src={buddy.profilePicture} className="mx-auto object-cover rounded-full h-10 w-10" />
                                            </div>
                                            <div className="flex-1 pl-1">
                                                <div className="font-medium dark:text-white">{buddy.name}</div>
                                            </div>

                                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                            </svg>
                                        </div>
                                    </Link>

                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            {/* { {activeUser && <MessageBody activeUser={activeUser} initalMessage={initalMessage} />}  */}
            <div className="w-full flex  h-screen">

                <div className="w-8/12 pb-20 h-full bg-gray-200">
                    <div className="h-20 bg-white flex items-center gap-4 ">
                        <span className=" ml-3 h-12 w-12 flex overflow-hidden rounded-full ">
                            {activeUser && <img className="object-cover" src={activeUser.profilePicture} height="100%" width="100%" />}
                        </span>
                        {activeUser && <p className="text-center text-2xl font-semibold">{activeUser.name}</p>}
                    </div>
                    <div className="h-full">
                        <div ref={messageRef} onScroll={onscrollHandlar} className="flex flex-col container h-full w-full pb-12 overflow-scroll rounded-lg shadow">
                            {messages && messages.map((data, index) => {

                                return (
                                    <div key={index}>
                                        <div className={`mt-4 px-4 flex ${data.userId !== Number(userId) ? 'justify-end' : ''} items-center gap-3`}>
                                            <div>
                                                <span className={`px-2 h-10 justify-center items-center  rounded-tr-xl	rounded-tl-xl rounded-br-xl	w-90 flex ${data.userId !== Number(userId)  ? 'bg-blue-600 text-white' : 'bg-white'} `}>
                                                    {data.message}
                                                </span>
                                                {/* <p className="text-xs font-semibold text-gray-600">{data.createdAt.replace("T", " ")}</p> */}
                                                <p className="text-xs font-semibold text-gray-600">{data.createdAt}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>



                    <form onSubmit={messageSendhandlar} className="mt-[52px] bg-white fixed bottom-0  overflow-hidden w-8/12 h-16 px-3   flex justify-center items-center gap-3 text-xl">
                        <Fa.FaSmile className="fa fa-smile-o" />
                        <input placeholder="say ...." type="text" onChange={(e) => setInput(e.target.value)} className="h-10 w-full text-sm px-2 outline-none rounded-lg border" />
                        <button type="submit"><Fa.FaArrowAltCircleUp className="fa fa-arrow-circle-o-up" /></button>
                    </form>
                </div>


                {/* Profile part */}
                <div className="left-side w-4/12 h-full bg-blue-700">
                    <p className="text-center mt-5 text-2xl font-semibold text-white">Profile</p>
                    <div className="flex justify-center items-center mt-6">
                        {activeUser &&
                            <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: "url(" + activeUser.profilePicture + ")" }}  ></div>
                        }


                    </div>
                    <div className="mt-5 relative px-3"> <input placeholder="Daria Nikitina" type="text" className="h-16 w-full px-2 outline-none rounded-lg border-0" />
                        <span className="absolute left-5 text-gray-500 top-0 font-semibold">Your Name</span>
                    </div>
                    <div className="mt-5 relative px-3">
                        <select className="h-16 cursor-pointer font-semibold w-full px-2 outline-none rounded-lg border-0">
                            <option className="bg-white hidden">Available</option>
                            <option>Not Available</option>
                            <option>Busy</option>
                            <option>Calls Only</option>
                        </select>
                        <span className="absolute left-5 text-gray-500 top-0 font-semibold">Status</span>
                    </div>
                    <div className="mt-10 h-16 px-3 bg-blue-300 flex justify-center items-center text-xl gap-16">
                        <div>
                            Active Offer <br />
                            Create a Offer

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ChatIndex;