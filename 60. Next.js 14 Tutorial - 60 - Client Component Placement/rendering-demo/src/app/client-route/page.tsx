"use client";
// import { serverSideFunction } from "../utils/server-utils";
// import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";

export default function ClientRoutePage() {
  console.log("Client Route Rendered");
  const result = clientSideFunction();
  return (
    <>
      {/* <h1 style={{ color: useTheme().colors.primary }}>Client Route Page...</h1> */}
      <h1>Client Route Page...</h1>
      <p>{result}</p>
    </>
  );
}
