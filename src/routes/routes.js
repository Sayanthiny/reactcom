import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';


const routes=[
    {path:"/admin", name:'Admin', exact:true},
    {path:"/admin/dashboard", name:'Dashboard', exact:true,component:Dashboard},
    {path:"/admin/profile", name:'Profile', exact:true,component:Profile}
];

export default routes;
