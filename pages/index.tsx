import { useState, useEffect } from 'react'

import { getName } from '../modules/data'

const Home = () => {
    const [{ name }, setName] = useState({ name: 'John Doe' })
    const fetchName = async () => {
        const name = await getName()
        setName({ name })
    }

    useEffect(fetchName, '')

    return <div>Welcome to next.js, <b>{name}</b>!</div>
}

export default Home
