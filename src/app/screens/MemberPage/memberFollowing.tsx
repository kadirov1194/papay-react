import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followings = [
  { mb_nick: "shimomoto" },
  { mb_nick: "yoganglam" },
  { mb_nick: "larisa" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((follower) => {
        const image_url = "/community/cute_girl.jpeg";
        return (
          <Box className={"follow_box"}>
            <Avatar src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>


            {props.actions_enabled && (

                <Button
                  variant="contained"
                  startIcon={
                    <img src="/icons/user.svg" style={{ width: "40px", marginLeft: "16px" }} />
                  }
                  className="follow_cancel_btn"
                >
                  Bekor Qilish
                </Button>
              )}
          </Box>
        );
      })}
    </Stack>
  );
}