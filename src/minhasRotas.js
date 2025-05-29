import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Atv01 from "./semana1/Atv01";
import Atv02 from "./semana2/Atv02";
import Atv03 from "./semana3/Atv03";
import Atv04 from "./semana4/Atv04";
import Atv05 from "./semana5/Atv05";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/atv01" element={<Atv01 />} />    
                <Route path="/atv02" element={<Atv02 />} />    
                <Route path="/atv03" element={<Atv03 />} />    
                <Route path="/atv04" element={<Atv04 />} />    
                <Route path="/atv05" element={<Atv05 />} />    
            </Routes>
        </BrowserRouter>
    );
}