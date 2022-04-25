import { useState } from "react"

const Pagination = (props) => {

    const [empty] = useState(props.data.empty);
    const [first] = useState(props.data.first);
    const [last] = useState(props.data.last);
    const [currentpage, setCurrentpage] = useState(props.data.number);
    const [totalElements] = useState(props.data.totalElements);
    const [totalPages] = useState(props.data.totalPages);
    function pageChangeHandlar(index) {
        props.setActivepage(index);
        setCurrentpage(index)
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    {/* 
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p> */}
                </div>
                <div>
                    <nav className="relative cursor-pointer z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                        {!empty && Array(totalPages).fill(1).map((el, i) =>
                            <div key={i}
                                onClick={() => pageChangeHandlar(i)}
                                className={`${currentpage === i ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}`}

                            >

                                {i + 1}
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Pagination;