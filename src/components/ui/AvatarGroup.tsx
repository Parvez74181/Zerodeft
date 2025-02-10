"use client";
import { Avatar, AvatarGroup as AvatarGroupUI } from "@heroui/react";
type Props = {
  images?: string[];
};
export default function AvatarGroup({ images }: Props) {
  return (
    <AvatarGroupUI isBordered>
      {images && images.map((image, i) => <Avatar key={i} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />)}
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
    </AvatarGroupUI>
  );
}
