import React, { useState } from 'react';
import Collapsed from './Collapsed';
import Expanded from './Expanded'

const Accordion = ({ children }) => {
    const [open, setOpen] = useState('')

    const handleOpen = (e) => {
        const id = e.target.getAttribute('data-id')
        id === open ? setOpen('') : setOpen(id)
    }
    
    return <div>
        {React.Children.map(children, child => {
            const id = child.props.children[0].props.id
            
            const collapsed = React.cloneElement(child.props.children[0], {
                handleOpen
            })
            
            const expanded = child.props.children[1]

            return <div>
                {collapsed}
                {id === open && expanded}
            </div>
        })}
    </div>
}

Accordion.Collapsed = Collapsed
Accordion.Expanded = Expanded
Accordion.data = ({ children }) => children

export default Accordion;