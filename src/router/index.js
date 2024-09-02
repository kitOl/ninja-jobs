import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
