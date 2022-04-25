
import { useState, useEffect } from "react"
import { getJobCatagories, getJobSubCatagories, getJobTypes, createJob } from "api/job"
import { Link } from "react-router-dom";

const JobCreator = () => {


    const [dbCatgroies, setDbCatagories] = useState(null);
    const [selectedCatagories, setSelectedCatagories] = useState(null);

    const [dbSubCatgroies, setDbSubCatgroies] = useState(null);
    const [selectedSubCatagroies, setSelectedSubCatagroies] = useState(null);

    const [dbJobtype, setDbJobtype] = useState(null);
    const [selectedJobtype, setSelectedJobtype] = useState(null);
    const [message, setMessage] = useState(null);


    const [budget, setBudget] = useState(null)
    const [description, setDescription] = useState(null)
    const [city, setCity] = useState(null);
    const [country,] = useState("France");
    const [duration, setDuration] = useState(null);

    const [error, setError] = useState(null);



    let deliverydays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

    useEffect(() => {
      
        getJobCatagories()
            .then((respose) => {
                console.log(respose.data)
                if (respose.status === 200) {
                    setDbCatagories(respose.data);
                }
            }).catch((err)=>{
                console.log(err.response)
            })
    }, [])

    useEffect(() => {

        if (selectedCatagories !== null) {
            if (selectedCatagories !== "") {
                getJobSubCatagories(selectedCatagories)
                    .then(res => {
                        if (res.status === 200) {
                            setDbSubCatgroies(res.data)
                        }
                    })
            } else {

            }
        }
    }, [selectedCatagories])

    useEffect(() => {
        // console.log("working at 39")
        if (selectedCatagories !== null && selectedSubCatagroies !== null) {
            getJobTypes(selectedCatagories, selectedSubCatagroies)
                .then(res => {
                    if (res.status === 200) {
                        setDbJobtype(res.data)
                    }
                })
        }
    }, [selectedSubCatagroies])

    function createJobHandlar(e) {
        e.preventDefault();
        if (selectedCatagories !== null && selectedSubCatagroies !== null && selectedJobtype !== null && budget !== null && description !== null && city !== null && duration !== null) {
            if (budget < 5) {
                setError("Budget should not be less than 5 ")
            } else {
                setError(null);

                const data = {
                    "description": description,
                    "budget": budget,
                    "typeId": selectedJobtype,
                    "city": city,
                    "country": "France",
                    "jobDuration": duration
                }
                createJob(data).then((response) => {
                    if (response.status === 200) {
                        setMessage("Successfully create a job");
                        setTimeout(()=>{
                            window.location.pathname="/buyer/jobs";
                        },2000)
                    }
                }).catch((err) => {
                    setError(err.response.data.message);
                })

            }
        } else {
            setError("Fullfil all the criterias")
        }
    }

    return (
        <>
            <form onSubmit={createJobHandlar} >

                {/* 
        Job Catagories part
        */}
                <div className="mb-3">
                    <Link to="/buyer/jobs">
                        <button className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">Back to Job List</button>
                    </Link>
                </div>
                <div className="flex flex-wrap bg-orange-100 py-2 ">
                    {error && <div className=" inline-flex w-full justify-center"><div className="w-auto py-1 lg:w-8/12 px-2 text-center text-white bg-red-500 font-semibold">{error}</div></div>}
                    {message && <div className=" inline-flex w-full justify-center"><div className="w-auto py-1 lg:w-8/12 px-2 text-center  bg-green-400 font-semibold">{message}</div></div>}

                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password"
                            >
                                Job Categories
                            </label>
                            <select
                                onChange={(e) => setSelectedCatagories(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                                <option value="">Select a catagories</option>
                                {dbCatgroies && dbCatgroies.map((cata) => <option key={cata.id} value={cata.id} >{cata.catagories}</option>)}
                            </select>
                        </div>
                    </div>
                    {selectedCatagories &&
                        <div
                            className="w-full lg:w-4/12 px-4"
                        >
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Job Sub Categories
                                </label>
                                <select
                                    onChange={(e) => setSelectedSubCatagroies(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                >
                                    <option value="">Select a sub catagories</option>
                                    {dbSubCatgroies && dbSubCatgroies.map((subcata) => <option key={subcata.id} value={subcata.id} >{subcata.subcatagories}</option>)}
                                </select>
                            </div>
                        </div>
                    }
                    {selectedSubCatagroies &&
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Types
                                </label>
                                <select
                                    onChange={(e) => setSelectedJobtype(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                >
                                    <option value="">Select a sub catagories</option>
                                    {dbJobtype && dbJobtype.map((type) => <option key={type.id} value={type.id} >{type.type}</option>)}
                                </select>
                            </div>
                        </div>
                    }
                </div>
                {/* Job Catagories end */}



                <div className="flex flex-wrap bg-orange-100 py-2 ">

                    <div
                        className="w-full lg:w-4/12 px-4"
                    >
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                City Name
                            </label>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Country name
                            </label>
                            <input
                                readOnly="readOnly"
                                type="text"
                                value="France"
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password"
                            >
                                Durations
                            </label>
                            <select
                                onChange={e => setDuration(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                            >
                                {deliverydays.map((day, index) => <option key={index} value={day}>{day} days</option>)}
                            </select>
                        </div>
                    </div>
                </div>



                <div className="flex flex-wrap bg-orange-100 py-2 ">

                    <div
                        className=" w-full px-4"
                    >
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Description
                            </label>
                            <textarea
                                onChange={e => setDescription(e.target.value)}
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                rows="4"
                                placeholder="Write something about your self"



                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex items-center flex-wrap bg-orange-100 py-2 ">

                    <div
                        className="w-full lg:w-4/12 px-4"
                    >
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password"
                            >
                                Budget
                            </label>
                            <input
                                onChange={e => setBudget(e.target.value)}
                                type="number"

                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                    <div className=" w-8/12 py-3 flex justify-end px-3">

                        <button
                            type="submit"
                            className=" bg-lime-600 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                            Create Job
                        </button>

                    </div>
                </div>

            </form>
        </>
    )
}
export default JobCreator;