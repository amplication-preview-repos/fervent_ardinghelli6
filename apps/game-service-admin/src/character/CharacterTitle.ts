import { Character as TCharacter } from "../api/character/Character";

export const CHARACTER_TITLE_FIELD = "name";

export const CharacterTitle = (record: TCharacter): string => {
  return record.name?.toString() || String(record.id);
};
