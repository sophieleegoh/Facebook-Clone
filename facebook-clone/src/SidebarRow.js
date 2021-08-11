import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core';

// You can pass Components as props, just make sure they start with a capital (eg. Icons)
function SidebarRow({ src, Icon, title }) {
    return (
        <div className='sidebarRow'>
            { src && <Avatar src={src} />}
            { Icon && <Icon />}
            <h4>{ title }</h4>
        </div>
    )
}

export default SidebarRow
