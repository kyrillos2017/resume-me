import { Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import './PublicLayout.scss';
import Navbar from './navbar/navbar';
const PublicLayout =  () => {
return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
)
}

export default PublicLayout;