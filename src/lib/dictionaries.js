import tr from "@/messages/tr";
import en from "@/messages/en";

const dictionaries = {
  tr,
  en,
};

export const getDictionary = (locale) =>
  dictionaries[locale] || dictionaries.tr;
