import React from 'react'
import Card from './Card'
import CardsHolder from './CardsHolder'
import CardTag from './CardTag'
const homepage = () => {
    return (
        <CardsHolder>
            <Card
                text={"Text 1"}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                imgsrc={"./img/courseimg.png"}
            >
                <CardTag text={"Category 1"} />
                <CardTag text={"Category 2"} />
                <CardTag text={"Category 3"} />
            </Card>
            <Card
                text={"Text 2"}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                imgsrc={"./img/courseimg.png"}
            >
                <CardTag text={"Category 1"} />
            </Card>
            <Card
                text={"Text 3"}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
                imgsrc={"./img/courseimg.png"}
            >
                <CardTag text={"Category 1"} />
            </Card>
        </CardsHolder>
    )
}

export default homepage