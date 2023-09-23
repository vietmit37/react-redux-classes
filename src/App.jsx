import { ClassesSideBar } from "./components/ClassesSideBar/index.js";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import FieldName from "./components/FieldName.jsx";
import IdfObject from "./components/IdfObject.jsx";

function App() {
  return (
    <>
      <div className="flex w-full h-full">
        <ClassesSideBar />
        <div className="grow pr-2 overflow-x-auto">
          <div className="text-lg font-medium dark:text-[#fff] h-[45px] mb-2">
            Simulator
          </div>
          <Toolbar />
          <div className="flex overflow-auto h-[calc(100vh-120px)]">
            <FieldName />
            <IdfObject />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
