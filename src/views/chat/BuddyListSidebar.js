import { useEffect, useState, useRef } from 'react'
import { getBuddyList } from 'api/user'
import { Link } from 'react-router-dom';


const BuddyListSidebar = () => {



    const buddyBox = useRef();


    const [buddy, setBuddy] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getBuddyList(page)
            .then(res => {
                setBuddy([...buddy, ...res.data.content])
            })
    }, [page])


    const onScroll = () => {
        const scrollY = buddyBox.current.scrollHeight;// Actuall height 
        const scrollTop = buddyBox.current.scrollTop + buddyBox.current.clientHeight // scrolled height + default window height 
        if (scrollTop === scrollY) {
            setPage(page + 1)
        }
    }



    if (buddy == null) return;

    return (
        <div ref={buddyBox} onScroll={onScroll} className="flex flex-col container h-full w-full  overflow-scroll  dark:bg-gray-800 rounded-lg shadow">
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
    )
}
export default BuddyListSidebar;
