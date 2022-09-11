import './tiktokSlide.scss'
import { Carousel } from 'react-bootstrap'
import tiktokimg1 from '../../../src/assets/images/TIKTOK_SLIDER/goth_girl.png'
import tiktokimg2 from '../../../src/assets/images/TIKTOK_SLIDER/street_girl.png'
import tiktokimg3 from '../../../src/assets/images/TIKTOK_SLIDER/whiteJeans_girl.png'
import tiktokicon from '../../../src/assets/icons/tiktok.png'

const TiktokSlide = () => {
  return (
    <div className="tiktok-wrapper">
      <div className="tiktok-left-wrapper">
        <h1>BEHÖVER DU INSPIRATION?</h1>
        <h1>FÖLJ OSS PÅ TIKTOK</h1>
        <a href="https://www.tiktok.com/en/" target="blank">
          <img src={tiktokicon} alt={tiktokicon} />
        </a>
      </div>

      <div className="tiktok-right-wrapper">
        <div className="tiktok-carousel-wrapper">
          <Carousel className="tiktok-carousel">
            <Carousel.Item className="tiktok-img">
              <img src={tiktokimg1} alt={tiktokimg1} />
            </Carousel.Item>
            <Carousel.Item className="tiktok-img">
              <img src={tiktokimg2} alt={tiktokimg2} />
            </Carousel.Item>
            <Carousel.Item className="tiktok-img">
              <img src={tiktokimg3} alt={tiktokimg3} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default TiktokSlide
