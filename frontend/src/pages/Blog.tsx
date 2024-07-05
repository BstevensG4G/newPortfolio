import React, { useEffect, useState } from 'react'
import axios from 'axios'

export interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = () => {
    //const [BlogPost, setBlogPost] = useState([])
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:8080/api/users')
        console.log(response.data.users)
        setUsers(response.data.users)
    }
    useEffect(() => {
        fetchUsers()
      }, [])

    return (
        <div className="blog">

                {users.map((user, index) => (
                    <div key={index}>
                    <span>{user}</span>
                    <br />
                    </div>
                ))}

        </div>

    )
}
export default BlogPage
