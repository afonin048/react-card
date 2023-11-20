import React from 'react';

const Card = ({ cource }) => {
    const { id, image, level, title, user, rating, students, modules, duration, isMyCource } = cource

    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - (hours * 3600)) / 60)

    return (
        <div>

            <div className="card" key={id}>
                <div className="image__container">
                    <img
                        src={image}
                        alt=""
                    />
                    <div className="level">{level}</div>
                </div>
                <h3 className="card__title">{title}</h3>

                <div className="card__info">
                    <div className="user">
                        <img
                            src={user.avatar}
                            alt={user.name}
                        />
                        <p>{user.name}</p>
                    </div>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
                </div>
                {
                    isMyCource &&
                    <div className="card__info">
                        <div>{students} Student</div>
                        <div>{modules} Modules</div>
                        <div>{hours}h {minutes}m</div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Card;