
import React from 'react';
import './index.css';


function Card(props) {

    return (
        <div>
            <>


                <div className="cards">
                    <div className="card">
                        <img src={props.api.avatar_url} alt="Card image cap" className="card__img" />
                        <div className="card__info">
                            <span className="card__category">{props.api.type}</span>
                            <h3 className="card__title"> {props.api.login}</h3>

                        </div>
                    </div>
                </div>

            </>
        </div>
    )
}
export default Card;


