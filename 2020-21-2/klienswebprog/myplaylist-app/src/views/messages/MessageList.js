import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { getMessages } from "../../state/messages/selectors";

import classes from "./MessageList.module.css";
console.log(classes);
export function MessageList() {
  const messages = useSelector(getMessages);
  return (
    <div className={classes.messageList}>
      {messages.map((message) => (
        <Message info key={message.id}>
          {message.text}
        </Message>
      ))}
    </div>
  );
}
