import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div
          className="absolute top-[10px] right-[20px] rounded-full overflow-hidden border-4 border-purple-500 shadow-lg
                w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40"
        >
          <Image
            src="/images/img.jpeg"
            alt="Arthur Fialho"
            width={160}
            height={160}
            quality={100}
            style={{ objectPosition: "top" }}
            className="object-cover w-full h-full rounded-full"
            priority
          />
        </div>
        <Grid />
      </div>
    </main>
  );
}
