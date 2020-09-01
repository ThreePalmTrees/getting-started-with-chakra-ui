import React from "react";
import {
  Button,
  Accordion,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Collapse,
} from "@chakra-ui/core";

import { MyAccordionItem } from "./components/MyAccordionItem";

import "./App.css";

function CollapsedContent(props) {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Button variantColor={props.buttonColor || "blue"} onClick={handleToggle}>
        {show
          ? props.buttonTextCollapsed
          : props.buttonTextExpanded || "Toggle"}
      </Button>
      <Collapse mt={4} isOpen={show}>
        {props.content || "no content, use content prop"}
      </Collapse>
    </>
  );
}

function App() {
  const MyAvatarBadge = () => (
    <AvatarBadge
      size="1.25em"
      bg={Math.random() > 0.5 ? "green.500" : "tomato"}
    />
  );

  return (
    <div className="App">
      <AvatarGroup size="md" max={5}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast">
          <MyAvatarBadge />
        </Avatar>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo">
          <MyAvatarBadge />
        </Avatar>
      </AvatarGroup>

      <br />

      <Button variantColor="green">Button</Button>

      <br />
      <br />

      <Accordion defaultIndex={[1]} index={[1]} allowMultiple>
        <MyAccordionItem title="See this" content="This is fast development!" />
        <MyAccordionItem
          title="See this too"
          content="Really fast development!"
        />
      </Accordion>

      <br />

      <CollapsedContent
        buttonTextCollapsed="Collapse"
        buttonTextExpanded="Expand"
        content="This librarie makes the development of POC's lightening fast"
      />
    </div>
  );
}

export default App;
