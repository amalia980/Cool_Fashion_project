//styling imports
import './streetCredCollection.scss';
import headerStreet from '../../assets/images/collection_posters/STREET_CRED/streetcredText.png';
import guyOverall from '../../assets/images/collection_posters/STREET_CRED/guyOverall.jpg';
import redSuit from '../../assets/images/collection_posters/STREET_CRED/redSuit.jpg';
import girlRedJacket from '../../assets/images/collection_posters/STREET_CRED/girlRedJacket.jpg';
import redSweaterGirl from '../../assets/images/collection_posters/STREET_CRED/redSweaterGirl.jpg';
import radioGuy from '../../assets/images/collection_posters/STREET_CRED/guyRadio.jpg';
import shortsGirl from '../../assets/images/collection_posters/STREET_CRED/shortsGirl.jpg';
import twoguys from '../../assets/images/collection_posters/STREET_CRED/twoGuysYellow.jpg';
import girlInCap from '../../assets/images/collection_posters/STREET_CRED/blueGirl.jpg';
import girlInOrange from '../../assets/images/collection_posters/STREET_CRED/orangeNglasses.jpg';
import guyEyes from '../../assets/images/collection_posters/STREET_CRED/guyEyes.jpg';
import girlMoped from '../../assets/images/collection_posters/STREET_CRED/girlMoped.jpg';

const StreetCredCollection = () => {

    return (
        <>
            <div className='header'>
                <img src={headerStreet} alt="street cred header" />
            </div>

            <div className='sec-1'>
                <img src={guyOverall} alt="guy in overall" />
            </div>

            <div className='sec-2'>
                <img src={redSuit} alt="guy in red suit" />
                <img src={girlRedJacket} alt="girl in red jacket" />
            </div>

            <div className='sec-3'>
                <div className='overlay'>
                    <div className='pics-in-row'>
                        <img src={redSweaterGirl} alt="girl in red sweater" />
                        <img src={radioGuy} alt="guy with radio" />
                        <img src={shortsGirl} alt="girl in shorts" />
                    </div>
                </div>
            </div>

            <div className='sec-4'>
                <img src={twoguys} alt="two guys" />
                <img src={girlInCap} alt="girl in cap" />
            </div>

            <div className='sec-5'>
                <img src={girlInOrange} alt="girl in orange" />
                <img src={guyEyes} alt="guy covering his eyes" />
                <img src={girlMoped} alt="girl on moped" />
            </div>
            </>
    )
}

export default StreetCredCollection;

// Sidan för Street cred Club kollektionen från första sidan