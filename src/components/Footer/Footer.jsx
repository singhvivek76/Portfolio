import React from "react";

const Footer = () => {

  return (
    <footer className="text-[var(--color-text)] py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">



      <div className="container mx-auto text-center">
        <hr className="border-[var(--color-border)] mb-6" />
        {/* Copyright Text */}
        <p className="text-sm text-[var(--color-text-soft)] mt-6">
          © 2026 Vivek Kumar singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
