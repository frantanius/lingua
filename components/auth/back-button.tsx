import Link from "next/link";
import { Button } from "@/components/ui/button";

interface IBackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: IBackButtonProps) {
  return (
    <Button variant="primaryOutline" className="w-full font-normal" asChild>
      <Link href={href} className="normal-case">
        {label}
      </Link>
    </Button>
  );
}
