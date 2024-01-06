import React, { useEffect, useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { TabList } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import { TargetArticles } from "./targetAticles";
import { CommunityChats } from "./communityChats";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackForward from "@mui/icons-material/ArrowForward";
import { ArrowForward } from "@mui/icons-material";
import CommunityApiService from "../../apiServices/communityApiService";
import { BoArticle, SearchArticlesObj } from "../../../types/boArticle";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetBoArticles } from "./slice";
import { retriveTargetBoArticles } from "./selector";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetBoArticles: (data: BoArticle[]) =>
    dispach(setTargetBoArticles(data)),
});

//** Redux Selector */
const targetBoArtivclesRetriever = createSelector(
  retriveTargetBoArticles,
  (targetBoArticles) => ({
    targetBoArticles,
  })
);

export function CommunityPage(props: any) {
  // INITIALIZATION
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { targetBoArticles } = useSelector(targetBoArtivclesRetriever);

  const [Value, setValue] = React.useState("1");
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticlesObj>(
    { bo_id: "all", page: 1, limit: 5 }
  );
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => setTargetBoArticles(data))
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articlesRebuild]);

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "all";
        break;
      case "2":
        searchArticlesObj.bo_id = "celebrity";
        break;
      case "3":
        searchArticlesObj.bo_id = "evaluation";
        break;
      case "4":
        searchArticlesObj.bo_id = "story";
        break;
    }
    setSearchArticlesObj({ ...searchArticlesObj });
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj });
  };

  return (
    <div className="community_page">
      <div className={"community_frame"}>
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChats />
            <Stack
              className={"community_all_frame"}
              inputMode={"text"}
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={Value}>
                <Box className={"article_tabs"}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}
                    >
                      <Tab label="Barcha maqolalar" value={"1"} />
                      <Tab label="Mashxurlar" value={"2"} />
                      <Tab label="Oshhonaga baho" value={"3"} />
                      <Tab label="Hikoyalar" value={"4"} />
                    </TabList>
                  </Box>
                </Box>

                <Box className={"aeticle_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles
                      targetBoArticles={targetBoArticles}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles
                      targetBoArticles={targetBoArticles}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles
                      targetBoArticles={targetBoArticles}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles
                      targetBoArticles={targetBoArticles}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                  </TabPanel>
                </Box>

                <Box className={"article_bott"}>
                  <Pagination
                    count={5}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForward,
                        }}
                        {...item}
                        color={"secondary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
