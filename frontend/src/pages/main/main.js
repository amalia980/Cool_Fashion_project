// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import LatestCollections from './latestCollections'
import './main.scss'
import ShopByCategory from './shopByCategory'
import arrowDownIcon from '../../assets/icons/arrowDown.png'
import ShipmentReturnBanner from './shipmentReturnBanner'
import SaleBanner from './saleBanner'
import TiktokSlide from './tiktokSlide'

const Main = () => {
  return (
    <>
      <div className="hero">
        {/* HERO */}
        <div className="hero-overlay">
          <h1 className="hero-text">MISFITS ONLY</h1>
          <img src={arrowDownIcon} alt="arrow icon" />
        </div>
      </div>

      <ShopByCategory />
      {/* section 1. shoppa efter kategori */}

      <div className="big-bgImage">
        {/* bakgrundsbild */}

        {/* section 2. ikoner med text och SPRING DEAL banner*/}
        <ShipmentReturnBanner />

        <SaleBanner />

        <LatestCollections />
        {/* section 3. senaste kollektionerna */}

        {/* section 4.  följ oss på tiktok med slider*/}
        <TiktokSlide />
      </div>
    </>
  )
}

export default Main

//Huvudsidan, a.k.a MAIN page
