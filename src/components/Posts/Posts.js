import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Post from './Post'
import ComponentLoading from '../utils/Loading'
const Posts = () => {

    const [todoPosts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            const posts = response.data

            setPosts(posts)

        } catch (error) {
            console.error(error, 'error posts');
        }

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }


    if (loading) return (
       <ComponentLoading></ComponentLoading>
    )


    return (
        <>
            
            {
                todoPosts.map(res => {
                    return (
                        <Post
                            key={res.id}
                            imagen={res.imagen}
                            datos={res}
                        />
                    )
                })
            }
           
        </>
    )
}

export default Posts
