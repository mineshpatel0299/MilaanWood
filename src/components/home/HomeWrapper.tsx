"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";

const SESSION_KEY = "milanwood_preloader_shown";

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
 const [showPreloader, setShowPreloader] = useState(false);
 const [ready, setReady] = useState(false);

 useEffect(() => {
 const alreadyShown = sessionStorage.getItem(SESSION_KEY);
 if (!alreadyShown) {
 setShowPreloader(true);
 }
 setReady(true);
 }, []);

 const handleEnter = () => {
 sessionStorage.setItem(SESSION_KEY, "1");
 setShowPreloader(false);
 };

 if (!ready) {
 return (
 <div style={{ overflow: "hidden", height: "100vh" }}>
 {children}
 </div>
 );
 }

 return (
 <>
 {showPreloader && <Preloader onEnter={handleEnter} />}
 <div style={{ overflow: showPreloader ? "hidden" : undefined, height: showPreloader ? "100vh" : undefined }}>
 {children}
 </div>
 </>
 );
}
