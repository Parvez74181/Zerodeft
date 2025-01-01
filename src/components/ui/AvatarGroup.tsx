"use client";
import { Avatar, AvatarGroup as AvatarGroupUI } from "@nextui-org/react";

export default function AvatarGroup() {
  return (
    <>
      <div className="flex md:justify-center items-center flex-row md:flex-col gap-5 md:gap-2">
        <AvatarGroupUI isBordered>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </AvatarGroupUI>

        <p className="text-sm">
          FOUNDERS of <br /> Dhaka Web Online
        </p>
      </div>
    </>
  );
}
