// import {useEffect, useState} from 'react';
// import {useSearchParams} from 'react-router-dom';
// import { TouristAPI } from "../apis/TouristAPI"
// import TouristItem from '../components/TouristItem';


// function TouristSearchResult() {

//     const [searchParams] = useSearchParams();

//     const [touristList, setTouristDetails] = useState([]);

//     const touristName = searchParams.get('TRRSRT');

//     useEffect(
//         () => {
//             TouristAPI().then(res => res.filter(tourist => tourist.TRRSRT.match(TRRSRT)))
//             .then(res => setTouristDetails(res));
//         },
//         [TRRSRT]
//     );

//     console.log(touristList);

//     return (
//         <div>
//             <h1>검색 결과</h1>
//             <div>
//             {touristList.map(tourist => <TouristItem key={tourist.TRRSRT} tourist={tourist} />)}
//             </div>
//         </div>
//     );
// }

// export default TouristSearchResult;