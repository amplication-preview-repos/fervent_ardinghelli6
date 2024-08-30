import { PositionWhereInput } from "./PositionWhereInput";
import { PositionOrderByInput } from "./PositionOrderByInput";

export type PositionFindManyArgs = {
  where?: PositionWhereInput;
  orderBy?: Array<PositionOrderByInput>;
  skip?: number;
  take?: number;
};
