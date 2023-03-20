// import { TouristDetailAPI } from "../apis/TouristAPI"
import { TouristAPI } from "../apis/TouristAPI"
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function TouristDetails() {

    const {TRRSRT} = useParams();

    console.log(TRRSRT);

    const [tourist, setTouristDetails] = useState({
        ADRES: '',
        TELNO : '',
        TRRSRT: ''

    });

    useEffect(
        () => {
            const touristrandom = TouristAPI();
            // const result = touristrandom.filter(tourist => tourist.TRRSRT === TRRSRT);
            // setTouristDetails(TouristAPI(TRRSRT));
            
            console.log(touristrandom);
        },
        []
    );

    return (
        <>
            <h2>상세 설명</h2>
            <h3>Address : { tourist.ADRES } </h3>
            <h3>Number : { tourist.TELNO } </h3>
            <h3>name : { tourist.TRRSRT }</h3>
        </>
    );
}

export default TouristDetails;


