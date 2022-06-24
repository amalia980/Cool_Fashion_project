import React from 'react'

const DropDownModal = ({open, children}) => {

  if(!open) return null;

  return (

    <div style={{zIndex:"10000"}}> 
        {children}
    </div>
  )
}

export default DropDownModal