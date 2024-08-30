import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { PositionUpdateManyWithoutCharactersInput } from "./PositionUpdateManyWithoutCharactersInput";

export type CharacterUpdateInput = {
  name?: string | null;
  player?: PlayerWhereUniqueInput | null;
  positions?: PositionUpdateManyWithoutCharactersInput;
};
