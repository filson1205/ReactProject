import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'orangered'
    };

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined }>HOME</NavLink></li>
                <li><NavLink to="/tourist" style={ ({isActive}) => isActive? activeStyle: undefined }>TOURIST</NavLink></li>
                <li><NavLink to="/restaurant" style={ ({isActive}) => isActive? activeStyle: undefined }>RESTAURANT</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;