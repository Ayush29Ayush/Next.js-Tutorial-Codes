import { NextRequest } from "next/server";
import { headers } from "next/headers";
// export async function GET() {
//     return new Response("Profile API Data", { status: 200 });
// }

export async function GET(request: NextRequest) {
    //! Approacch 1 to access the headers
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders);
    console.log(requestHeaders.get("Authorization"));

    console.log("---------------------------------------------------------------------------");

    //! Approacch 2 to access the headers
    // const headersList = await headers();
    const headersList = headers();
    console.log(headersList);
    // console.log(headersList.get("Authorization"));

    return new Response("<h1>Profile API Data</h1>", {
        status: 200,
        headers: { "Content-Type": "text/html" }
      });
} 