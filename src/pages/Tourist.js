import { useState, useEffect } from 'react';
import { TouristAPI } from "../apis/TouristAPI"
import TouristItem from '../components/TouristItem';
import {useNavigate} from 'react-router-dom';
import boxStyle from './Tourist.module.css';

function Tourist() {

    const [touristList, setTouristList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            TouristAPI().then(res => setTouristList(res));
        },
        []
    );

    const onClickHandler = () => {

        navigate(`/tourist/search?touristName=${searchValue}`);
    }

    return (
        <>
            <h1>관광지 목록</h1>
            <div>
                <input
                    type="search"
                    name="touristName"
                    value={searchValue}
                    onChange={ e => setSearchValue(e.target.value)}
                />
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {touristList.map(tourist => <TouristItem key={tourist.TRRSRT} tourist={tourist} />)}
            </div>
        </>
    );
}

export default Tourist;