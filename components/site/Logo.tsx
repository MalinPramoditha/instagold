import { cn } from "@/app/lib/utils";
import black from "../../public/assets/logo/logo_black.svg";
import white from "../../public/assets/logo/logo_white.svg";

// 140x40
const logoWhite = (
  <g fill="none" fillRule="evenodd">
    <g transform="translate(0 10)">
      <text fontFamily="AgathoBold, Agatho" fontSize="100" fontWeight="bold" letterSpacing="3.668">
        <tspan x="0" y="95" fill="#FFFFFF">INSTA</tspan>
        <tspan x="290.239" y="95" fill="#D4AF37">GOLD</tspan>
      </text>
      <text fontFamily="Commissioner-Thin_Light, Commissioner" fontSize="40" fontWeight="300" letterSpacing="15">
        <tspan x="157" y="150" fill="#FFFFFF">BUYERS</tspan>
      </text>
    </g>
    <g stroke="#D4AF37" strokeLinecap="round" strokeWidth="3">
      <path d="M0 143.5h144.037M0 10h260.075M298.537 10h260.075M415 143.5h144.037" />
    </g>
    <rect width="14" height="14" fill="#D4AF37" transform="translate(280 10) rotate(45) translate(-280 -10)" x="273" y="3" />
  </g>
)
const logoBlack = (
  <g fill="none" fillRule="evenodd">
    <text fontFamily="AgathoBold, Agatho" fontSize="100" fontWeight="bold" letterSpacing="3.668">
      <tspan x="0" y="105" fill="#151515">INSTA</tspan>
      <tspan x="290.239" y="105" fill="#D4AF37">GOLD</tspan>
    </text>
    <text fontFamily="Commissioner-Thin_Light, Commissioner" fontSize="40" fontWeight="300" letterSpacing="15">
      <tspan x="166" y="160" fill="#151515">BUYERS</tspan>
    </text>
    <g stroke="#D4AF37" strokeLinecap="round" strokeWidth="3">
      <path d="M0 143.5h144.037M0 10h260.075M298.537 10h260.075M415 143.5h144.037" />
    </g>
    <rect width="14" height="14" fill="#D4AF37" transform="translate(280 10) rotate(45) translate(-280 -10)" x="273" y="3" />
  </g>

)



export function BrandMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {


  return (
    <div className={cn("flex h-8 w-auto sm:h-10 justify-start items-center", className)}>
      <svg
        viewBox="0 0 560 168"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full object-contain"
      >
        {tone === "light" ? logoWhite : logoBlack}
      </svg>
    </div>
    // <img
    //   src={tone === "light" ? white.src : black.src}
    //   alt="InstaGold"
    //   className={cn("block h-8 w-auto sm:h-10", className)}
    //   loading="eager"
    //   decoding="async"
    // />
  );
}
