import { Link } from 'react-router-dom';
import RestaurantStyle from './RestaurantItem.module.css';

function RestaurantItem({ restaurant }) {

    return (
        <Link to={`/restaurant/${restaurant.BSSH_NM}`}>
            <div className={RestaurantStyle.RestaurantItem}> 
                <h3>
                    Address : { restaurant.ADRES } <br/>
                    Number : { restaurant.MBTLNUM } <br/>
                    name : { restaurant.BSSH_NM } <br/>
                </h3>
            </div>
        </Link>
    );
}

export default RestaurantItem;