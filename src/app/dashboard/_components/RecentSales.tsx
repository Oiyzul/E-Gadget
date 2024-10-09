import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TOrder } from "../../../../types";

const RecentSales = ({ data }: { data: TOrder[] }) => {
  return (
    <Table>
      <TableCaption>A list of recent sales.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>SubTotal</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((order: TOrder) => (
            <TableRow key={order._id}>
              <TableCell>
                <img
                  src={order.items[0].image}
                  alt={order.items[0].name}
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell>
                {order.items.reduce((a, c) => a + c.qty, 0)}
              </TableCell>
              <TableCell>
                {order.items.reduce((a, c) => a + c.price * c.qty, 0)}
              </TableCell>
              <TableCell>{order.taxPrice}</TableCell>
              <TableCell>{order.shippingPrice}</TableCell>
              <TableCell>{order.totalPrice}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default RecentSales;
