import { useState } from "react"

function GalleryItem() {
    const [view, setView] =  useState(false)

    return (
        <div onClick={(e) => setView(!view)} style={{ display: 'inline-block' }}>
            <p>GalleryItem</p>
        </div>
    )
}

export default GalleryItem