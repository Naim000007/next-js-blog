import EmailModel from "@/lib/model/EmailModel";

const { connectDB } = require("@/lib/config/db");

const LoadDB = async () => {
    // Connect to MongoDB database
    await connectDB();
}

LoadDB()

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`,
    }

    await EmailModel.create(emailData)
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
}