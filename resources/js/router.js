import { createWebHistory , createRouter} from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Shop from './pages/Shop.vue';
import Notifications from './pages/Notifications.vue';
import Tablelist from './pages/TableList.vue';
import Userprofile from './pages/UserProfile.vue';
import Invoice from './pages/invoice.vue';
import Inklist from './pages/Inklist.vue';

//Test
import create  from './pages/create.vue';
import edit from './pages/edit.vue';
import toedit from './pages/toedit';


const routes = [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/Shop',
            name: 'Shop',
            component: Shop
        },
        {
            name: 'Notifications',
            path: '/Notifications',
            component: Notifications
        },
        {
            path: '/TableList',
            name: 'TableList',
            component: Tablelist
        },
         {
            path: '/UserProfile',
            name: 'Userprofile',
            component: Userprofile
        },
        {
            path: '/invoice',
            name: 'Invoice',
            component: Invoice
        },
        {
            path: '/Inklist',
            name: 'Inklist',
            component: Inklist
        },
        {
            path: '/create',
            name: 'create',
            component: create

        },
        {
            path: '/edit',
            name: 'edit',
            component: edit
        },
        {
            path: '/toedit/:id?',
            name: 'toedit',
            component: toedit
        }


    ];

const router =  createRouter({
    history: createWebHistory(),
    routes

});

export default router;
