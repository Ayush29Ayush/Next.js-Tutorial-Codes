import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
// export async function GET() {
//     return new Response("Profile API Data", { status: 200 });
// }

export async function GET(request: NextRequest) {
  //! Approach 1 to access the headers
  const requestHeaders = new Headers(request.headers);

  const cookie = requestHeaders.get("Cookie");
  console.log(cookie);
  console.log("-----------------------------");

  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log("-----------------------------");

  //! Approach 2 to access the headers
  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "10");

  console.log(cookieStore.getAll());

  return new Response("<h1>Profile API Data</h1>", {
    status: 200,
    headers: { 
      "Content-Type": "text/html",
      "Set-Cookie": "user=John Doe, theme=dark",
    },
  });
}
