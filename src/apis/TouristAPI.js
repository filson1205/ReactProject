export async function TouristAPI() {

    return await fetch('https://apis.data.go.kr/5050000/touristDestinationService/getTouristDestination?serviceKey=sOvAk%2BhapLnIKE1MVXdCTL8RJX1EvLU2Tc0EsOyBUoupq2p3YN0xYJRWRM0YLi2Jy2mPu2uR2m3IT2Atpfzu4A%3D%3D&pageNo=1&numOfRows=100')
                .then(res => res.json())
                .then(data => data.response.body.items.item)
};

// export async function TouristDetailAPI(TRRSRT) {

//     return await fetch('https://apis.data.go.kr/5050000/touristDestinationService/getTouristDestination?serviceKey=sOvAk%2BhapLnIKE1MVXdCTL8RJX1EvLU2Tc0EsOyBUoupq2p3YN0xYJRWRM0YLi2Jy2mPu2uR2m3IT2Atpfzu4A%3D%3D&pageNo=1&numOfRows=100')
//                 .then(res => res.json())
//                 .then(data => data.response.body.items.item)
// };


export async function RestaurantAPI() {

    return await fetch('https://apis.data.go.kr/5050000/hwangridangilFoodHotPlaceService/getHwangridangilFoodHotPlace?serviceKey=sOvAk%2BhapLnIKE1MVXdCTL8RJX1EvLU2Tc0EsOyBUoupq2p3YN0xYJRWRM0YLi2Jy2mPu2uR2m3IT2Atpfzu4A%3D%3D&pageNo=1&numOfRows=100')
                .then(res => res.json())
                .then(data => data.response.body.items.item)
};