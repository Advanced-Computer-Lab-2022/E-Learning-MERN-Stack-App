import React from 'react'

export default function Feedback() {
    return (
        <>
            <div className="container">
                <div className="client-feedback ">
                    <div className="pic float-left">
                        <div className="inner">
                            <img src='../../../../images/bakery-color.png' alt="pic-1" />
                        </div>
                    </div>
                    <div className="feedback float-left">
                        <div className="inner">
                            <h3>Alex ander</h3>
                            <span><i className="fa-solid fa-location-dot"></i> United</span>
                            <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos!
                                dolor sit amet, consectetur adipisicing elit. Animi quae veritatis et saepe expedita
                                facere, repellat dolore eligendi praesentium harum.</p>
                            <div className="rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                </div>
            </div>
        </>
    )
}
