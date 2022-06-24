import './rodeoCollection.scss';
import headerRodeo from '../../assets/images/collection_posters/RODEO/rodeoText.png';
import girlTrailor from '../../assets/images/collection_posters/RODEO/girlTrailor.jpg';
import leatherCoatGirl from '../../assets/images/collection_posters/RODEO/leatherCoatGirl.jpg';
import cocaColaGirl from '../../assets/images/collection_posters/RODEO/cocaColaGirl.jpg';
import womanInBlouse from '../../assets/images/collection_posters/RODEO/womanBlouse.jpg';
import womanInRedTop from '../../assets/images/collection_posters/RODEO/redTopWoman.jpg';
import motorBikeGirl from '../../assets/images/collection_posters/RODEO/motorbikeGirl.jpg';
import blacknwhite1 from '../../assets/images/collection_posters/RODEO/blacknwhiteGirl.jpg';
import blacknwhite2 from '../../assets/images/collection_posters/RODEO/manJeanOutfit.jpg';
import blacknwhite3 from '../../assets/images/collection_posters/RODEO/blacknwhiteGirl2.jpg';
import manWhiteTop from '../../assets/images/collection_posters/RODEO/manWhiteTop.jpg';
import rocknrollGirl from '../../assets/images/collection_posters/RODEO/rocknrollGirl.jpg';
import guyCar from '../../assets/images/collection_posters/RODEO/guyCar.jpg';
import girlJeansOutfit from '../../assets/images/collection_posters/RODEO/girlJeansOutfit.jpg';
import girlCar from '../../assets/images/collection_posters/RODEO/girlCar.jpg';
import cowGirl from '../../assets/images/collection_posters/RODEO/cowGirl.jpg';


const RodeoCollection = () => {

    return (
        <>
        <div className="div-header-pic">
            <img src={headerRodeo} alt="rodeo header" /> 
        </div>

        <div className='section-1'>
            <img src={girlTrailor} alt="girl with trailor" />
        </div>

        <div className='div-pics-row'>
            <img src={leatherCoatGirl} alt="girl in leather coat" />
            <img src={cocaColaGirl} alt="coca cola girl" />
            <img src={womanInBlouse} alt="woman in blouse" />
            <img src={womanInRedTop} alt="woman in red top" />
        </div>

        <div className='motorBike-girl'>
            <img src={motorBikeGirl} alt="girl on motorbike" />
        </div>

        <div className='second-pics-row'>
            <img src={blacknwhite1} alt="girl in black and white" />
            <img src={blacknwhite2} alt="man in black and white" />
            <img src={blacknwhite3} alt="second girl in black and white" />
        </div>

        <div className='third-pics-in-row'>
            <img src={manWhiteTop} alt="man in white top" />
            <img src={rocknrollGirl} alt="rock n roll girl" />
        </div>

        <div className='last-pics-row'>
            <img src={guyCar} alt="" />
            <img src={girlJeansOutfit} alt="" />
            <img src={girlCar} alt="" />
            <img src={cowGirl} alt="" />
        </div>
    
        </>
    )
}

export default RodeoCollection;