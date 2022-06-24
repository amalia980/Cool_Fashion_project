import './latestCollections.scss'
import arcadiaClub from '../../assets/images/collection_posters/arcadiaClub.png'
import streetCred from '../../assets/images/collection_posters/streetCred.png'
import rodeo from '../../assets/images/collection_posters/rodeo.png'
import { useNavigate } from 'react-router-dom'

/* section 3 SENASTE KOLLEKTIONERNA */
const LatestCollections = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="senaste-kollektionera-text">
        <h1>SENASTE KOLLEKTIONERNA</h1>
      </div>

      <div className="kollektion-rad">
        <div
          onClick={() => navigate('/streetCred')}
          className="kollektion-image"
        >
          <img src={streetCred} alt="street cred kollektion" />
          <figcaption>
            <p>VISA KOLLEKTION</p>
          </figcaption>
        </div>

        <div onClick={() => navigate('/rodeo')} className="kollektion-image">
          <img src={rodeo} alt="rodeo kollektion" />
          <figcaption>
            <p>VISA KOLLEKTION</p>
          </figcaption>
        </div>

        <div onClick={() => navigate('/arcadia')} className="kollektion-image">
          <img src={arcadiaClub} alt="arcadia club kollektion" />
          <figcaption>
            <p>VISA KOLLEKTION</p>
          </figcaption>
        </div>
      </div>
    </>
  )
}

export default LatestCollections
