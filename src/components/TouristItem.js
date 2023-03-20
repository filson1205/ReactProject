import { Link } from 'react-router-dom';
import TouristStyle from './TouristItem.module.css';

function TouristItem({ tourist }) {

    return (
        <Link to={`/tourist/${tourist.TRRSRT}`}>
            <div className={TouristStyle.TouristItem}> 
                <h3>
                    Address : { tourist.ADRES } <br/>
                    Number : { tourist.TELNO } <br/>
                    name : { tourist.TRRSRT } <br/>
                </h3>
            </div>
        </Link>
    );
}

export default TouristItem;

