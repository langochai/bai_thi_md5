import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Update} from "./pages/Update.jsx";
import {Add} from "./pages/Add.jsx";
import {Delete} from "./pages/Delete.jsx";
import {Detail} from "./pages/Detail.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/update" element={<Update/>}/>
                <Route path="/delete" element={<Delete/>}/>
            </Routes>
        </>
    )
}

export default App
