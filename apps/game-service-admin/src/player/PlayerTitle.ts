import { Player as TPlayer } from "../api/player/Player";

export const PLAYER_TITLE_FIELD = "username";

export const PlayerTitle = (record: TPlayer): string => {
  return record.username?.toString() || String(record.id);
};
