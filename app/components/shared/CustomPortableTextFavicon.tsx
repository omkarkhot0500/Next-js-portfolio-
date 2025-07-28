import React from "react";
import { faviconType } from "@/types"; // Adjust path if needed

const Favicon: React.FC<faviconType> = ({ domain, alt }) => {
  if (!domain) return null;

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
      alt={alt ?? "favicon"}
      className="w-5 h-5"
      loading="lazy"
      decoding="async"
    />
  );
};

export default Favicon;
