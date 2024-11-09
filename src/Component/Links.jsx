import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@awesome.me/kit-KIT_CODE/icons";

function Links() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] md:w-[500px] h-auto py-8 backdrop-blur-sm bg-white/30 rounded-3xl flex flex-col gap-4">
        <Link
          url={"www.facebook.com"}
          user={"Amkeni Ogn"}
          href={"https://www.facebook.com/profile.php?id=100017571492191"}
        />
        <Link
          url={"www.instagram.com"}
          user={"amkeni_org"}
          href={"https://www.instagram.com/amkeni_org/"}
        />
        <Link
          url={"www.tiktok.com"}
          user={"Amkeni Malindi Org"}
          href={"https://www.tiktok.com/@amkenimalindiorg?lang=en"}
        />
        <Link
          url={"www.x.com"}
          user={"amkeni_org"}
          href={"https://x.com/Amkeni_Org"}
        />
        <Link
          url={"www.linkedin.com"}
          user={"Amkeni Malindi"}
          href={"https://www.linkedin.com/company/amkeni-malindi/"}
        />
        <Link
          url={"https://amkenimalindi.wordpress.com/"}
          user={"Amkeni Malindi Organization"}
          href={"https://amkenimalindi.wordpress.com/"}
        />
        <div className="border-2 border-green-500">
          <FontAwesomeIcon icon={fas.faHouse} />
        </div>
      </div>
    </div>
  );
}

export default Links;
