import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  
  const { order, shippingAddress, totalPrice } = payload.data;
 
  const {
    customerName,
    email,
    phone,
    address,
    postalCode,
    city,
    country,
  } = shippingAddress;
  const transactionId = `TXN-${Date.now()}`;

  try {
    const response = await axios.post(process.env.PAYMENT_URL as string, {
      store_id: process.env.STORE_ID as string,
      signature_key: process.env.SIGNATURE_KEY as string,
      tran_id: transactionId,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/confirmation?orderId=${order}&transactionId=${transactionId}&status=success`,
      fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/confirmation?status=fail`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      currency: "BDT",
      amount: totalPrice,
      cus_name: customerName,
      cus_email: email,
      cus_phone: phone,
      cus_add1: address,
      cus_city: city,
      cus_postcode: postalCode,
      cus_country: country,
      desc: "Payment for products",
      type: "json",
    });

    return NextResponse.json({
      success: true,
      payment_url: response.data.payment_url,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Payment initiation failed",
    });
  }
}
