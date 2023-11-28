import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    return (
        <div>
            <p>Artist Data Goes Here!</p>
            <p> ID: {id}</p>
        </div>
    )
}

export default ArtistView