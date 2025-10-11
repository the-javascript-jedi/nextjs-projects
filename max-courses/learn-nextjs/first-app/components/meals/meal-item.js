import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  // Normalize image path to point to /images inside the public folder
  // This covers cases like "burger.jpg" or "/images/burger.jpg"
  let imagePath = image.startsWith("/images/")
    ? image
    : `/images/${image.replace(/^\/+/, "")}`;

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={400}
            height={250}
            style={{ objectFit: "cover" }}
            unoptimized // optional if you just want fast dev preview
          />
        </div>

        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
