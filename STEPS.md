## **Day 1: UI Structure, State Management, and Context**

### **Module 1: Project Setup & Basic UI Components**

#### Step 1: **Set up the Next.js Project**
- Initialize the Next.js project.
- Install dependencies like Tailwind CSS and ShadCN for UI components.
- Create the necessary file structure for the app:
  ```
  /app/echo-chat/page.tsx
  /components/ChatInput.tsx
  /components/MessageItem.tsx
  /components/MessageList.tsx
  ```

#### Step 2: **Build ChatInput Component**
- Create a simple form that includes:
  - A `<textarea>` to input messages.
  - A submit button to send the message.
- Use `useState` to control the value of the text input (e.g., `const [messageText, setMessageText]`).
- Add basic styling using Tailwind CSS.

#### Step 3: **Build MessageItem Component**
- Create a component that displays individual messages.
  - It should accept `text`, `sender`, and `id` as props.
  - Use conditional styling based on the sender (`'user'` vs `'ai'`).
  - Align the messages accordingly (e.g., user messages on the right, AI on the left).

#### Step 4: **Build MessageList Component**
- Create a container that renders a list of messages.
  - Accept `messages` as a prop and map them into `MessageItem` components.
  - Ensure the message list is scrollable if messages overflow (use `overflow-y-auto` and a fixed height).

#### Step 5: **Assemble Main Page**
- In `app/echo-chat/page.tsx`, import and display `ChatInput`, `MessageList`, and `MessageItem`.
  - This will be the static version, and you’ll hardcode a few initial messages to test the layout.

---

### **Module 2: Managing the Message List with useReducer**

#### Step 1: **Define the Reducer**
- Create a `messagesReducer` function:
  ```tsx
  const messagesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  ```

#### Step 2: **Manage State with useReducer**
- In `page.tsx`, use `useReducer` to manage the list of messages:
  ```tsx
  const [messages, dispatch] = useReducer(messagesReducer, []);
  ```

#### Step 3: **Pass Messages to MessageList**
- Pass `messages` as a prop to the `MessageList` component to render dynamically.

#### Step 4: **Add Test Button for Dispatching**
- Create a button (e.g., "Add Test Message") that, when clicked, dispatches an action to add a mock message:
  ```tsx
  const addTestMessage = () => {
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { text: 'Test message', sender: 'user', id: Date.now() },
    });
  };
  ```

---

### **Module 3: Sharing State and Actions with Context**

#### Step 1: **Create the ChatContext**
- Create `ChatContext` to share the `messages` state and `dispatch` function globally:
  ```tsx
  import { createContext, useContext } from 'react';

  const ChatContext = createContext();

  export const useChat = () => useContext(ChatContext);
  ```

#### Step 2: **Wrap the App with ChatContext.Provider**
- In `page.tsx`, wrap the content inside `<ChatContext.Provider value={{ messages, dispatch }}>`.

#### Step 3: **Refactor MessageList and Add Message Button**
- Refactor `MessageList` to use `useContext(ChatContext)` to access messages.
- Refactor the "Add Message" button to dispatch actions using the context.

#### Step 4: **Implement Basic Auth Mocking**
- Add a simple `isLoggedIn` state using `useState`.
- Use `isLoggedIn` to conditionally render the `ChatInput` component and login/logout buttons.

---

## **Day 2: Server Simulation, Hooks, and Refinement**

### **Module 4: Simulating Server Actions**

#### Step 1: **Create Server Action Function**
- Create a file `app/echo-chat/actions.ts` and define a `sendMessageAction` function:
  ```tsx
  export const sendMessageAction = async (messageText) => {
    await new Promise(res => setTimeout(res, 750));  // Simulate server delay
    return { success: true, processedText: `Echo: ${messageText}` };
  };
  ```

#### Step 2: **Integrate Server Action with ChatInput**
- In the `ChatInput` component, handle form submission:
  - Call the server action `sendMessageAction`.
  - Use `useActionState` to handle pending state (e.g., show "Sending..." during the request).

#### Step 3: **Dispatch User and AI Messages**
- Once the server action completes, dispatch two messages (the original user message and the "echoed" AI message) to the message list.

#### Step 4: **Clear Input After Submission**
- Clear the input field after the messages are dispatched.

---

### **Module 5: Hooks & Performance Considerations**

#### Step 1: **Use useCallback**
- If necessary, wrap the `dispatch` function in `useCallback` to prevent unnecessary re-renders.

#### Step 2: **Memoize MessageItem with React.memo**
- Wrap `MessageItem` in `React.memo` to prevent unnecessary re-renders if its props haven’t changed.

#### Step 3: **Custom Hook for Message Management (Optional)**
- Optionally, refactor the `messagesReducer` and related logic into a custom hook (`useMessages`).

---

### **Module 6: Simulating Real-time & Final Review**

#### Step 1: **Simulate Real-time AI Response**
- Add a button "Simulate AI Response" outside the chat input.
- When clicked, dispatch an AI response message:
  ```tsx
  const simulateAIResponse = () => {
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { text: 'AI response', sender: 'ai', id: Date.now() },
    });
  };
  ```

#### Step 2: **Polish the UI**
- Ensure the UI is responsive, visually appealing, and consistent.
- Test the flow: Login, send a message, see the AI response, simulate real-time updates, and logout.

#### Step 3: **Final Code Review**
- Walk through the codebase, explaining how each part contributes to the final project:
  - `useState`, `useReducer`, Context, Server Actions, useActionState, React.memo.
  - Relate the project to more complex systems, like the Atlantis project, and discuss future improvements.

---

### **Final Project Structure**
```
/app
  /echo-chat
    /page.tsx
    /actions.ts
/components
  /ChatInput.tsx
  /MessageItem.tsx
  /MessageList.tsx
/context
  /ChatContext.ts
/styles
  /globals.css
/public
  /favicon.ico
```

This step-by-step breakdown provides a clear roadmap to developing the **EchoChat** project, guiding you from setting up the initial components to simulating real-time interactions and adding performance optimizations.