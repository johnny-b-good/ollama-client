"use client";

import type { FC } from "react";
import { type Message as SdkMessage, useChat } from "@ai-sdk/react";

import {
  MessageList,
  MessageBubble,
  MessageForm,
  ChatLayout,
  EmptyMessageList,
} from ".";

export type ChatUiProps = {
  chatId: string;
  modelName: string;
  initialMessages?: SdkMessage[];
};

export const ChatUi: FC<ChatUiProps> = ({
  chatId,
  modelName,
  initialMessages = [],
}) => {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    id: chatId,
    initialMessages,
    // sendExtraMessageFields: true,
  });

  return (
    <ChatLayout>
      <MessageList>
        {messages.map((message) => {
          return (
            <MessageBubble
              key={message.id}
              author={message.role === "assistant" ? modelName : "You"}
              authorType={message.role === "assistant" ? "ai" : "user"}
              text={message.content}
            />
          );
        })}

        {messages.length === 0 && <EmptyMessageList />}
      </MessageList>

      <MessageForm
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </ChatLayout>
  );
};
