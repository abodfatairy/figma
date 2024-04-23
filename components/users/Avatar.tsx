import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

const IMAGE_SIZE = 48;

export function Avatar({
  otherStyle,
  name,
}: {
  otherStyle: string;
  name: string;
}) {
  return (
    <div
      className={`relative h-9 w-9 rounded-full  z-10 ${otherStyle} ${styles.avatar}`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        fill
        className='rounded-full'
        alt={name}
      />
    </div>
  );
}
