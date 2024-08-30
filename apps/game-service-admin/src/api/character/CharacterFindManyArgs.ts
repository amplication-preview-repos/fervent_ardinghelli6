import { CharacterWhereInput } from "./CharacterWhereInput";
import { CharacterOrderByInput } from "./CharacterOrderByInput";

export type CharacterFindManyArgs = {
  where?: CharacterWhereInput;
  orderBy?: Array<CharacterOrderByInput>;
  skip?: number;
  take?: number;
};
