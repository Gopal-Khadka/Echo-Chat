# Echo Chat : A Simple Real-time(ish) Chat Interface

## Steps
1. Add shadcn and use necessary components under `src/components/ui` folder
2. Create simple chat input and chat messages list UI. Chat input uses state to handle the state of the entered message.
3. Create a reducer function to handle adding  and clearing of the message in the message list.
4. Use context to track the `messagesList` state and `dispatch` function inside `chat/page.tsx` so that both chat input and chat conversation component can use it.
5. Use reducer `dispatch` inside chat input component through context-consumption function to trigger `ADD_MESSAGE` action and pass it new message value from chat input when the send button is clicked.
6. Use the `messagesList` to display list of messages inside the chat conversation component.
7. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

