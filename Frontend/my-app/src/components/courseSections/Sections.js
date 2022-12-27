import React from 'react'
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import SectionsBody from './SectionsBody';
import NotesBody from './NotesBody';
const Sections = ({ visible, courseObj, owned }) => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const sectionsAccordion = courseObj.sections.map((section) => [
        <Accordion open={open === section.idx && owned}>
            <AccordionHeader onClick={() => handleOpen(section.idx)}>
                {section.title}
            </AccordionHeader>
            <AccordionBody>
                {section.title === "PDF Notes"
                    ?
                    <NotesBody pdfLink={section.pdfURL} />
                    :
                    <SectionsBody
                        section={section}
                    />}
            </AccordionBody>
        </Accordion>

    ])

    if (visible)
        return (
            <>
                <h2 className=" mx-36 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Course Content</h2>
                <div className='mx-36 border-b-gray-200 border-b' />
                <div className='mx-40 my-10 mb-16 px-10 pt-2 shadow-2xl rounded-xl'>
                    <Fragment>

                        {sectionsAccordion}
                        {/* <Accordion open={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                PDF Notes
                            </AccordionHeader>
                            <AccordionBody>
                               
                            </AccordionBody>
                        </Accordion> */}
                    </Fragment>
                </div>

            </>

        )
}

export default Sections