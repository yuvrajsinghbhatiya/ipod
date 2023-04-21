import React from 'react'
import './linkscreen.css'

function LinkScreen(props) {
    const {active} = props

    const closeSidebar = () => {
        props.toggleSidebar()
    }

  return (
    <div className='page' onClick={closeSidebar}>
        {active === 0}
        {active === 1}
        {active === 2}
        {active === 3}
    </div>
    
  )
}

export default LinkScreen