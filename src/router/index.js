import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "@/pages/Home.vue";
import ServiceLayout from "@/layouts/service-layout.vue"
import { routeMiddleware } from "@/helpers/switchLanguage";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  linkActiveClass: "w--current",
  // linkExactActiveClass: 'w--current',
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },

        {
          path: "about-us",
          name: "about-us",
          component: () => import("../pages/AboutUs.vue"),
        },
        {
          path: "services",
          children: [
            {
              path: "",
              name: "services",
              component: () => import("../pages/Services.vue"),
            },
            {
              path: "detail",
              component: ServiceLayout,
              children: [
                {
                  path: "standard",
                  name: "servicesStandard",
                  component: () => import("../pages/services/standard.vue"),
                },
                {
                  path: "packages",
                  name: "servicesPackages",
                  component: () => import("../pages/services/packages.vue"),
                },
              ],
            },
          ],
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("../pages/Projects.vue"),
        },
        // {
        //   path: "teams",
        //   name: "teams",
        //   component: () => import("../pages/Teams.vue"),
        // },
        {
          path: "blog",
          name: "blog",
          component: () => import("../pages/Blog.vue"),
        },
        {
          path: "contact-us",
          name: "contact-us",
          component: () => import("../pages/ContactUs.vue"),
        },
        {
          path: "test",
          name: "test",
          component: () => import("../layouts/service-layout.vue"),
        },
      ],
    },
    {
      path: "/:locale?/:pathMatch(.*)*", // Catch-all route for 404
      name: "NotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

router.beforeEach(routeMiddleware);

export default router;
