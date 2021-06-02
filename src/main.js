import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: BookList},
        {path: '/book/:id', component: BookDetail},
        {path: '/login', component: Login},
        {path: '/sign-up', component: SignUp},
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
