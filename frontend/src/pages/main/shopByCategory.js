import './shopByCategory.scss'
import byxor from '../../assets/images/KATEGORIER/byxor.jpg'
import toppar from '../../assets/images/KATEGORIER/toppar.jpg'
import klänning_kjolar from '../../assets/images/KATEGORIER/klänning_kjol.jpg'
import skjortor from '../../assets/images/KATEGORIER/skjortor.jpg'
import ytterkläder from '../../assets/images/KATEGORIER/ytterkläder.jpg'
import { useNavigate } from 'react-router-dom'
//för att ändra rubrikerna
import { useContext, useState } from 'react'
import { ImageContext } from '../../context/ImageContext'



const ShopByCategory = () => {
   
  

  const navigate = useNavigate()

  const { headline, file } = useContext(ImageContext);
  
  const [originalHeadline] = useState({
    headlineOrg1: headline.headline1 || "BYXOR",
    headlineOrg2: headline.headline2 ||  "TOPPAR",
    headlineOrg3: headline.headline3 || "KLÄNNINGAR & KJOLAR",
    headlineOrg4: headline.headline4 || "SKJORTOR",
    headlineOrg5: headline.headline5 || "YTTERKLÄDER",
  })


  return (
    <>

      {/* section 1 SHOP BY CATEGORY */}
      <div className="shop-by-category-div">
        <div className="category-header">
          <h1>SHOPPA EFTER KATEGORI</h1>
        </div>

        <div className="category-images">
          <div onClick={() => navigate('/pants')} className="category-wrapper">
            <div className="category-image">
              <img src={byxor} alt="byxor kategori" />
              <img src={file.file1.name} alt="byxor kategori" />


              
              <figcaption>
                <p>VISA BYXOR</p>
              </figcaption>
            </div>
            <b>{originalHeadline.headlineOrg1}</b>
          </div>

          <div onClick={() => navigate('/tops')} className="category-wrapper">
            <div className="category-image">
              <img src={toppar} alt="toppar kategori" />
              <figcaption>
                <p>VISA TOPPAR</p>
              </figcaption>
            </div>
            <b>{originalHeadline.headlineOrg2}</b>
          </div>

          <div
            onClick={() => navigate('/skirtsdresses')}
            className="category-wrapper"
          >
            <div className="category-image">
              <img src={klänning_kjolar} alt="klänning & kjolar kategori" />
              <figcaption>
                <p> VISA KLÄNNINGAR & KJOLAR</p>
              </figcaption>
            </div>
            <b> <b>{originalHeadline.headlineOrg3}</b></b>
          </div>

          <div onClick={() => navigate('/shirts')} className="category-wrapper">
            <div className="category-image">
              <img src={skjortor} alt="skjortor kategori" />
              <figcaption>
                <p>VISA SKJORTOR</p>
              </figcaption>
            </div>
            <b> <b>{originalHeadline.headlineOrg4}</b></b>
          </div>

          <div
            onClick={() => navigate('/outerwear')}
            className="category-wrapper"
          >
            <div className="category-image">
              <img src={ytterkläder} alt="ytterkläder kategori" />
              <figcaption>
                <p>VISA YTTERKLÄDER</p>
              </figcaption>
            </div>
            <b> <b>{originalHeadline.headlineOrg5}</b></b>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopByCategory
