import React from 'react'
import { Outlet } from 'react-router-dom'
/*----- sample list of posts - would be avilable via provider or http request ------ */
const postList = [
    { id: "1", preview: "post 1", body: "this is post 1" },
    { id: "2", preview: "post 2", body: "this is post 2" },
    { id: "3", preview: "post 3", body: "this is post 3" },
    { id: "4", preview: "post 4", body: "this is post 4" },
]
const Home = () => {
    return (
        <div>
            Home
            <Outlet context={{ postList }} /> {/*remove if using global provider*/}
        </div>
    )
}

export default Home