import * as React from "react"

function StoreItems({jsonData}) {

    const butt = ({jsonData}) => {
        <ul>
        {Object.entries(jsonData).map(([key, value]) => {
            <p key={key}><b>{key}:</b> {value}</p>  
        })}
        </ul>
    }

    return (
        <div>
            hello
            {butt}
            hello
        </div>
    )
}

export default StoreItems
