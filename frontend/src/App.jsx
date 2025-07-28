import React from 'react'
// import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Page imports
import Home from "./components/pages/Home.jsx";
import Chat from "./components/pages/Chat.jsx";
import Appointments from "./components/pages/Appointments.jsx";
import MedicalRecords from "./components/pages/MedicalRecords.jsx";
// import NotFound from "./pages/NotFound";
import Layout from "./components/Layout.jsx";


import './App.css'

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <Toaster /> */}
        {/* <Sonner /> */}
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="medical-records" element={<MedicalRecords />} />
          </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
