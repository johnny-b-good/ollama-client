import { type FC } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui";

export type BackButtonProps = {
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ href }) => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href}>
        <ChevronLeft className="text-primary size-6" />
      </Link>
    </Button>
  );
};
