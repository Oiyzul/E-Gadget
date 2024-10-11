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
  const { mer_txnid, amount, pay_status, payment_type, currency } =
    verifiedResponse;
  let paymentSuccess = false,
    order;
  if (verifiedResponse && verifiedResponse.pay_status === "Successful") {
    paymentSuccess = true;
    order = await Order.findByIdAndUpdate(orderId, {
      isPaid: true,
      paidAt: verifiedResponse.date,
    });
  } else {
    paymentSuccess = false;
  }
  console.log(order);

  const successTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #080808; color: #fafafa; }
          h1 { margin-bottom: 50px; }
          span { font-weight: semi-bold }
          a { text-decoration: none; font-weight: bold; color: #fff }
          .container { max-width: 1280px; margin-inline: auto; min-height:100vh; display: flex; flex-direction: column; justify-items: center; justify-content: center;}
          .wrapper { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1em;}
          .card {width: 250px; height: 200px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);}
          .bold { font-weight: bold }
          table { width: 100%; border-collapse: collapse; overflow-x:scroll  }
          table, th, td { border: 1px solid #333; }
          th, td { padding: 8px; text-align: left; }
          .table { padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); margin-block: 40px;}
          .flex { display: flex; align-items:center; justify-content: space-between;}
          @media only screen and (max-width: 768px) {
          .card { width:100%;}
          }
        </style>
      </head>
      <body>
      <div class="container">
      <div class=flex>
      <h1>Payment Confirmation: ${pay_status}</h1>
      <a href=${process.env.NEXT_PUBLIC_BASE_URL}>Home</a>
      </div>
      <div class="wrapper">
          <div class="card">
            <h2>Transaction Details</h2>
            <p>Order ID: ${order?._id}</p>
            <p>Transaction ID: ${mer_txnid}</p>
            <p>Total Amount: ${amount} ${currency}</p>
          </div>
          <div class="card">
            <h3>Shipping Address</h3>
            <p>Name: ${order?.shippingAddress.customerName}</p>
            <p>Mobile: ${order?.shippingAddress.phone}</p>
            <p>Address: ${order?.shippingAddress.address}, <br /> ${
    order?.shippingAddress.city
  } - ${order?.shippingAddress.postalCode}, ${
    order?.shippingAddress.country
  }</p>
          </div>       
          <div class="card">
             <h3>Status</h3>
             <p>Payment Status: <span>${
               order?.isPaid ? "Paid" : "Not Paid"
             }</span></p>
             <p>Payment Type: <span>${payment_type}</span></p>
             <p>Paid At: <span>${
               order?.paidAt && order.paidAt.toLocaleString()
             }</span></p>
             <p>Delivery Status: <span>${
               order?.isDelivered ? "Delivered" : "Not Delivered"
             }</span></p>
            </div>
          <div class="card">
            <h3>Order Summary</h3>
            <p>Subtotal: ${order?.itemsPrice} ${currency}</p>
            <p>Tax: ${order?.taxPrice} ${currency}</p>
            <p>Shipping: ${order?.shippingPrice} ${currency}</p>
            <p class="bold">Total: ${order?.totalPrice} ${currency}</p>
          </div>
      </div>
      <div class='table'>
          <h3>Items</h3>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Variant</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
              ${order?.items.map(
                (item: {
                  name: string;
                  qty: number;
                  image: string;
                  price: number;
                  variant: string;
                }) => `
                <tr>
                  <td><img src="${item.image}" width="50px" height="50px" alt="${item.name}" /></td>
                  <td>${item.name}</td>
                  <td>${item.variant}</td>
                  <td>${item.qty}</td>
                  <td>${item.price} BDT</td>
                `
              )}
              </tbody>
            </table>                
        </div>
      </body>
    </html>
  `;
  const failTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; background: #080808; color: #fafafa; display: flex; flex-direction: column; justify-items: center; justify-content: center;}
          h1 { margin-bottom: 50px; }
          .container { max-width: 1280px; margin-inline: auto; height:100vh; margin-top: 100px }
          a {
          text-decoration: none;
          color: #fff;
          }
        </style>
      </head>
      <body>
      <div class="container">
      
      <h1>Payment Confirmation: Failed</h1>
      <p>Failed to process the payment. Please try again later.</p>
      <a href=${process.env.NEXT_PUBLIC_BASE_URL}> Back to Home </a> 
        
      </div>
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

  return new NextResponse(paymentSuccess ? successTemplate : failTemplate, {
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
