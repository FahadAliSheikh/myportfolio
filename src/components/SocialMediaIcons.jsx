import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/fahad-ali-317232124/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/icons/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/fahd_sheikh_/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/icons/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/Sheikh.Fahad.ul.Hassan/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/icons/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/fahad.ali.sheikh/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/icons/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
