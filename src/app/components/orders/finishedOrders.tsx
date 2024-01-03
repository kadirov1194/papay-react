import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
//Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
    retrieveFinishedOrders
} from "../../screens/OrdersPage/selector";


//** Redux Selector */
const finishedrdersRetriever = createSelector(
    retrieveFinishedOrders,
    (finishedOrders) => ({
        finishedOrders,
    })
);




const finishedOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

export default function FinishedOrders(props: any) {
        /** INITIALIZATON*/
    // const { finishedOrders } = useSelector(finishedOrdersRetriever);
    return (
        <TabPanel value={"3"}>
          <Stack>
            {finishedOrders?.map((order) => {
                return (
                    <Box className={"order_main_box"}>
                        <Box className={"order_box_scroll"}>
                            {order.map(() => {
                                const image_path = '/others/jizz.jpg';
                                return (
                                    <Box className={"ordersName_price"}>
                                        <img src={image_path} className={"orderDishImg"} />
                                        < p className={"titleDish"}>sandvich</p>
                                        <Box className={"priceBox"}>
                                            <p>$7</p>
                                            <img src={"/icons/close.svg"} />
                                            <p>3</p>
                                            <img src={"/icons/pause.svg"} />
                                            <p style={{ marginLeft: "15px "}}>$21</p>
                                        </Box>
                                    </Box>
                                );
                            })}   
                        </Box>

                        <Box className={"total_price_box red_solid"}>
                            <Box className={"boxTotal"}>
                            <p>maxsulot narxi</p>
                                <p> $22</p>
                                <img
                                src={"/icons/plus.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p>yetkazish xizmati</p>
                                <p>$3</p>
                                <img
                                src={"/icons/pause.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p> jami narx</p>
                                <p> $25</p>
                                
                            </Box>                    
                        </Box>
                        </Box>
                    );   
                 })}
          </Stack>
        </TabPanel>
    )
}