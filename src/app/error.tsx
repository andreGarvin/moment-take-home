'use client'

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error(props: ErrorPageProps) {
  const { error } = props;

  useEffect(() => {
    console.error(error)
  }, [error]);

  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <p className="mb-4 font-bold text-2xl first-letter:capitalize">
        something went wrong
      </p>
    </div>
  );
}
