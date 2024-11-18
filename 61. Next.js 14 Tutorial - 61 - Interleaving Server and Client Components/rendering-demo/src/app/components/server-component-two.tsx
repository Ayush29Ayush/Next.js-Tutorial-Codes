import fs from "fs";

export default function ServerComponentTwo() {
    fs.readFileSync("src/app/components/server-component-two.tsx", "utf-8");

    return <h1>ServerComponentTwo</h1>;
}