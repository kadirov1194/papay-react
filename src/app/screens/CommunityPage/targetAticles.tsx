import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Label } from "@mui/icons-material";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/community/default_user.svg";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/auth/default_user.svg"}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className={"all_article_author_user"}>Khan</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className={"all_article_title"}>evaluation</span>
                <p className={"all_article_desc"}>
                  Texas De Brazil zo'r restaurant
                </p>
              </Box>
              <Box
                flexDirection={"row"}
                style={{ display: "flex" }}
                justifyContent={"flex-end"}
              >
                <Box
                  flexDirection={"row"}
                  style={{ display: "flex" }}
                  justifyContent={"space-between"}
                  marginRight={"14px"}
                >
                  <div className="evaluation_box">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <div
                        style={{ marginRight: "50px" }}
                        className="article_date"
                      >
                        22-05-15 02:08
                      </div>
                      <Checkbox
                        {...Label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        checked={true}
                      />

                      <span style={{ marginRight: "10px" }}>15</span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
