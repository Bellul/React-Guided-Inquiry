import React from "react";
import BasicInfo from "./Medium";

const BasicInfoList = () => {
    const peoplesInfo = [

        {name: "Bellul",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"},

        {name: "Justin",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"},

        {name: "Jordon",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"},

        {name: "Osiel",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"},

        {name: "Jodi",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"},

        {name: "Faith",
        age: "24",
        dateOfBirth: "06/25/1998",
        number: "555-555-5555",
        email: "myemail@gmail.com",
        address: "123 Main St",
        city: "New York",
        state: "NY"}
    ]; 

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default BasicInfoList;