import React from 'react';

function Brokerage() {
    return ( 
    <div className='container'>
        <div className='row p-5 mt-5 border-top'>
            <div className='col-8 p-4'>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-5 text-center'>Brokerage calculator</h3></a>
                <ul className='text-muted fs-6'>
                <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                <li>₹100 per order for futures and options.</li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
                </ul>
            </div>
            <div className='col-4 p-4'>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
            </div>
        </div>
    </div>
    );
}

export default Brokerage;