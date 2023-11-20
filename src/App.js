// import React, { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   console.log(tasks);

//   const AddTask = () => {
//     if (task.trim() == " ") return;
//     setTasks([...tasks]);
//     setTask("");
//   };

//   return (
//     <div>
//       <div>
//         <input
//           className=" border-2 border-black"
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button onClick={AddTask}> Add </button>
//         <ul>
//           {tasks.map((item, index) => {
//             <li key={index}> {item}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Homepage from "./pages/homepage";
// import Placespage from "./pages/placespage";

// import Header2 from "./components/compenentpages/header2";
// import Searchinput from "./components/compenentpages/searchinput";
// import Process from "./components/compenentpages/progressbar/process";
// import DetailPage from "./components/compenentpages/DetailPage";
// import Roomdetails from "./components/compenentpages/roomdetails";

// function App() {

//   return (
//     <div>
//       {/* <Roomdetails /> */}
//       {/* <DetailPage /> */}
//       {/* <Process />  */}
//       {/* <Searchinput /> */}
//       <Header2 />
//       <Homepage />
//       {/* <Placespage />  */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Placespage from "./pages/placespage";
import Header2 from "./components/compenentpages/header2";
import Process from "./components/compenentpages/progressbar/process";

import DetailPage from "./components/compenentpages/DetailPage";
import MultiStep from "./components/compenentpages/progressbar";

function App() {
  return (
    <BrowserRouter>
      <Header2 />

      <Routes>
        <Route path="/" element={<Placespage />} />
        <Route path="/Places" element={<Placespage />} />

        <Route path="/input" element={<MultiStep />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
