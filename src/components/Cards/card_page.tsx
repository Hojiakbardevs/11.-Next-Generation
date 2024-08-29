import { CardElement } from "./CardElement";
import Card11 from "@/assets/card11.svg";
import Card12 from "@/assets/card12.svg";

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
    </div>
  );
};
