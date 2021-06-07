import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="41bf2331-d090-4876-8175-ef9a7ea0203b"
      userName="doffy"
      userSecret="kingdoffy"
      renderChatFeed={(ChatAppProps) => < ChatFeed {...ChatAppProps}/>}
    />
  );
};
export default App;
