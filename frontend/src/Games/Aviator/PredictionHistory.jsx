import React, { useState, useContext,useEffect} from 'react';
import { RandomContext } from '../../RandomContext'
import { IoIosTimer } from "react-icons/io";

const PredictionHistory = () => {
    const { randomNum,waiting } = useContext(RandomContext);
    const [stack, setStack] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (waiting) {
            setStack(prev => [...prev, randomNum.toFixed(2)]);
        }
    }, [waiting, randomNum]);
    
    // const displayedStack = stack.slice(0, 6);
    const [betLimit,setBetLimit]=useState(-5);
    const [betsDisplay,setBetsDisplay]=useState("block")



    const [fullBetHeight,setFullBetHeight]=useState("10%")
    const showFullBetHistory=()=>{
        setFullBetHeight(prev=>prev ==="10%"?"40%":"10%")
        setBetLimit(prev=>prev===-5?-20:-5)
        setBetsDisplay(prev=>prev==="block"?"flex":"block")
    }
    const displayedStack = [...stack].slice(betLimit).reverse();
    return (
        <div

            style={{
                // width: '250px',
                // height:"100%",
                width: '106%',
                padding: '4px',
                // margin: '20px auto',
                backgroundColor: '#4c4949',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'height 0.3s ease',
                fontFamily: 'Arial, sans-serif',
                position: "relative",
                display: "flex",
                flexDirection: "row-reverse",
                height:fullBetHeight,
                top:"45%",
                
            }}
        >
            <button style={{ width: "18px", height: "18px" }} onClick={showFullBetHistory}>
                <IoIosTimer />
            </button>
            <ul style={{ listStyle: 'none', paddingLeft: 0, flexDirection: "row",display: "flex",flexWrap: "wrap"}}>
                {displayedStack.map((num, idx) => (
                    <li key={idx} style={{flex: "0 0 auto", marginRight: "1px",marginLeft:"1px", color: "#4287f5", height: "19px", width: "60px", background: "black", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* {num}<span>x</span> */}
                        <h5 style={{color:num>=2?"#ef42f5":"green"}}>{num}</h5><span><h5 style={{color:num>=2?"#ef42f5":"green"}}>x</h5></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PredictionHistory;
