"use client";
import { useState } from "react";

export const ClientComponentOne = () => {
    const [name, setName] = useState("Hello World");
    return <h1>Client Component One</h1>;
};