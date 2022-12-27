import React from 'react'
import FooterList from './FooterList'
import FooterListItem from './FooterListItem'

const FooterAllLinks = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <FooterList text={"Featured Courses"}>
                <FooterListItem text={"Business Analytics"} href={"#"} />
                <FooterListItem text={"SQL"} href={"#"} />
                <FooterListItem text={"Data Engineering with AWS"} href={"#"} />
                <FooterListItem text={"Self Driving Car Engineer"} href={"#"} />
            </FooterList>
            <FooterList text={"ACL Schools"} >
                <FooterListItem text={"School of Artificial Intelligence"} href={"#"} />
                <FooterListItem text={"School of Autonomous Systems"} href={"#"} />
                <FooterListItem text={"School of Cybersecurity"} href={"#"} />
                <FooterListItem text={"School of Data Science"} href={"#"} />
            </FooterList>
            <FooterList text={"Enterprise"} >
                <FooterListItem text={"ACL for Enterprise"} href={"#"} />
                <FooterListItem text={"Data Science for Enterprise"} href={"#"} />
            </FooterList>
            <FooterList text={"Support"} >
                <FooterListItem text={"Contact Us"} href={"#"} />
                <FooterListItem text={"Help and FAQ"} href={"#"} />
            </FooterList>
        </div>
    )
}

export default FooterAllLinks