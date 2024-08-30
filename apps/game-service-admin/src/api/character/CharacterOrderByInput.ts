import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  playerId?: SortOrder;
  updatedAt?: SortOrder;
};
