"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onEnter={() => setShowPreloader(false)} />}
      <div style={{ overflow: showPreloader ? "hidden" : undefined, height: showPreloader ? "100vh" : undefined }}>
        {children}
      </div>
    </>
  );
}
