import './ToastMessage.scss'
import closeBtn from '../../assets/icons/close_black.png';
import { useEffect } from 'react';

const ToastMessage = (props) => {
    const { setShowToast } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false)
          }, 3500);
          return () => clearTimeout(timer);
    })

  return (
    <>
          <div className="message-container" id="shadow">
              <p>Produkt tillagd i varukorgen!</p>
              <img src={closeBtn} alt="close-btn" onClick={() => setShowToast(false)} />
      </div>
    </>
  )
}

export default ToastMessage
