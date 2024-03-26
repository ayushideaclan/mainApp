// routes.tsx
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Dashboard from "./Dashboard";
import NotFound from "./components/NotFound";
import ErrorFallback from "./components/ErrorFallback";
import Counter from "counter/Counter";
import ButtonWrapper from "sharedComponent/Button";

type LoadingFallback = React.ReactElement<{ isLoading: boolean }>;
type ErrorFallbackType = React.ReactElement<{ error: any }>;

interface RouteConfig {
  path: string;
  element: React.ReactElement;
  loadingFallback?: LoadingFallback;
  errorFallback?: ErrorFallbackType;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Dashboard />, // Replace with the appropriate component
    loadingFallback: <div>Loading Main Microfrontend...</div>,
    errorFallback: <div>Error loading Main Microfrontend</div>,
  },
  {
    path: "/counter",
    element: (
      <>
        <Counter />
        <ButtonWrapper />
      </>
    ), // Replace with the appropriate component
    loadingFallback: <div>Loading Counter Microfrontend...</div>,
    errorFallback: <div>Error loading Counter Microfrontend</div>,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ErrorBoundary key={route.path} fallbackRender={ErrorFallback}>
              {route.loadingFallback && (
                <Suspense fallback={route.loadingFallback}>
                  {route.element}
                </Suspense>
              )}
            </ErrorBoundary>
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
