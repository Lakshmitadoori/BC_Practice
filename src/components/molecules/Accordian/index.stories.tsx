import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SimpleAccordian from ".";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const contact: string = require("../../../../public/assests/images/contact.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Email: string = require("../../../../public/assests/images/Email.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dob: string = require("../../../../public/assests/images/Dob.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Phone: string = require("../../../../public/assests/images/Phone.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Zipcode: string = require("../../../../public/assests/images/ZipCode.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Security: string = require("../../../../public/assests/images/Security.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Liscense: string = require("../../../../public/assests/images/Liscense.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Calender: string = require("../../../../public/assests/images/Calender.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Clear: string = require("../../../../public/assests/images/Clear.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const adjudication: string = require("../../../../public/assests/images/adjudication.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Package: string = require("../../../../public/assests/images/Package.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Calender2: string = require("../../../../public/assests/images/Calender2.svg").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const clock: string = require("../../../../public/assests/images/clock.svg").default;

export default {
  title: "molecules/SimpleAccordian",
  component: SimpleAccordian,
  argTypes: {},
} as ComponentMeta<typeof SimpleAccordian>;

const Template: ComponentStory<typeof SimpleAccordian> = (args) => (
    <SimpleAccordian {...args} />
  );
export const Candidate = Template.bind({});
Candidate.args ={
    title:"Candidate Information",
    content:"This is the content inside Candidate Information Accordian",
    cards: [
        {name:"Name", details: "john Smith",src:contact},
        {name:"Email", details:"John.smith@checkr.com",src:Email},
        {name:"DOB", details:"1990-09-10 (26)",src:Dob},
        {name:"Phone", details:"(555) 555-5555",src:Phone},
        {name:"Zipcode", details: "94158",src:Zipcode},
        {name:"Social Security ", details: "XXX-XX-6789",src:Security},
        {name:"Drivers License", details: "FTEST1111 (CA)",src:Liscense},
        {name:"Created At ", details: "Nov 29,2016 11:05:57 AM",src:Calender},
    ],
};
export const report = Template.bind({});
report.args ={
    title:"Report Information",
    content:"This is the content inside Report Information Accordian",
    cards: [
        {name:"Status", details: "Clear",src:Clear},
        {name:"Adjudication", details:"-",src:adjudication},
        {name:"Package", details:"Employee pro",src:Package},
        {name:"Created At ", details:"Dec 1, 2016 12:00:00 PM",src:Calender},
        {name:"Completed Date", details: "Dec 4, 2016 12:00:00 PM",src:Calender2},
        {name:"Turn Around Time  ", details: "1 Day , 14 hours",src:clock},
    ],
};
