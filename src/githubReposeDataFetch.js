import React, { useEffect, useState } from 'react'

export default function GithubReposeDataFetch() {
// STATE GITHUB API
const [githubDate, setGithubDate] = useState([])

//  GET DATA API GITHUB REPOSE
    async function getApiGithubDATA(params) {
    const response = await fetch("https://api.github.com/users/Azhar7909/repos");
    const data = await response.json();
    console.log(data);
    setGithubDate(data);
}
// end

useEffect(() => {
    getApiGithubDATA()
}, [])

    return (
        <div>
            <h5>GET DATA FROM Github Repose</h5>
            <ol>
                { githubDate.length !== 0 ? 
                    githubDate.map((val, ind)=>(
                        <li key={ind}>
                            {val.name}
                        </li>
                    )) : "No Data Found"
                }
            </ol>
        </div>
    )
}
