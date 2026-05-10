import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
  objectPositions?: string[];
}

export const ImageGallery = ({ images, title, className = "", objectPositions }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-secondary ${className}`}>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: objectPositions?.[0] ?? "center" }}
          loading="lazy"
        />
      </div>
    );
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative overflow-hidden rounded-lg bg-secondary group ${className}`}>
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: objectPositions?.[currentIndex] ?? "center" }}
        loading="lazy"
      />

      {/* Carousel Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-black/30 via-transparent to-black/30">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm border border-white/30"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm border border-white/30"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] text-white/90 text-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
