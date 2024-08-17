import DashboardHeader from "@/components/dashboard/header";
import React from "react";

export default function functionName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
}
