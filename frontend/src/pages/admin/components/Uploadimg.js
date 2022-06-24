import React, {useContext} from 'react'
import { ImageContext } from '../../../context/ImageContext'

//Style
import "../scss/uploadingImg.scss"

const Uploadimg = () => {

  const { file, setFile } = useContext(ImageContext);


  function handleUpload(event) {
    setFile({ ...file, [event.target.name]: event.target.files[0] });
    console.log(file)
  }

  const ImageThumb1 = ({ image1 }) => {
  return <img className='imageUploadImage' style={{width:"12rem"}} src={URL.createObjectURL(image1)} alt={image1.name} />;
  };
  const ImageThumb2 = ({ image2 }) => {
    return <img style={{width:"12rem"}} src={URL.createObjectURL(image2)} alt={image2.name} />;
  };
  const ImageThumb3 = ({ image3 }) => {
    return <img  style={{width:"12rem"}} src={URL.createObjectURL(image3)} alt={image3.name} />;
  };
  const ImageThumb4 = ({ image4 }) => {
    return <img  style={{width:"12rem"}} src={URL.createObjectURL(image4)} alt={image4.name} />;
  };
  const ImageThumb5 = ({ image5 }) => {
    return (
      <>
      <img  style={{width:"12rem"}} src={URL.createObjectURL(image5)} alt={image5.name} />
      </>
    )
   
  };



  return (
    <div>

      <div className='wrapperAlPictures'>
      <div className='changePictures'>
      <input type="file" 
      accept="image/png, image/jpeg"
      name="file1" 
      onChange={handleUpload} />
      {file.file1 && <ImageThumb1 image1={file.file1} />}
      </div>

      <div className='changePictures'>
      <input type="file" 
      name="file2"
       onChange={handleUpload} />
      {file.file2 && <ImageThumb2 image2={file.file2} />}
      </div>

      <div className='changePictures'>
      <input type="file" 
      name="file3" 
      onChange={handleUpload} />
      {file.file3 && <ImageThumb3 image3={file.file3} />}
      </div>

      <div className='changePictures'>
      <input type="file" 
      name="file4"
       onChange={handleUpload} />
      {file.file4 && <ImageThumb4 image4={file.file4} />}
      </div>

      <div className='changePictures'>
      <input type="file" 
      name="file5"
       onChange={handleUpload} />
      {file.file5 && <ImageThumb5 image5={file.file5} />}
      </div>
     
     </div>
    </div>
    
  )
}


export default Uploadimg