import { cn } from "@/app/lib/utils";
import black from "../../public/assets/instagold-black.png.asset.json";
import white from "../../public/assets/instagold-white2.png.asset.json";


export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <img
      src={tone === "light" ? white.url : black.url}
      alt="InstaGold"
      className={cn("block h-5 w-auto sm:h-6", className)}
      loading="eager"
      decoding="async"
    />
  );
}
