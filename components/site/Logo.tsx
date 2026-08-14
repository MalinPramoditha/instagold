import { cn } from "@/app/lib/utils";
import black from "../../public/assets/logo/logo_black.svg";
import white from "../../public/assets/logo/logo_white.svg";


export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <img
      src={tone === "light" ? white.src : black.src}
      alt="InstaGold"
      className={cn("block h-8 w-auto sm:h-10", className)}
      loading="eager"
      decoding="async"
    />
  );
}
