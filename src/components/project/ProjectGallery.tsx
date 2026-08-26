import Image from "next/image";
import { ProjectGalleryImage } from "@/types/project";
import { ImageIcon } from "lucide-react";

interface ProjectGalleryProps {
  images?: ProjectGalleryImage[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <ImageIcon className="w-5 h-5 text-neutral-500" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Visual Artifacts & Diagrams
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {images.map((image, idx) => (
          <figure
            key={idx}
            className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/60"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-neutral-950/20">
              <Image
                src={image.url}
                alt={image.alt || `${projectTitle} preview ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>
            {image.caption && (
              <figcaption className="p-3 sm:p-4 text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold mr-2">
                  {"// " + String(idx + 1).padStart(2, "0")}
                </span>
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
