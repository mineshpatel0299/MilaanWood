"use client";

import Image from "next/image";

const PARTNERS = [
  { name: "Rajiv Associates", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/Rajiv-Associates-Logo-1_qbxlf4.png" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/main-logo-cp_e4x7b9.webp" },
  { name: "Tatva", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/tatvalogonew_toblkq.png" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/logo-1-e1596178115267_wvjong.png" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/images-5_1_1_qrwdpb.jpg" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/png3_rh4o35.png" },
  { name: "Omaxe", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/omaxe-logo_z9jbxg.webp" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/logo-5_b2xyyq.png" },
  { name: "Partner", src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783772093/HLogo_Final__cvei0n.jpg" },
  {
    name: "CP Kukreja Architects",
    src: "https://res.cloudinary.com/djicxkd9u/image/upload/v1783773008/logow_1_1_wv90zv.png",
    aspect: 2721 / 696,
    // Source file has the wordmark in white, invisible on a white section — split the
    // logo mark from the wordmark and force the wordmark black via a clipped, inverted layer.
    splitAt: 0.24,
  },
];

export default function PartnersMarquee() {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white py-14 md:py-20 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-8 md:mb-12">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
          Trusted by Leading Architects, Builders &amp; Real Estate Names
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-partners-marquee">
          {track.map((partner, i) =>
            partner.splitAt ? (
              <div
                key={`${partner.name}-${i}`}
                className="relative shrink-0 mx-8 md:mx-14 h-14 md:h-20"
                style={{ aspectRatio: partner.aspect }}
              >
                {/* Logo mark, untouched */}
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 220px, 320px"
                  className="object-contain"
                  style={{ clipPath: `inset(0 ${100 - partner.splitAt * 100}% 0 0)` }}
                />
                {/* Wordmark, forced black (source file renders it white) */}
                <Image
                  src={partner.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 768px) 220px, 320px"
                  className="object-contain"
                  style={{ clipPath: `inset(0 0 0 ${partner.splitAt * 100}%)`, filter: "invert(1)" }}
                />
              </div>
            ) : (
              <div
                key={`${partner.name}-${i}`}
                className="relative shrink-0 mx-8 md:mx-14 h-14 md:h-20 w-32 md:w-44"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
