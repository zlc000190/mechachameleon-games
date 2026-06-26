import { ChatGenerator } from '@/shared/blocks/chat/generator';

export const metadata = {
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <ChatGenerator />;
}
