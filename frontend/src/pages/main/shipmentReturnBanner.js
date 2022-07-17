import './shipmentReturnBanner.scss'
import freeReturnIcon from '../../../src/assets/icons/freeReturn.png'
import freeShippingIcon from '../../../src/assets/icons/freeShipping.png'
import shippingWorldwideIcon from '../../../src/assets/icons/shippingAroundTheGlobe.png'

const ShipmentReturnBanner = () => {
  return (
    <div className="shipmentReturn-wrapper">
      <div className="shipmentReturn-divs">
        <img src={shippingWorldwideIcon} alt={shippingWorldwideIcon} />
        <p>vi skickar snabbt, över hela världen och skattefritt</p>
      </div>

      <div className="shipmentReturn-divs">
        <img src={freeShippingIcon} alt={freeShippingIcon} />
        <p>Gratis frakt vid beställningar över 300kr för alla nya medlemmar</p>
      </div>

      <div className="shipmentReturn-divs">
        <img src={freeReturnIcon} alt={freeReturnIcon} />
        <p>45 dagars GRATIS returpolicy inklusive alla varor</p>
      </div>
    </div>
  )
}

export default ShipmentReturnBanner
