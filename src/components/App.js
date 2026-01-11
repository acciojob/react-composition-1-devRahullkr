
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tab,setTab] = useState(1)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Hello React Page</h1>
        <ul>
          <li onClick={(e) => setTab(1)}>Tab 1</li>
          <li onClick={(e) => setTab(2)}>Tab 2</li>
          <li onClick={(e) => setTab(3)}>Tab 3</li>
        </ul>
        <p>This is the content for Tab {tab}.</p>
    </div>
  )
}

export default App
