import * as graphql from "@nestjs/graphql";
import { PositionResolverBase } from "./base/position.resolver.base";
import { Position } from "./base/Position";
import { PositionService } from "./position.service";

@graphql.Resolver(() => Position)
export class PositionResolver extends PositionResolverBase {
  constructor(protected readonly service: PositionService) {
    super(service);
  }
}
