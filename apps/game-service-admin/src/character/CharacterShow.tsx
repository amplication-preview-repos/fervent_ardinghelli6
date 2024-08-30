import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHARACTER_TITLE_FIELD } from "./CharacterTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const CharacterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Position"
          target="characterId"
          label="Positions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Character"
              source="character.id"
              reference="Character"
            >
              <TextField source={CHARACTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="xCoordinate" source="xCoordinate" />
            <TextField label="yCoordinate" source="yCoordinate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
