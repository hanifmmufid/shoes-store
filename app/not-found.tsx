'use client';
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        alt={`${APP_NAME} logo`}
        height={100}
        width={100}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold m-4">Page Not Found</h1>
        <p className="text-destructive">
          Could not find the page you were looking for.
        </p>
        <Button className="mt-4 ml-2" onClick={() => (window.location.href = "/")}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
