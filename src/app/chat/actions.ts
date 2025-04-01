"use server";
export interface Message {
  processedText: string;
  success: boolean;
}

export const sendMessageAction = async (
  messageText: string
): Promise<Message> => {
  await new Promise((res) => setTimeout(res, 750)); // Simulate server delay
  return { success: true, processedText: `Echo: ${messageText}` };
};
