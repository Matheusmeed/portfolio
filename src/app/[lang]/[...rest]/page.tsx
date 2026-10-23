import { notFound } from "next/navigation";

/** Sends any unknown path to the translated 404 page. */
export default function CatchAll() {
  notFound();
}
