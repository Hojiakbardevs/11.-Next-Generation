import Card21 from "@/assets/card21.svg";
import Card22 from "@/assets/card22.svg";
import Card23 from "@/assets/card23.svg";
import Card24 from "@/assets/card24.svg";
import Card25 from "@/assets/card25.svg";
import Card26 from "@/assets/card26.svg";
import Card27 from "@/assets/card27.svg";
import Card28 from "@/assets/card28.svg";

const Cards = [
    {
        title:"Identities.",
        describe:'Keep your identity consistent and your resources in sync.',
        imageSrc:Card21,
    },
    {
        title:'Blocks.',
        describe:'Create and save custom slide layouts with easy drag & drop blocks.',
        imageSrc:Card22,
    },
    {
        title:'Layouts.',
        describe:'Design flexible layouts for any device and every screen.',
        imageSrc:Card23,
    },
    {
        title:'Controls.',
        describe:'Simply admin your team, workspace and integrations.',
        imageSrc:Card24,
    },
    {
        title:'Assets.',
        describe:'Use the smart asset library to manage your content with ease.',
        imageSrc:Card25,
    },
    {
        title:'Collaboration.',
        describe:'Edit with your team in real-time or invite view only guests.',
        imageSrc:Card26,
    },
    {
        title:'Merge.',
        describe:'Import your slides dynamically from other decks for rapid creation.',
        imageSrc:Card27,
    },
    {
        title:'Insights.',
        describe:'Get real-time analytics about your presentation decks.',
        imageSrc:Card28,
    },
]

export const UnderCards = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap mt-10">
      {Cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-center gap-4 items-start flex-col w-80 rounded-lg bg-neutral-700 p-4"
        >
          <img src={card.imageSrc} alt={card.title} className="object-cover" />
          <p className="text-base font-normal">{card.title}</p>
          <p className="text-base text-neutral-400 font-normal">{card.describe}</p>
        </div>
      ))}
    </div>
  );
};
