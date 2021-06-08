import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

import { DataContext } from '../../context/DataContext'

import ComponentLoading from '../utils/Loading'
import Post from './Post'


const Posts = () => {

    // * Falta detectar evento desde el context

    const [todoPosts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getPosts()

    }, [])


    const getPosts = async () => {
        setLoading(true)
        setPosts([])
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
