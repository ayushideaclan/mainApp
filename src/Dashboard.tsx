import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import MainData from "./Observable";

const Dashboard = () => {
  // Define the user details
  const userDetails = useMemo(
    () => ({
      name: "John Doe",
      email: "john@example.com",
    }),
    []
  ); // Empty dependency array ensures the value is memoized and not recalculated

  // Create a custom event with the user details
  const userDetailsEvent = useMemo(
    () =>
      new CustomEvent("userDetailsEvent", {
        detail: userDetails,
      }),
    [userDetails]
  ); // Memoize the event object with userDetails as dependency

  useEffect(() => {
    MainData.subscribe((data) => {
      console.log("========>", data);
    });
  });
  // Dispatch the custom event when the component mounts
  useEffect(() => {
    // window.addEventListener("userDetailsEvent", (event: any) =>
    //   console.log(event.detail)
    // );
    window.dispatchEvent(userDetailsEvent);
  }, [userDetailsEvent]); // Dispatch only when userDetailsEvent changes

  return (
    <div>
      <h1>Main App Dashboard</h1>
      <Link to="/counter">Go to Counter App</Link>
    </div>
  );
};

export default Dashboard;
