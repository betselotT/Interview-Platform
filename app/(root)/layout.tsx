import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Interview Prep</h2>
        </Link>

        {children}
      </nav>
    </div>
  );
};

export default Rootlayout;
