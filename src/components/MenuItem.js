import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div className="">
      <Link href={address} className=" hover:text-amber-600">
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
  