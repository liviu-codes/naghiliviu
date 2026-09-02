import { en } from "./en";
import { ro } from "./ro";
import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, ro };
export const defaultLocale: Locale = "en";
export type { Dictionary, Locale, ProjectItem, SkillCategory } from "./types";
