import { CharacterCreateNestedManyWithoutPlayersInput } from "./CharacterCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  characters?: CharacterCreateNestedManyWithoutPlayersInput;
  email?: string | null;
  username?: string | null;
};
