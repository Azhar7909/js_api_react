import React, { useEffect, useState } from 'react'

export default function ApiMethods() {
//  STATE GET API
    const [getData, setGetData] = useState({})
    const [postData, setGPostData] = useState({})


//  GET API
    async function getApi() {
        const Api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(Api,"API")
        const getValues = await Api.json();
        console.log(getValues, "get data");
        setGetData(getValues);
    }
// end
    
//  POST API
    async function postApi() {
        const Api = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify({
                title: 'Practices Post Api',
                body: 'Javascript',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        console.log(Api,"Api");
        const postValues = await Api.json();
        console.log(postValues, "post data");
        setGPostData(postValues)
    }
// end

    useEffect(() => {
        console.log("GET API CALL");
        getApi();

        console.log("POST API CALL");
        postApi();
        return () => {
        }
    }, [])


    return (
        <div>
            <h5>GET DATA</h5>
            <p>USER ID <br/> {getData.userId}</p>
            <p>TITLE <br/> {getData.title}</p>

            
            <h5>POST DATA</h5>
            <p>USER ID <br/> {postData.userId}</p>
            <p>TITLE <br/> {postData.title}</p>
            <p>BODY <br/> {postData.body}</p>
        </div>
    )
}
