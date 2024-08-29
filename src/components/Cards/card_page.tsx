import { CardElement } from "./CardElement";
import Card11 from "@/assets/card11.svg";
import Card12 from "@/assets/card12.svg";
import Card13 from "@/assets/card13.svg";
import Card14 from "@/assets/card14.svg";

export const CardsPage = () => {
  return (
    <div className="container">
    <div className="flex gap-10 justify-center items-center flex-wrap">
    <CardElement
        title="Design"
        subtitle="Born to perform."
        description="Design intuitively and keep your brand identity in sync across your workspace."
        smallText="Share text styles, custom fonts, colors, and brand assets."
        imageSrc={Card11}></CardElement>
        
    <CardElement
        title="Content"
        subtitle="Team focus."
        description="Kick-off ideas fast with reusable block injection and the smart asset library."
        smallText="The smart asset library makes everything you create or add reusable, even text and slides."
        imageSrc={Card12}></CardElement>

    </div>
      <h1 className="text-8xl leading-[96px]">
        Everything you need to collaborate tighter, create faster and present
        better.
      </h1>
      <div className="flex gap-10 justify-center items-center flex-wrap">
        <CardElement
        title="Experience"
        subtitle="Stop clicking and start scrolling."
        description="Made for any screen and any content with zero detours."
        smallText="Present hands-off, remote or in person. No broken fonts, video placeholders and missing assets."
        imageSrc={Card13}
        />
        <CardElement
        title="Management"
        subtitle="Ultimate control."
        description="Manage your team, control access and analyse your decks in real-time."
        smallText="Quickly gain insights and stay up to date with decks that are shared outside of your company."
        imageSrc={Card14}
        />
      </div>
    </div>
  );
};
