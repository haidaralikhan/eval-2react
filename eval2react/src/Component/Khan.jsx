import React from 'react'

const khan = (props) => {
  return (
    <div>
       haidra ali khan

       {props.props.map((el)=>{
        <div>
            <h2>
                {el.name}
            </h2>
        </div>
       })}
    </div>
  )
}

export default khan
