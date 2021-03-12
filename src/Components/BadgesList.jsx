import React from 'react'
import './styles/BadgesList.css';
import logoTwitter from '../images/twitter-logo-3.png'

class Badgeslist extends React.Component{
    render(){
        return(
            <ul className = "list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key ={badge.id}>
                            <div className="container__badger">
                                <div className="row-3 left">
                                    <img className = "avatar" src={badge.avatarUrl} alt=""/>
                                </div>
                                <div className="row-9 col_Right">
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                    <div className="Twitter__name">
                                        <img className = "Twitter__logo" src={logoTwitter} alt=""/>
                                        @{badge.twitter}
                                    </div>
                                    <p className = "job">{badge.jobTitle}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Badgeslist;