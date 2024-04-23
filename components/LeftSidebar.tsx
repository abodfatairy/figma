"use client";

import { useMemo } from "react";
import { Comments } from "./comments/Comments";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  return (
    <section className='flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 w-[200px] min-w-[200px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20'>
      <h3 className='border border-primary-grey-200 px-5 py-4 text-xs uppercase '>
        Layers
      </h3>
      <div className='flex flex-col'>
        <Comments />
      </div>
    </section>
  );
};

export default LeftSidebar;
