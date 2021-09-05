import React from 'react'

function StoreReport({storeName="No name", digital, disc}) {
    const digitalCode = digital ? <li className="green"><a href={`${digital}`} alt={ `Get the digital PS5 from ${storeName}` }>{storeName} - digital Edition (In stock)</a></li> : <li className="grey">{storeName} - digital Edition (out of stock)</li>
    const discCode = disc ? <li className="green"><a href={`${disc}`} alt={ `Get the digital PS5 from ${storeName}` }>{storeName} - disc Edition (In stock)</a></li> : <li className="grey">{storeName} - disc edition (out of stock)</li>

    return (
        <div>
            {digitalCode}
            {discCode}
        </div>
    )
}

export default StoreReport
