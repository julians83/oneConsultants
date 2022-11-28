import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataAcademic from './screens/DataAcademic'
import UserForm from "./screens/DataPersonal";
import Summary from "./screens/Summary"
import Home from "./screens/Home"
import TableRegister from "./screens/TableRegister"
import Navbar  from '../src/components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/personal' element={<UserForm/>}/>
      <Route path='/academic' element={<DataAcademic/>}></Route>
      <Route path='/summary' element={<Summary/>}></Route>
      <Route path='/tableregister' element={<TableRegister/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
