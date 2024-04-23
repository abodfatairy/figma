"use client";

import { useDeleteComment, useThreads } from "@/liveblocks.config";
import { Composer, Thread } from "@liveblocks/react-comments";

export function CommentsOverlay() {
  const { threads } = useThreads();
  console.log(threads);
  
  const deletee = useDeleteComment();
  return (
    <div className=''>
      {threads.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
        />
      ))}

      <Composer
        onComposerSubmit={({ body }, e) => {
          e.preventDefault()


      }}
      />
    </div>
  );
}
