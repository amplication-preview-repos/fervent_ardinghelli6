import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHARACTER_TITLE_FIELD } from "../character/CharacterTitle";

export const PositionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
