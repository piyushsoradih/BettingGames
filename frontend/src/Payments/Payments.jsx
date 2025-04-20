import React from 'react';
import './Payments.css';
import { Link } from 'react-router-dom';

const Payments = () => {
    return (
        <div className="payments-container">
            <div className="payments-card">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="back-button" style={{ color:"green" }}>&#8592; Go Back</button>
                </Link>

                <h3 className="payments-title">Select an Amount</h3>
                <div className="payments-buttons">
                    {/* {[11, 21, 31, 41].map(amount => (
                        <button key={amount} className="payment-button">
                            ₹{amount} <span className="upi-sign">⚡UPI</span>
                        </button>
                    ))} */}
                    <Link to="/Eleven" className="payment-button">
                        ₹{11} <span className="upi-sign">⚡UPI</span>
                    </Link>

                    <Link to="/TwentyOne" className="payment-button">
                        ₹{21} <span className="upi-sign">⚡UPI</span>
                    </Link>
                    <Link to="/ThirtyOne" className="payment-button">
                        ₹{31} <span className="upi-sign">⚡UPI</span>
                    </Link>
                    <Link to="/FortyOne" className="payment-button">
                        ₹{41} <span className="upi-sign">⚡UPI</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Payments;
