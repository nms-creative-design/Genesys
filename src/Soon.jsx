import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-6 text-center bg-black text-white animate-fadeIn">
      <a href="#" className="cursor-pointer">
        <img src="/images/image.svg" alt="Logo" className="h-32 w-auto" />
      </a>
      <Typography variant="h1" className="font-semibold text-white">
        Coming Soon
      </Typography>
      <Typography variant="lead" className="text-gray-300 max-w-md">
        With Genesys, the future isn’t just imagined—it’s built.
      </Typography>
      
    </div>
  );
};

export default Soon;
