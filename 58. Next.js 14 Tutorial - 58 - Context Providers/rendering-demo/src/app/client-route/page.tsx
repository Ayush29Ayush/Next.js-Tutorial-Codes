"use client";
// import { serverSideFunction } from "../utils/server-utils";
import { useTheme } from "../components/theme-provider";

export default function ClientRoutePage() {
  console.log("Client Route Rendered");
  // const result = serverSideFunction();
  return (
    <>
      <h1 style={{ color: useTheme().colors.primary }}>Client Route Page...</h1>
      {/* <p>{result}</p> */}
    </>
  );
}
