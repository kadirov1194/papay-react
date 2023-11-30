import { Box, Container, Stack } from "@mui/material";
import React from "react";
import "../../../css/help.css";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tablist from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function HelpPage() {
  // INITIALIZATIONS
  const [value, setValue] = React.useState("1");
  const faq = [
    {
      question: "Tolov qanday amalga oshiriladi?",
      answer: "To'lovni Payme, Click ilovalari orqali amalga oshirasiz",
    },
    {
      question: "Buyutmalar qancha vaqtda yetib keladi?",
      answer: "Buyurtmalar xarid qilgan narsangizga qarab xar xil yetib boradi",
    },
    {
      question:
        "Saytdan foydalansam malumotlarim xavfsizligiga kafolat berasizmi?",
      answer: "Albatta, bizning dasturchilarimiz sizning malumotlaringizi ",
    },
    {
      question: "saytda muammo yuzaga kelsa kimga murojat qilaman?",
      answer:
        "Hurmatli mijoz, iltimos adminga xat yollash bolimidan xat yuboring",
    },
    {
      question: "Tolov qanday amalga oshiriladi?",
      answer: "To'lovni Payme, Click ilovalari orqali amalga oshirasiz",
    },
    {
      question: "Buyutmalar qancha vaqtda yetib keladi?",
      answer: "Buyurtmalar xarid qilgan narsangizga qarab xar xil yetib boradi",
    },
    {
      question:
        "Saytdan foydalansam malumotlarim xavfsizligiga kafolat berasizmi?",
      answer: "Albatta, bizning dasturchilarimiz sizning malumotlaringizi ",
    },
    {
      question: "saytda muammo yuzaga kelsa kimga murojat qilaman?",
      answer:
        "Hurmatli mijoz, iltimos adminga xat yollash bolimidan xat yuboring",
    },
    {
      question: "Tolov qanday amalga oshiriladi?",
      answer: "To'lovni Payme, Click ilovalari orqali amalga oshirasiz",
    },
    {
      question: "Buyutmalar qancha vaqtda yetib keladi?",
      answer: "Buyurtmalar xarid qilgan narsangizga qarab xar xil yetib boradi",
    },
    {
      question:
        "Saytdan foydalansam malumotlarim xavfsizligiga kafolat berasizmi?",
      answer: "Albatta, bizning dasturchilarimiz sizning malumotlaringizi ",
    },
    {
      question: "saytda muammo yuzaga kelsa kimga murojat qilaman?",
      answer:
        "Hurmatli mijoz, iltimos adminga xat yollash bolimidan xat yuboring",
    },
  ];
  const rules = [
    `Saytdan tolaqonli yani buyurtmalar qilish, jonli muloqotlardan foydalanishingiz uchun royxatdan otishingiz shart`,
    `Buyurtmalaringizga tolovni tola qonli amalga oshirganingizdan keyin bekor qilishni imkoni yoq shu sababdan tolovlarni amalga oshirishdan avval tekshrib oling`,
    `Jonli muloqot vaqtida bexayo sozlarni ishlatish mutlaqo taqiqlanadi`,
    `Shaxsiy reklamalarni adminning ruxsatisiz tarqatish mumkin emas`,
    `Maqolalaringiz odob doirasidan chiqib ketmasligi kerak`,
    `Barcha xarakatlaringiz adminlarimiz nazorati ostida bolganligi sababli iltimos talablarimizni xurmat qiling`,
  ];
  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="help_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <TabContext value={value}>
          <Box className={"help_menu"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                style={{ display: "flex", justifyContent: "space-between" }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Qoidalar" value={"1"} />
                <Tab label="FAQ" value={"2"} />
                <Tab label="Adminga xat" value={"3"} />
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className="help_main_content">
              <TabPanel value={"1"}>
                <Stack className="theRules_box">
                  <Box className={"theRulesFrame"}>
                    {rules.map((ele, number) => {
                      return <p>{ele}</p>;
                    })}
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel value={"2"}>
                <Stack className="accordian_menu">
                  {faq.map((ele, number) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panelia-content"
                          id="panelia-header"
                        >
                          <Typography>{ele.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{ele.question}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <Stack className="admin_letter_box">
                  <Stack className="admin_letter_container">
                    <Box className={"admin_letter_frame"}>
                      <span>Adminga Xabar Qoldirish</span>
                      <p>
                        Assalomu alaykum! Adminga xabar qoldirish uchun quyidagi
                        formani to'ldiring
                      </p>
                    </Box>
                    <form
                      action="#"
                      method="POST"
                      className="admin_letter_frame"
                    >
                      <div className="admin_input_box">
                        <label htmlFor="">Ism</label>
                        <input type="text" name="mb_nick" placeholder="Ism" />
                      </div>
                      <div className="admin_input_box">
                        <label htmlFor="">Elektron manzil</label>
                        <input
                          type="text"
                          name="mb_email"
                          placeholder="Elektron Manzil"
                        />
                      </div>
                      <div className="admin_input_box">
                        <label htmlFor="">Xabar</label>
                        <textarea name="mb_msg" placeholder="Xabar"></textarea>
                      </div>
                      <Box
                        display={"flex"}
                        justifyContent={"flex-end"}
                        sx={{ mt: "30px" }}
                      >
                        <Button type="submit" variant="contained">
                          Jo'natish
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
