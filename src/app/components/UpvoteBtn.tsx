"use client";

import { useState } from "react";
export default function UpvoteBtn() {
  const [upVoteCount, setUpVoteCount] = useState(0);
  return (
    <button
      onClick={() => setUpVoteCount(upVoteCount + 1)}
      className="bg-blue-500 text-white
p-2 mt-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out text-bold"
    >
      Upvote
    </button>
  );
}
