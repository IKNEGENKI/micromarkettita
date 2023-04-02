import {Routes, Route} from 'react-router-dom';	
//import Router2 from './Router2';
//import UserVen from '../componentes/UserVen';
//import UserDelegado from '../componentes/UserDelegado';
import UserAdmi from '../componentes/UserVen';
//import Router3 from './Router3';
//import listItems from '../componentes/ListItemsVen';

const Router1 = ()=>{
    return (
        <>
        {<Routes>
            <Route path="/usuario/*" element={<UserVen/>}/>
            
            <Route/>
    </Routes>}
        </>
    )
}

export default Router1;