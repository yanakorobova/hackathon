import {Geolocation} from "../features/geolocation/Geolocation";
import {Route, Routes} from "react-router-dom";
import {Page} from "../features/page/Page";
import {Interface} from "../features/interface/Interface";

function App() {
    return (
        <div style={{width:"100%",height:"100%"}}>
          <Routes>
                <Route path={'/geolocation'} element={<Geolocation/>}/>
                <Route path={'/'} element={<Page/>}/>
                <Route path={'/party'} element={<Interface/>}/>
            </Routes>
        </div>
    )
}

export default App
