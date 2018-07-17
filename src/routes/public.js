import HomePage from "../pages/HomePage/HomePage.js";
import EventsPage from "../pages/EventsPage/EventsPage.js";
import EventsCalendarPage from "../pages/EventsCalendarPage/EventsCalendarPage.js";
import MyCardsPage from "../pages/MyCardsPage/MyCardsPage.js";
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage.js";

const routes = [
  { path: "/events-calendar", component: EventsCalendarPage },
  { path: "/events", component: EventsPage },
  { path: "/cards", component: MyCardsPage },
  { path: "/account", component: MyAccountPage },
  { path: "/", component: HomePage }
];

export default routes;
