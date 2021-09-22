import React from 'react'

const Links = ({user}) => {
    const { links } = user
    return (
        <div>
            <a href={links.github}>{links.github}</a>
            <a href={links.linkedin}>{links.linkedin}</a>
        </div>
    )
}

export default Links
