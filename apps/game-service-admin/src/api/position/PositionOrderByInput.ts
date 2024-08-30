import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  characterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  xCoordinate?: SortOrder;
  yCoordinate?: SortOrder;
};
