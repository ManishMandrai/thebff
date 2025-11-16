import localFont from "next/font/local";

export const textaAlt = localFont({
  src: [
    {
      path: "./../public/fonts/TextaAltRegular.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "./../public/fonts/texta-alt/TextaAlt-Bold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-texta-alt",
});
