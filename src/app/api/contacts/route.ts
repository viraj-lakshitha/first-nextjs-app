import { HttpResponseStatus } from "@/app/api/contacts/types";
import establishDatabaseConn from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact/ContactSchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(params: NextRequest) {
  // Read request body content
  const { name, email, message } = await params.json();

  try {
    // Establish database connection and add new contact details
    await establishDatabaseConn();
    await Contact.create({ name, email, message });
    return NextResponse.json({
      status: HttpResponseStatus.CREATED,
      code: 201,
    });
  } catch (error: any) {
    let errorMessage = "";

    // Gather validation errors froms mongoose
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map((e: any) => e.message);
      errorMessage = errors.join(", ");
    } else {
      errorMessage = error.message;
    }
    return NextResponse.json({
      status: HttpResponseStatus.INTERNAL_SERVER_ERROR,
      code: 500,
      message: errorMessage,
    });
  }
}

export async function GET() {
  try {
    await establishDatabaseConn();
    const response = await Contact.find({})
    return NextResponse.json({
      status: HttpResponseStatus.OK,
      code: 200,
      data: [],
    });
  } catch (error) {
    return NextResponse.json({
      status: HttpResponseStatus.INTERNAL_SERVER_ERROR,
      code: 500,
      message: error,
    });
  }
}
