// import { TouristDetailAPI } from "../apis/TouristAPI"
import { RestaurantAPI } from "../apis/TouristAPI"
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function RestaurantDetails() {

    const {BSSH_NM} = useParams();

    console.log(BSSH_NM);

    const [restaurant, setRestaurantDetails] = useState({
        ADRES: '',
        MBTLNUM : '',
        BSSH_NM: ''

    });

    useEffect(
        () => {
            const touristrandom = RestaurantAPI();
            // const result = touristrandom.filter(tourist => tourist.TRRSRT === TRRSRT);
            // setTouristDetails(TouristAPI(TRRSRT));
            
            console.log(touristrandom);
        },
        []
    );

    return (
        <>
            <h2>상세 설명</h2>
            <h3>Address : { restaurant.ADRES } </h3>
            <h3>Number : { restaurant.MBTLNUM } </h3>
            <h3>name : { restaurant.BSSH_NM }</h3>
        </>
    );
}

export default RestaurantDetails;

