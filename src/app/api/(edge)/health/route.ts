import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { geolocation } from "@vercel/edge";

export const runtime = "edge";

export const GET = async (request: NextRequest) => {
  const { city, country } = geolocation(request);
  return NextResponse.json(
    {
      message: "UP",
      city: `${city}`,
      country: `${country}`,
    },
    {
      status: 200,
      statusText: "OK",
    }
  );
};
