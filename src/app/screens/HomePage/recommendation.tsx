import { Avatar, Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setBestBoArticles,
  setNewsBoArticles,
  setTrendBoArticles,
} from "./slice";
import { createSelector } from "@reduxjs/toolkit";
import { BoArticle } from "../../../types/boArticle";
import {
  retrieveBestBoArticles,
  retrieveNewsBoArticles,
  retrieveTrendBoArticles,
} from "./selector";
import CommunityApiService from "../../apiServices/communityApiService";
import { serverApi } from "../../../lib/config";
import TViewer from "../../components/tuiEditor/TViewer";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setBestBoArticles: (data: BoArticle[]) => dispach(setBestBoArticles(data)),
  setTrendBoArticles: (data: BoArticle[]) => dispach(setTrendBoArticles(data)),
  setNewsBoArticles: (data: BoArticle[]) => dispach(setNewsBoArticles(data)),
});

// REDUX SELECTOR
const bestBoArticlesRetriever = createSelector(
  retrieveBestBoArticles,
  (bestBoArticles) => ({
    bestBoArticles,
  })
);
const trendBoArticlesRetriever = createSelector(
  retrieveTrendBoArticles,
  (trendBoArticles) => ({
    trendBoArticles,
  })
);
const newsBoArticlesRetriever = createSelector(
  retrieveNewsBoArticles,
  (newsBoArticles) => ({
    newsBoArticles,
  })
);
export function Recommendations() {
  // INITIALIZATIONS
  const { setBestBoArticles, setTrendBoArticles, setNewsBoArticles } =
    actionDispatch(useDispatch());
  const { bestBoArticles } = useSelector(bestBoArticlesRetriever);
  const { trendBoArticles } = useSelector(trendBoArticlesRetriever);
  const { newsBoArticles } = useSelector(newsBoArticlesRetriever);

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setBestBoArticles(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticles(data))
      .catch((err) => console.log(err));

    communityService
      .getTargetArticles({
        bo_id: "celebrity",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setNewsBoArticles(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Tavsiya qilingan maqolalar</Box>
          <Stack className="article_main" flexDirection={"row"}>
            <Stack className="article_container">
              <Box className={"article_category"}>Ko'p ko'rilgan</Box>
              {bestBoArticles?.map((article: BoArticle) => {
                const art_image_url = article?.art_image
                  ? `${serverApi}/${article?.art_image}`
                  : "/community/boy.jpg";
                return (
                  <Stack className="article_box" key={article._id}>
                    <Box
                      className={"article_img"}
                      sx={{ backgroundImage: `url(${art_image_url})` }}
                    ></Box>
                    <Box className={"article_info"}>
                      <Box className={"article_main_info"}>
                        <div className="article_author">
                          <Avatar
                            alt="Author_photo"
                            src={
                              article?.member_data?.mb_image
                                ? `${serverApi}/${article?.member_data?.mb_image}`
                                : "/icons/default_img.svg"
                            }
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="author_username">
                            {article?.member_data?.mb_nick}
                          </span>
                        </div>
                        <span className="article_title">
                          {article?.art_subject}
                        </span>
                        <span className="article_desc"></span>
                      </Box>
                    </Box>
                  </Stack>
                );
              })}

              <Box className={"article_category"}>Ko'p yoqtirilgan</Box>

              {trendBoArticles?.map((article: BoArticle) => {
                const art_image_url = article?.art_image
                  ? `${serverApi}/${article?.art_image}`
                  : "/community/boy.jpg";
                return (
                  <Stack className="article_box" key={article._id}>
                    <Box
                      className={"article_img"}
                      sx={{ backgroundImage: `url(${art_image_url})` }}
                    ></Box>
                    <Box className={"article_info"}>
                      <Box className={"article_main_info"}>
                        <div className="article_author">
                          <Avatar
                            alt="Author_photo"
                            src={
                              article?.member_data?.mb_image
                                ? `${serverApi}/${article?.member_data?.mb_image}`
                                : "/icons/default_img.svg"
                            }
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="author_username">
                            {article?.member_data?.mb_nick}
                          </span>
                        </div>
                        <span className="article_title">
                          {article?.art_subject}
                        </span>
                        <span className="article_desc"></span>
                      </Box>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>

            <Stack className="article_container">
              <Box className={"article_category"}>Mashhurlar</Box>
              {newsBoArticles?.map((article: BoArticle) => {
                return (
                  <Box className={"article_news"}>
                    <TViewer chosenSingleBoArticles={article} />
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
