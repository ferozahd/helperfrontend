import axios from "axios";
import { useState, useEffect } from "react";
const PAGE_NUMBER = 0;
const Test = () => {

    const [state, setState] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);

    useEffect(() => {
        axios.get('https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=20')
            .then(res => {
                //  setState([...state, ...res.data])
                setState([...state, ...res.data.data])

            })
    }, [page])


    const scrollEnd = () => {
        setPage(page + 1);
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollEnd();
        }
    }

    return (
        <div className="bg-red-400 flex justify-center">
            <div className="w-96">
                {state.map((el, i) => {
                    return (
                        <div key={i} className="w-full">
                            <h1>world</h1>
                            <h4>id : {el.id}</h4>
                            <h4>name : {el.name}</h4>
                            <h4>Trips : {el.trips}</h4>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Test;