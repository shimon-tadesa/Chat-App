import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="41bf2331-d090-4876-8175-ef9a7ea0203b"
      userName= {localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(ChatAppProps) => < ChatFeed {...ChatAppProps}/>}
    />
  );
};
export default App;
