import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login/Login";
import signup from "../components/login/signup";

Vue.use(VueRouter);
const routes = [
    { path: "/login", component: Login },
    { path: "/signup", component: signup }
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    hasbang: false,
    mode: "history"
});

export default router;
