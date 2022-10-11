import React from 'react';

import './TopBar.css'
class TopBar extends React.Component {
    render(){
        return(
            <div className='topBar'>
                <img className = "myLogo" src={'https://i.ibb.co/sJzBrrv/logo.png'} alt = 'thealt'/>
            </div>
        )
    }
}

export default TopBar;