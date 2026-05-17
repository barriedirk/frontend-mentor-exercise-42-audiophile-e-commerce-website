import { ProductGallery } from "@/core/types/product.types";
import Picture from "./Picture";
import { cn } from "@/core/utils/cn";

interface GalleryProps {
  readonly gallery: ProductGallery;
  readonly className?: string;
}

export default function Gallery({ gallery, className }: GalleryProps) {
  return (
    <section className={cn(className)} aria-label="Product image gallery">
      <ul className="grid grid-cols-1 md:grid-cols-[40%_1fr] md:grid-rows-2 gap-5 md:gap-8 list-none p-0 m-0">
        <li className="rounded-lg overflow-hidden h-[200px] md:h-[280px]">
          <figure className="m-0 h-full w-full">
            <Picture
              {...gallery.first}
              alt="Feature detail"
              className="w-full h-full object-cover"
            />
          </figure>
        </li>

        <li className="rounded-lg overflow-hidden h-[200px] md:h-[280px] md:row-start-2">
          <figure className="m-0 h-full w-full">
            <Picture
              {...gallery.second}
              alt="Included accessories"
              className="w-full h-full object-cover"
            />
          </figure>
        </li>

        <li className="rounded-lg overflow-hidden h-full min-h-[400px] md:min-h-[592px] md:col-start-2 md:row-span-2">
          <figure className="m-0 h-full w-full">
            <Picture
              {...gallery.third}
              alt="Full product view"
              className="w-full h-full object-cover"
            />
          </figure>
        </li>
      </ul>
    </section>
  );
}
