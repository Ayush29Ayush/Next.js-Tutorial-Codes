import fs from "fs";
import ServerComponentTwo from "./server-component-two";

export default function ServerComponentOne() {
  fs.readFileSync("src/app/components/server-component-one.tsx", "utf-8");

  return (
    <>
      <h1>ServerComponentOne</h1>
      <ServerComponentTwo />
    </>
  );
}
