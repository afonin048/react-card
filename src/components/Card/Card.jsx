import React from 'react';

const Card = ({cources}) => {

    
    return (
        <div>
            {
                cources.map(cource => {
                    return (
                        <div className="card" key={cource.id}>
                            <div className="image__container">
                                <img
                                    src={cource.image}
                                    alt=""
                                />
                                <div className="level">{cource.level}</div>
                            </div>
                            <h3 className="card__title">{cource.title}</h3>

                            <div className="card__info">
                                <div className="user">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                        alt="John Doe"
                                    />
                                    <p>John Doe</p>
                                </div>
                                <div className="rating">
                                    <p>{cource.rating}</p>
                                </div>
                            </div>
                            {cource.isMyCource &&
                                <div className="card__info">
                                    <div>1234 Student</div>
                                    <div>5 Modules</div>
                                    <div>1h 30m</div>
                                </div>}
                        </div>
                    )
                })

            }
        </div>
    );
};

export default Card;