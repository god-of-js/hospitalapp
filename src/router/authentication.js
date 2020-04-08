import register from '../views/auth/register.vue';
import authLayout from '../layouts/authLayout.vue';
import login from '../views/auth/login.vue';

export default [{
    path: '/auth',
    component: authLayout,
    children: [
        {
            path: '/register',
            component: register
        },
        {
            path: '/login',
            component: login
        }
    ]
}]