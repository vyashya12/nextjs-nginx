import { NextResponse, NextRequest } from "next/server";


export type ResponseData = {
  
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

// GET request function to fetch images and description and render in client
export async function GET(req: NextRequest) {
  let dataList: ResponseData[] = []
    await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => dataList = (data.products));

  
  return NextResponse.json(
    { message: "Successfully got Products", dataList },
    { status: 200 }
  );
}