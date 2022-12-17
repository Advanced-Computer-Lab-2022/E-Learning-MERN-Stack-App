import React from 'react'
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import SectionsBody from './SectionsBody';
const Sections = ({ visible }) => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    if (visible)
        return (
            <>
                <h2 class=" mx-36 mb-8 text-4xl tracking-tight font-extrabold text-blue-500">Course Content</h2>
                <div className='mx-36 border-b-gray-200 border-b' />
                <div className='mx-40 my-10 mb-16 px-10 pt-2 shadow-2xl rounded-xl'>
                    <Fragment>
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                Section 1
                            </AccordionHeader>
                            <AccordionBody>
                                <SectionsBody />
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                Section 2
                            </AccordionHeader>
                            <AccordionBody>
                                <SectionsBody />
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                Section 3
                            </AccordionHeader>
                            <AccordionBody>
                                <SectionsBody />
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>

            </>

        )
}

export default Sections