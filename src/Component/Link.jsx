import React from "react";
import { SocialIcon } from "react-social-icons";

function Link({ href, url, user }) {
  return (
    <a
      href={href}
      target="_blank"
      className="border-2 border-dotted border-amkeniBlue mx-4 rounded-xl p-2 flex justify-between items-center hover:bg-amkeniBlue hover:border-solid hover:transition-all duration-300 hover:tracking-[2px]"
    >
      <SocialIcon url={url} />
      <p className="text-xl sm:text-2xl lg:text-3xl">{user}</p>
    </a>
  );
}

export default Link;
