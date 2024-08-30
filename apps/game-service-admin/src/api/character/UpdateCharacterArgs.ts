import { CharacterWhereUniqueInput } from "./CharacterWhereUniqueInput";
import { CharacterUpdateInput } from "./CharacterUpdateInput";

export type UpdateCharacterArgs = {
  where: CharacterWhereUniqueInput;
  data: CharacterUpdateInput;
};
