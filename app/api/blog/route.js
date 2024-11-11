import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/model/BlogModel";

export async function GET(request) {
    await connectDB();
    console.log("Blog get hit");
    return NextResponse.json({ msg: "api working" });
}

export async function POST(request) {
    await connectDB();
    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get("image");
    if (!image) {
        return NextResponse.json({ error: "Image not provided" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;
    const blogData = {
        title: `${formData.get("title")}`,
        description: `${formData.get("description")}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get("authorImg")}`
    }
    await BlogModel.create(blogData);
    console.log("Blog saved successfully");

    return NextResponse.json({ success: true, msg: "blog added" });
}
