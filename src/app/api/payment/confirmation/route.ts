import Order from "@/lib/models/orderModel";
import axios from "axios";
// import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
// import { join } from "path";

export async function POST(requset: NextRequest) {
  const searchParams = requset.nextUrl.searchParams;
  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  // console.log(orderId, transactionId);
  // Verify the payment confirmation data
  const verifiedResponse = await verifyPayment(transactionId!);
  console.log(verifiedResponse);
  let message;
  if (verifiedResponse && verifiedResponse.pay_status === "Successful") {
    await Order.findByIdAndUpdate(orderId, {
      isPaid: true,
      paidAt: verifiedResponse.date,
    });
    message = "Payment successful";
  } else {
    message = "Payment failed";
  }

  const template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
      </head>
      <body>
        <h1>Payment Confirmation</h1>
        <p>${message}!</p>
      </body>
    </html>
  `;

  // try {
  //   const filePath = join(__dirname, "/views/success-page.html");
  //   console.log("directory", __dirname, filePath);
  //   template = readFileSync(filePath, "utf8");
  //   template.replace("{{ message }}", message);
  // } catch (err) {
  //   console.log(err);
  // }

  return new NextResponse(template, {
    headers: {
      "Content-Type": "text/html",
    },
    status: 200,
  });
}

async function verifyPayment(tnxId: string) {
  try {
    const response = await axios.get(process.env.PAYMENT_VERIFICATION_URL!, {
      params: {
        request_id: tnxId,
        store_id: process.env.STORE_ID!,
        signature_key: process.env.SIGNATURE_KEY!,
        type: "json",
      },
    });

    return response.data;
  } catch (err: any) {
    console.log("verifyerror", err);
    NextResponse.json({
      success: false,
      message: "Payment verification failed.",
      error: err.message,
    });
  }
}

// app/api/webhook/route.js
// import { NextResponse } from 'next/server';

// export async function POST(request:NextRequest) {
//   const payload = await request.text();
//   const sig = request.headers.get('aamarpay-signature');

//   // Verify the webhook signature
//   if (verifySignature(payload, sig)) {
//     const event = JSON.parse(payload);

//     switch (event.type) {
//       case 'payment_success':
//         // Handle successful payment
//         console.log('Payment was successful!');
//         break;
//       case 'payment_failed':
//         // Handle failed payment
//         console.log('Payment failed.');
//         break;
//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     return NextResponse.json({ received: true });
//   } else {
//     return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
//   }
// }

// function verifySignature(payload, signature) {
//   // Implement signature verification logic here
//   return true; // Placeholder
// }
