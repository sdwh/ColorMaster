import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Views/Home.vue'
import Glossary from './Views/Glossary.vue'
import Full from './Views/FullBackground.vue'


export const router = createRouter(
{
    history: createWebHashHistory(),
    routes: 
    [
        { path: '/', component: Home },
        { path: '/Glossary', component: Glossary },
        { path: '/Full/:color', component: Full },
        { path: '/full/:color', component: Full },
    ],
});