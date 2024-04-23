
import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { useOthers } from "@/liveblocks.config";

const LiveCursors = () => {
  const others = useOthers();
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return;
    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y+50}
        message={presence.message!}
      />
    );
  });
};

export default LiveCursors;
