import HomeClient from "./HomeClient";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return <HomeClient dict={dict} />;
}
