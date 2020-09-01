import React from "react";
import {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core";

const MyAccordionItem = (props) => {
  return (
    <AccordionItem>
      <AccordionHeader>
        <Box flex={props.flex || "1"} textAlign={props.textAlign || "left"}>
          {props.title || "no title use title prop"}
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <div
        style={{
          width: "100%",
          height: "1px",
          borderBottom: "2px solid #000",
        }}
      />
      <AccordionPanel pb={props.pb || 4}>
        {/* should spread accordion content to allow html tags ? we'll see */}
        {props.content || "no content, use content prop"}
      </AccordionPanel>
    </AccordionItem>
  );
};

export { MyAccordionItem };
