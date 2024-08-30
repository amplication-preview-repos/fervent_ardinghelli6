import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type CharacterUpdateManyWithoutPlayersInput = {
  connect?: Array<CharacterWhereUniqueInput>;
  disconnect?: Array<CharacterWhereUniqueInput>;
  set?: Array<CharacterWhereUniqueInput>;
};
