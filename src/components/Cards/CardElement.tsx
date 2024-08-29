interface CardElementProps {
  title: string;
  subtitle: string;
  description: string;
  smallText: string;
  imageSrc: string; // Assuming imageSrc is a string path to the image
}

export const CardElement: React.FC<CardElementProps> = ({
  title,
  subtitle,
  description,
  smallText,
  imageSrc,
}) => {
  return (
    <div className="w-[496px] bg-neutral-700 p-5 rounded-lg h-[660px] flex flex-col justify-between items-center">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-normal text-neutral-400">{title}</p>
        <p className="text-3xl">{subtitle}</p>
        <p className="text-3xl text-neutral-400 font-normal">{description}</p>
        <p className="text-sm text-neutral-400 font-normal">{smallText}</p>
      </div>
      <div>
        {/* Render the image using the imageSrc prop */}
        <img src={imageSrc} alt="Card Image" />
      </div>
    </div>
  );
};
