import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import moment from "moment"; // Import the moment library
//Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "../../screens/OrdersPage/selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../types/product";
import { Order } from "../../../types/order";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX SELECTOR
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

export default function ProcessOrders(props: any) {
  /**INITIALIZATIONS */
  const { processOrders } = useSelector(processOrdersRetriever);

  /**HANDLERS */
  const finishOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!verifiedMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmani olganiningizni tasdiqlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className="titleDish">{product.product_name}</p>
                      <Box className={"priceBox"}>
                        <p>${item.item_price}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.item_quantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.item_price * item.item_quantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box
                sx={{
                  background: "rgba(140, 102, 242, 0.81)",
                }}
                className={"total_price_box black_solid"}
              >
                <Box className={"boxTotal"}>
                  <p>maxsulot narxi</p>
                  <p>${order.order_total_amount - order.order_delivery_cost}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>${order.order_delivery_cost}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p> jami narx</p>
                  <p>${order.order_total_amount}</p>
                </Box>
                <div className="data_compl">
                  {moment(order.createdAt).format("YY-MM-DD HH:mm")}
                </div>
                <Button
                  value={order._id}
                  onClick={finishOrderHandler}
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "10px",
                    boxShadow:
                      "0px 4px 4px rgba(0,0,0,0.25), inset 0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  To'lov qilish
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
