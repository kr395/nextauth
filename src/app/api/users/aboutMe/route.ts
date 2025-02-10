import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utility/getDataFromTocken";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password");
    
    if (!user) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 404 });
    }

    return NextResponse.json({ message : "user found" ,user }, { status: 200 });



  } catch (error : any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
