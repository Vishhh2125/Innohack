// This file uses a simple className joiner instead of the cn utility for self-containment.
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, MessageCircle, Calendar, User, Menu, FileText } from "lucide-react";

// Simple className joiner
function join(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "AI Chat", href: "/chat", icon: MessageCircle },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Medical Records", href: "/medical-records", icon: FileText },
  { name: "Profile", href: "/profile", icon: User },
];

export function HealthcareSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={join(
        "flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out h-screen",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <h1 className="font-semibold text-lg">HealthCare</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              join(
                "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-100",
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-500"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium">Dr. Assistant</p>
              <p className="text-xs text-gray-600">Online</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}