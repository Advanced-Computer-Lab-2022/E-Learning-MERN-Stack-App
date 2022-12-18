import React from 'react'
import FooterList from './FooterList'
import FooterListItem from './FooterListItem'

const FooterAllLinks = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <FooterList text={"IT Categories"}>
                <FooterListItem text={"Holder"} href={"#"} />
                <FooterListItem text={"Holder2"} href={"#"} />
                <FooterListItem text={"Holder3"} href={"#"} />
                <FooterListItem text={"Holder4"} href={"#"} />
            </FooterList>
            <FooterList text={"Business Categories"} >
                <FooterListItem text={"Holder"} href={"#"} />
                <FooterListItem text={"Holder2"} href={"#"} />
                <FooterListItem text={"Holder3"} href={"#"} />
                <FooterListItem text={"Holder4"} href={"#"} />
            </FooterList>
            <FooterList text={"Other Categories"} >
                <FooterListItem text={"Holder"} href={"#"} />
                <FooterListItem text={"Holder2"} href={"#"} />
            </FooterList>
            <FooterList text={"Contact Us"} >
                <FooterListItem text={"Holder"} href={"#"} />
                <FooterListItem text={"Holder2"} href={"#"} />
            </FooterList>
        </div>
    )
}

export default FooterAllLinks