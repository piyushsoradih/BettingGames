import { React, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import { FaRupeeSign } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FcAutomatic } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { RiAccountCircleLine } from "react-icons/ri";
import { BalanceContext } from "../UserMoney/BalanceContext";
import { CiCirclePlus } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { PiHandWithdrawLight } from "react-icons/pi";

import { PiHandWithdraw } from "react-icons/pi";

const Home = () => {
  const { balance, setBalance } = useContext(BalanceContext);

  return (
    <>
      <div className="HomeMain">
        <div className="header">
          <div className="subHeader" id="subHeader1">
            <div className="profile">
              <Link to="/LoginSign" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CgProfile id="profile" />
              </Link>
            </div>
            {/* <div className="diamond">
              <IoDiamondOutline id="diamond" />
            </div> */}
            <div>

            </div>
          </div>
          <div className="subHeader" id="subHeader2">
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "center" }}>
              <h4 style={{ margin: "0", fontSize: "19px", color: balance > 99999 ? "red" : "#42f54b" }}>
                {balance > 0 ? balance.toFixed(2) : "0.00"}
              </h4>
              <h4 style={{ marginLeft: "4px", color: "white", marginTop: "1px", fontSize: "13px" }}>INR</h4>
            </div>
          </div>
          <div className="subHeader" id="subHeader3">
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", height: "100%" }}>
              <div style={{ display: "flex", alignItems: 'center', width: "100%", height: "50%" }}>
                <Link to="/Payments" className="deposit-btn">
                  DEPOSIT
                </Link>
              </div>
            </div>
            <div className="subHeader3Child">

            </div>
            <div className="subHeader3Child" id="notification">
              <IoNotificationsOutline id="notification_Icon" />
            </div>
          </div>
        </div>
        <div className="body">
          {/* Trending */}
          <div className="subBody">
            <div className="subBodyChild" id="subBodyChildHeading">
              <MdOutlineLocalFireDepartment id="trending" />
              <h4 style={{ color: "#766c6c" }}>TRENDING</h4>
            </div>
            <div className="subBodyChild" id="subBodyChildGame">

              <div className="AllGame" id="ValueMatcher">
                <Link to="/ValueMatcher">
                  <button style={{ width: "100%", height: "100%", opacity: "0" }}>Go</button>
                </Link>
              </div>
              <div className="AllGame" id="aviator">
                <Link to="/Bet">
                  <button style={{ width: "100%", height: "100%", opacity: "0" }}>Go</button>
                </Link>
              </div>
            </div>
          </div>
          {/* For You */}
          <div className="subBody">
            <div className="subBodyChild" id="subBodyChildHeading">
              <LuCrown id="crown" />
              <h3 style={{ color: "#766c6c", marginLeft: "3px" }}>FOR YOU</h3>
            </div>
            <div className="subBodyChild" id="subBodyChildGame">
              <div className="AllGame" id="snake">
                <a href="https://ajeet0486.github.io/Snake-Game/"><button style={{ width: "100%", height: "100%", opacity: "0" }}></button></a>

              </div>
            </div>
          </div>

        </div>
        <div className="company" style={{
          display: "flex", flexDirection: "row", justifyContent: "center",
          alignItems: "center", height: "6%", width: "100%"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}><h3>Powered By</h3></div>
          <div className="companyLogo"></div>

        </div>
        <div className="footer">
          <div className="subFooter">
            <Link to="/BankForm" style={{ textDecoration: 'none', color: "green" }}>
              <CiBank id="Setting" />
            </Link>
          </div>
          <div className="subFooter">
            <div className="subFooter">
              {/* <LuDollarSign id="refer" /> */}
            </div>
          </div>
          <div className="subFooter" id="wallet">
            <Link to="/Withdraw" style={{ textDecoration: 'none', color: "green" }}>
              <PiHandWithdraw id="walletIcon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;