import { ChatHistory } from '@/shared/blocks/chat/history';

export const metadata = {
  robots: { index: false, follow: false },
};

export default function ChatHistoryPage() {
  return <ChatHistory />;
}
