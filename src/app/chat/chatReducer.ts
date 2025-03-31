import { ChatMessageType } from "@/types/types";

type Action =
  | { type: "ADD_MESSAGE"; payload: ChatMessageType }
  | { type: "CLEAR_MESSAGES" };

export const chatReducer = (
  state: ChatMessageType[],
  action: Action
): ChatMessageType[] => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];
    case "CLEAR_MESSAGES":
      return [] as ChatMessageType[];
    default:
      return state;
  }
};
