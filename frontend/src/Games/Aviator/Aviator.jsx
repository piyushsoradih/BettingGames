import { React, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import './Aviator.css'
import { FaRupeeSign } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import AutoCashButton from './AutoCashButton';
import { IoIosTimer } from "react-icons/io";
import PredictionHistory from './PredictionHistory';
import WaitProgress from './WaitProgress';
import { CgProfile } from "react-icons/cg";
import Home from '../../Home/Home';
import { RandomContext } from '../../RandomContext'

const Aviator = ({ increaserFirstEarned, earnedFirst, handleBlur2, betAmount2, isEditing2, handleClick2, handleChange2, betAmount1, isEditing, handleBlur1, handleChange1, handleClick1, addMoney2, money2, addedMoney2, canCollect2, collectMoney2, moneyDeducted2, addMoneyClicked2, firstBetValue, secondBetValue, increaseBet1, increaseBet2, decreaseBet1, decreaseBet2, money, addedMoney, balance, addMoney, collectMoney, multiplier, waiting, addMoneyClicked, moneyDeducted, canCollect }) => {

    const [betHistoryManage,setBetHistoryManage]=useState("1");
    // const {waiting} = useContext(RandomContext);
    const [isBet1, setisBet1] = useState(false)
    const [autoPlayDisplay1, setAutoPlayDisplay1] = useState("none")
    const [betPart1Height, setBetPart1Height] = useState("50%")
    const switchToAuto1 = () => {
        setisBet1(!isBet1)
        setAutoPlayDisplay1(prev => prev === "none" ? "block" : "none");
        setBetPart1Height(prev => prev === "50%" ? "55%" : "50%")
    }


    const [isBet2, setisBet2] = useState(false)
    const [autoPlayDisplay2, setAutoPlayDisplay2] = useState("none")
    const [betPart2Height, setBetPart2Height] = useState("50%")
    const switchToAuto2 = () => {
        setisBet2(!isBet2)
        setAutoPlayDisplay2(prev => prev === "none" ? "block" : "none");
        setBetPart2Height(prev => prev === "50%" ? "55%" : "50%")
    }
    const floatEarnedMoney = {
        opacity: canCollect ? 1 : 0,
        visibility: !canCollect ? "visible" : "hidden",
        // visibility: canCollect ? "visible" : "hidden",
        top: !canCollect ? "0%" : "10%",
        color: "white",
        width: "100%",
        height: "15%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        transition: "opacity 3s linear, top 1s linear",
        zIndex:"2"
    };

    return (
        <div className="MainBox">
            <div>

            </div>
            <div className="box1">
                {/* <div style={{height:"5%"}}>

                </div> */}
                <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "column", }}>
                    {/* <div style={{ height: "20%", border: "1px solid red"}}> */}
                    <div style={{ height: "100px", border: "1px solid black" }}>
                        <div style={{ display: "flex",alignItems:"center",width: "85%",height:"22px", backgroundColor: "black", borderRadius: "10px", transform: "translateX(9%)", justifyContent: "space-around" }}>

                            <h4 style={{ color: "white" }}>All Bets</h4>
                            <h4 style={{ color: "white" }}>My Bets</h4>
                            <h4 style={{ color: "white" }}>Top</h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
                            <div>
                                <h3 style={{ color: "white" }}>ALL BETS</h3>
                                <h3 style={{ color: "white" }}>1011</h3>
                            </div>
                            <div style={{ height: "100%", display: "flex", }}>
                                <h4 style={{ color: "white",opacity:"0.7" }}>Previous Round</h4>
                            </div>
                            
                        </div>
                        <div style={{height:"2px",border:"1px solid black",backgroundColor:"black"}}></div>
                        <div style={{height:"25px",display:"flex",justifyContent:"space-between",alignItems: "center"}}>
                            <div><h5 style={{ color: "white",opacity:"0.7" }}>User</h5></div>
                            <div><h5 style={{ color: "white",opacity:"0.7" }}>Bet INR X</h5></div>
                            <div><h5 style={{ color: "white",opacity:"0.7" }}>Cash Out INR</h5></div>
                        </div>
                    </div>
                    <div style={{ height: "80%", overflow: "auto" }}>
                        
                        <div style={{ height: "95%" }}>
                            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                                return (
                                    <div style={{color:"white",opacity:"0.8",height: "35px", width: "100%", border: "1px solid white",display:"flex",justifyContent:"space-between" }}>
                                        <h4 style={{display:!waiting?"block":"none" }}>Ajeet</h4>
                                        <h4 style={{display:!waiting?"block":"none" }}>8,000.00</h4>
                                        <h4 style={{display:!waiting?"block":"none" }}>16,000.00</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            <div className="box2">
                <div className="AviatorMain">

                    <div className="subAviatorMain" id="subAviatorMain1">

                        <div id="subAviatorMain1_part1">
                            <div>
                                <h2 style={{ color: "red" }}>Aviator</h2>
                            </div>
                            <div style={{ width: "40%", height: "100%" }}>

                            </div>
                        </div>

                        <div id="subAviatorMain1_part2">
                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center"
                            }}><div id="money">

                                    <h4 style={{ margin: "0", color: balance > 99999 ? "red" : "#42f54b", fontSize: "19px" }}>{balance > 0 ? balance.toFixed(2) : 0}</h4>

                                    <h4 style={{ marginLeft: "4px", color: "white", marginTop: "1px", fontSize: "13px" }}>INR</h4></div></div>

                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center"
                            }}><TiMessage id="messageIcon" /></div>
                        </div>
                    </div>

                    <div className="subAviatorMain" id="subAviatorMain2" >
                        <div style={floatEarnedMoney}>
                            <div style={{ boxShadow: "1px 1px 10px rgba(255, 255, 255, 0.8)", border: "1px solid white", height: "100%", width: "70%", borderRadius: "26px", display: "flex", backgroundColor: "#3b3f47" }}>
                                <div style={{ width: "50%", display: "flex", justifyContent: "center", flexDirection: "column", opacity: "0.5", borderRadius: "26px" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white", fontSize: "1.5vh" }}>You have cashed</h3></div>
                                    <div style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white", fontSize: "1.5vh" }}>out!</h3></div>
                                    <div><h3 className="earnedMoney" style={{ color: "white", display: "flex", justifyContent: "center" }}>{Number(increaserFirstEarned).toFixed(2) + "x"}</h3></div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "50%", borderRadius: "26px", backgroundColor: "#212529" }}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <h3 className="earnedMoney">Win INR</h3>
                                        <h3 className="earnedMoney" style={{ display: "flex", justifyContent: "center" }}>{Number(earnedFirst).toFixed(2)}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", background: "#4c4949" }}>

                            {/* <div style={{ width: "94%",position:"absolute",height:"10%"}}> */}
                            <div style={{ width: "94%", position: "absolute", height: "100%",zIndex:"1"}}>
                                <PredictionHistory />
                            </div>
                            {/* <div style={{ width: "9%", height: "100%", display: "flex", alignItems: "center" }}>
                                <button style={{ width: "78%", height: "85%" }}>
                                    <IoIosTimer />
                                </button>
                            </div> */}
                        </div>
                        <div style={{ width: "100%", backgroundColor: "white", height: "70%", borderBottom: "none", display: "flex", flexDirection: "row", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
                            <div style={{ backgroundColor: "black", width: "4vh", height: "100%", borderTop: "none", borderLeft: "none", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                                <div className="round"></div>
                            </div>
                            <div style={{ width: "100%", height: "100%", display: waiting ? "none" : "flex", justifyContent: "center", alignItems: "center" }} id="aviatorImg">

                            </div>
                            <div style={{ width: "45%" }} id="planeFly">
                                <div style={{ display: "flex", alignItems: "center", position: "relative", top: "27%" }}>
                                    <h1 style={{ fontSize: "4em", color: "white", zIndex: "7", fontSize: "7vh", color: "black" }}>{waiting ? <WaitProgress /> : multiplier.toFixed(2)}</h1>
                                    <h2 style={{ color: "white", fontSize: "6vh", marginTop: "2px", color: "black", position: "relative", display: waiting ? "none" : "block" }}>X</h2>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "4vh", display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: "none", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>
                            <div className="roundHorizontal"></div>

                        </div>

                    </div>
                    <div className="subAviatorMain" id="subAviatorMain3">
                        <div className="BetPart1">
                            {/* <div className="sub_subAviatorMain" id="sub_subAviatorMain3" style={{ height: betPart1Height }}> */}
                            <div className="sub_subAviatorMain" id="sub_subAviatorMain3">
                                <div className="part1_sub_subAviatorMain" id="part1_sub_subAviatorMain3">
                                    <div id="MainBet">
                                        <div className="Bet" id="Bet1" style={{ backgroundColor: isBet1 ? "black" : "#4c4949" }}><button onClick={switchToAuto1} style={{ height: "100%", width: "100%", border: "none", backgroundColor: isBet1 ? "black" : "#4c4949", borderRadius: "50%" }}><h6 style={{ color: "white", fontSize: "16px" }}>Bet</h6></button></div>
                                        <div className="Bet" id="BetAuto1" style={{ backgroundColor: isBet1 ? "#4c4949" : "black" }}><button onClick={switchToAuto1} style={{ height: "100%", width: "100%", border: "none", backgroundColor: isBet1 ? "#4c4949" : "black", borderRadius: "50%" }}><h6 style={{ color: "white", fontSize: "16px" }}>Auto</h6></button></div>

                                    </div>
                                </div>
                                <div className="part2_sub_subAviatorMain" id="part1_sub_subAviatorMain3">
                                    <div className="BetButtonIncrease" id="BetButtonIncrease1">
                                        <div className="BetButtonIncrease11">
                                            <div style={{
                                                width: "3vh", height: "3vh", border: "1px solid black", borderRadius: "50%", borderColor: "#ffffff80", display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}><button disabled={!waiting} onClick={decreaseBet1} style={{ color: "#ffffff80", backgroundColor: "black", width: "100%", height: "100%", borderRadius: "50%", border: "none" }}><h2 style={{ fontSize: "2vh" }}>-</h2></button></div>
                                            <div>
                                                <div>
                                                    {isEditing ? (
                                                        <input
                                                            style={{
                                                                width: "62px",
                                                                height: "25px",
                                                                resize: "none",
                                                                fontSize: "14px",
                                                                padding: "5px",
                                                                borderRadius: "5px",
                                                                border: "1px solid #ccc",
                                                                outline: "none",
                                                                textAlign: "center",
                                                            }}
                                                            disabled={!waiting}
                                                            type="number"
                                                            value={betAmount1}
                                                            onChange={handleChange1}
                                                            onBlur={handleBlur1}
                                                            autoFocus
                                                        />
                                                    ) : (
                                                        <h3 style={{ color: "white", fontSize: "2vh" }} onClick={handleClick1} >{Number(firstBetValue).toFixed(2)}</h3>
                                                    )}
                                                </div>
                                            </div>
                                            <div style={{
                                                width: "3vh", height: "3vh", border: "1px solid black", borderRadius: "50%", borderColor: "#ffffff80", display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}><button disabled={!waiting} onClick={increaseBet1} style={{ color: "#ffffff80", backgroundColor: "black", width: "100%", height: "100%", borderRadius: "50%", border: "none" }}><h2 style={{ fontSize: "2vh" }}>+</h2></button></div>
                                        </div>
                                        <div className="BetButtonIncrease12">
                                            <div className="BetButtonIncrease12_part">
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>50.00</h1>
                                                </div>

                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>100.00</h1>
                                                </div>
                                            </div>
                                            <div className="BetButtonIncrease12_part">
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>150.00</h1>
                                                </div>
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black"
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>200.00</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="BetButton" id="BetButton1">
                                        {!addMoneyClicked ? (
                                            <button
                                                className="BetOnClick"
                                                style={{ width: "85%", height: "83%" }}
                                                onClick={addMoney}
                                                disabled={balance < 2 || balance > 999999 || firstBetValue > balance || !waiting || moneyDeducted || addMoneyClicked}
                                            >
                                                <h1 style={{ fontSize: "3vh" }}>{Number(firstBetValue).toFixed(2)} <span>INR</span></h1>
                                            </button>
                                        ) : (
                                            <button
                                                className="BetOnClick"
                                                style={{ width: "85%", height: "83%" }}
                                                onClick={collectMoney}
                                                disabled={!canCollect || waiting || addedMoney === 0}
                                            >
                                                {waiting ? <h1>Wait...</h1> : canCollect ? <div><h2 style={{ fontSize: "3vh" }}>CASH OUT</h2> <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><h2 style={{ fontSize: "3vh" }}>{Number(money).toFixed(2)}</h2><h2 style={{ marginLeft: "4px", fontSize: "3vh" }}>INR</h2></div></div> : <h1>Collected</h1>}

                                            </button>
                                        )}
                                    </div>

                                </div>
                                <div className="AutoPlay" style={{ display: autoPlayDisplay1, backgroundColor: "#4c4949" }}>
                                    <div className="AutoPlay2">
                                        <div className="subAutoPlay" id="AutoplayLogo" style={{ width: "41%", display: "flex", justifyContent: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <h6 style={{ color: "white" }}>Auto Bet</h6>
                                            </div>
                                            <div className="subAutoPlay" id="AutoCashOut" style={{ marginLeft: "4px" }}>
                                                <AutoCashButton />
                                            </div>
                                        </div>

                                        <div className="subAutoPlay" id="AutoCashOut" style={{ display: "flex", alignItems: "center", width: "59%", height: "100%", justifyContent: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <div>
                                                    <h6 style={{ color: "white" }}>Auto Cash Out</h6>
                                                </div>
                                                <div className="subAutoPlay" id="AutoCashOut" style={{ marginLeft: "4px" }}>
                                                    <AutoCashButton />
                                                </div>
                                            </div>
                                            <div className="subAutoPlay" id="multiplier" style={{
                                                marginLeft: "6px", width: "37%",
                                                height: "100%", display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                <input
                                                    style={{
                                                        width: "70%",
                                                        height: "63%",
                                                        resize: "none",
                                                        fontSize: "14px",
                                                        padding: "5px",
                                                        borderRadius: "10px",
                                                        border: "1px solid #ccc",
                                                        outline: "none",
                                                        textAlign: "center",
                                                        background: "black",
                                                        color: "white",
                                                        border: "none"
                                                    }}
                                                    type="number"
                                                    value={1.10}
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BetPart2">
                            <div className="sub_subAviatorMain" id="sub_subAviatorMain3">
                                <div className="part1_sub_subAviatorMain" id="part1_sub_subAviatorMain3">
                                    <div id="MainBet" >
                                        <div className="Bet" id="Bet1" style={{ backgroundColor: isBet2 ? "black" : "#4c4949" }}><button onClick={switchToAuto2} style={{ height: "100%", width: "100%", border: "none", backgroundColor: isBet2 ? "black" : "#4c4949", borderRadius: "50%" }}><h4 style={{ color: "white", fontSize: "16px" }}>Bet</h4></button></div>
                                        <div className="Bet" id="BetAuto1" style={{ backgroundColor: isBet2 ? "#4c4949" : "black" }}><button onClick={switchToAuto2} style={{ height: "100%", width: "100%", border: "none", backgroundColor: isBet2 ? "#4c4949" : "black", borderRadius: "50%" }}><h4 style={{ color: "white", fontSize: "16px" }}>Auto</h4></button></div>
                                    </div>
                                </div>
                                <div className="part2_sub_subAviatorMain" id="part1_sub_subAviatorMain3">
                                    <div className="BetButtonIncrease" id="BetButtonIncrease1">
                                        <div className="BetButtonIncrease11">
                                            <div style={{
                                                width: "3vh", height: "3vh", border: "1px solid black", borderRadius: "50%", borderColor: "#ffffff80", display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}><button disabled={!waiting} onClick={decreaseBet2} style={{ color: "#ffffff80", backgroundColor: "black", width: "100%", height: "100%", borderRadius: "50%", border: "none" }}><h2 style={{ fontSize: "2vh" }}>-</h2></button></div>
                                            <div>
                                                <div>
                                                    {isEditing2 ? (
                                                        <input
                                                            style={{
                                                                width: "62px",
                                                                height: "25px",
                                                                resize: "none",
                                                                fontSize: "14px",
                                                                padding: "5px",
                                                                borderRadius: "5px",
                                                                border: "1px solid #ccc",
                                                                outline: "none",
                                                                textAlign: "center",
                                                            }}
                                                            disabled={!waiting}
                                                            type="number"
                                                            value={betAmount2}
                                                            onChange={handleChange2}
                                                            onBlur={handleBlur2}
                                                            autoFocus
                                                        />
                                                    ) : (
                                                        <h3 style={{ color: "white", fontSize: "2vh" }} onClick={handleClick2} >{Number(secondBetValue).toFixed(2)}</h3>

                                                    )}
                                                </div>
                                            </div>
                                            <div style={{
                                                width: "3vh", height: "3vh", border: "1px solid black", borderRadius: "50%", borderColor: "#ffffff80", display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}><button disabled={!waiting} onClick={increaseBet2} style={{ color: "#ffffff80", backgroundColor: "black", width: "100%", height: "100%", borderRadius: "50%", border: "none" }}><h2 style={{ fontSize: "2vh" }}>+</h2></button></div>
                                        </div>
                                        <div className="BetButtonIncrease12">
                                            <div className="BetButtonIncrease12_part">
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>50.00</h1>
                                                </div>

                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>100.00</h1>
                                                </div>
                                            </div>
                                            <div className="BetButtonIncrease12_part">
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black",
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>150.00</h1>
                                                </div>
                                                <div style={{
                                                    width: "68%",
                                                    height: "100%",
                                                    border: "1px solid black",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    color: "#ffffff80",
                                                    backgroundColor: "black"
                                                }}>
                                                    <h1 style={{ fontSize: "2vh" }}>200.00</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="BetButton" id="BetButton1">
                                        {!addMoneyClicked2 ? (
                                            <button
                                                className="BetOnClick"
                                                style={{ width: "85%", height: "83%" }}
                                                onClick={addMoney2}
                                                disabled={balance < 2 || balance > 999999 || secondBetValue > balance || !waiting || moneyDeducted2 || addMoneyClicked2}
                                            >
                                                <h1 style={{ fontSize: "3vh" }}>{Number(secondBetValue).toFixed(2)} <span>INR</span></h1>
                                            </button>
                                        ) : (
                                            <button
                                                className="BetOnClick"
                                                style={{ width: "85%", height: "83%" }}
                                                onClick={collectMoney2}
                                                disabled={!canCollect2 || waiting || addedMoney2 === 0}
                                            >
                                                {waiting ? <h1>Wait...</h1> : canCollect2 ? <div><h2 style={{ fontSize: "3vh" }}>CASH OUT</h2> <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><h2 style={{ fontSize: "3vh" }}>{Number(money2).toFixed(2)}</h2><h2 style={{ marginLeft: "4px", fontSize: "3vh" }}>INR</h2></div></div> : <h1>Collected</h1>}

                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="AutoPlay" style={{ display: autoPlayDisplay2, backgroundColor: "#4c4949" }}>
                                    <div className="AutoPlay2">
                                        <div className="subAutoPlay" id="AutoplayLogo" style={{ width: "41%", display: "flex", justifyContent: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <h6 style={{ color: "white" }}>Auto Bet</h6>
                                            </div>
                                            <div className="subAutoPlay" id="AutoCashOut" style={{ marginLeft: "4px" }}>
                                                <AutoCashButton />
                                            </div>
                                        </div>

                                        <div className="subAutoPlay" id="AutoCashOut" style={{ display: "flex", alignItems: "center", width: "59%", height: "100%", justifyContent: "center" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <div>
                                                    <h6 style={{ color: "white" }}>Auto Cash Out</h6>
                                                </div>
                                                <div className="subAutoPlay" id="AutoCashOut" style={{ marginLeft: "4px" }}>
                                                    <AutoCashButton />
                                                </div>
                                            </div>
                                            <div className="subAutoPlay" id="multiplier" style={{
                                                marginLeft: "6px", width: "37%",
                                                height: "100%", display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                <input
                                                    style={{
                                                        width: "70%",
                                                        height: "63%",
                                                        resize: "none",
                                                        fontSize: "14px",
                                                        padding: "5px",
                                                        borderRadius: "10px",
                                                        border: "1px solid #ccc",
                                                        outline: "none",
                                                        textAlign: "center",
                                                        background: "black",
                                                        color: "white",
                                                        border: "none"
                                                    }}
                                                    type="number"
                                                    value={1.10}
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="subAviatorMain" id="subAviatorMain4"></div> */}
                </div >
            </div>

        </div >
    )
}
export default Aviator
