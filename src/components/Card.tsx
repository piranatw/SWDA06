"use client";

import Image from "next/image";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
};

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <div className="relative h-[70%] w-full overflow-hidden rounded-t-lg">
        <Image src={imgSrc} alt={venueName} fill className="object-cover" />
      </div>
      <div className="h-[30%] w-full p-[10px]">
        <h2 className="text-xl font-semibold text-slate-900">{venueName}</h2>
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, newValue) => onRatingChange(newValue ?? 0)}
        />
      </div>
    </InteractiveCard>
  );
}
