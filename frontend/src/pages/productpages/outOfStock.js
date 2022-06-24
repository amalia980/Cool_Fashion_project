import './outOfStock.scss';
import { useEffect } from 'react';

const OutOfStock = (props) => {

    const { setOutOfStock } = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            setOutOfStock(false)
          }, 3500);
          return () => clearTimeout(timer);
    })

    return (
        <>
        <div onClick={() => setOutOfStock(false)} className="outofstock-underlay">
                <div className="outOfStock-container">
                    <div className="outOfStock-wrapper">
                        <p>Produkten finns inte i lager.</p>
                        <p>Är du säker på att du vill köpa produkten?</p>
                    </div>
            </div>
            </div>
            </>
    )
}

export default OutOfStock;