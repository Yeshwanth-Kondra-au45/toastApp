import React from "react";
import { Food, ProfileLayout, Special, Beverages, Deserts } from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProfileLayout />}>
        <Route path="special" element={<Special />} />
        <Route path="beverage" element={<Beverages />} />
        <Route path="main" element={<Food />} />
        <Route path="deserts" element={<Deserts />} />
      </Route>
    </>
  )
);

const NavigationRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default NavigationRoutes;
