import { useState, useEffect } from 'react';
import { RestaurantAPI } from "../apis/TouristAPI"
import RestaurantItem from '../components/RestaurantItem';
import {useNavigate} from 'react-router-dom';
import boxStyle from './Restaurant.module.css';

function Restaurant() {

    const [restaurantList, setRestaurantList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            RestaurantAPI().then(res => setRestaurantList(res));
        },
        []
    );

    const onClickHandler = () => {

        navigate(`/restaurant/search?restaurantName=${searchValue}`);
    }

    return (
        <>
            <h1>맛집 목록</h1>
            <div>
                <input
                    type="search"
                    name="restaurantName"
                    value={searchValue}
                    onChange={ e => setSearchValue(e.target.value)}
                />
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {restaurantList.map(restaurant => <RestaurantItem key={restaurant.BSSH_NM} restaurant={restaurant} />)}
            </div>
        </>
    );
}

export default Restaurant;