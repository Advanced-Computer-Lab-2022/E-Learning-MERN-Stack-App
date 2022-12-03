import React from 'react'

export default function Feedback() {
    return (
        <>
            <div className="container">
                <div class="client-feedback ">
                    <div class="pic float-left">
                        <div class="inner">
                            <img src='../../../../images/bakery-color.png' alt="pic-1" />
                        </div>
                    </div>
                    <div class="feedback float-left">
                        <div class="inner">
                            <h3>Alex ander</h3>
                            <span><i class="fa-solid fa-location-dot"></i> United</span>
                            <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dignissimos!
                                dolor sit amet, consectetur adipisicing elit. Animi quae veritatis et saepe expedita
                                facere, repellat dolore eligendi praesentium harum.</p>
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>
            </div>
        </>
    )
}
