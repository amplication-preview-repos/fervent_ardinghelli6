import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PlayerWhereInput = {
  characters?: CharacterListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
};
