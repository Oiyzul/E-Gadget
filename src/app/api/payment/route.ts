import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { amount, name, email, phone } = await request.json();

  try {
    const response = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      {
        store_id: "your_store_id",
        signature_key: "your_signature_key",
        amount,
        payment_type: "VISA",
        currency: "BDT",
        tran_id: "unique_transaction_id",
        cus_name: name,
        cus_email: email,
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1206",
        cus_country: "Bangladesh",
        cus_phone: phone,
        cus_fax: "Not-Applicable",
        ship_name: name,
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: "1206",
        ship_country: "Bangladesh",
        desc: "Payment for products",
        success_url: "http://yourdomain.com/success",
        fail_url: "http://yourdomain.com/fail",
        cancel_url: "http://yourdomain.com/cancel",
        type: "json",
      }
    );

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
