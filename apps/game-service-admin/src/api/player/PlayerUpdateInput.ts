import { CharacterUpdateManyWithoutPlayersInput } from "./CharacterUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  characters?: CharacterUpdateManyWithoutPlayersInput;
  email?: string | null;
  username?: string | null;
};
