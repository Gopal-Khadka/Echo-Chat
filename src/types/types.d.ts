export interface ChatMessageType {
  id: number;
  message: string;
  isUser: boolean;
  avatarUrl?: string;
  username: string;
}
