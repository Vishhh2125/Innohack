import { Outlet } from "react-router-dom";
import { HealthcareSidebar } from "./HealthcareSidebar";

function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar: static, does not scroll */}
      <HealthcareSidebar />
      {/* Main content: scrollable */}
      <main className="flex-1 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;