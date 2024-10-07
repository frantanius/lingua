import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export default function EditLesson() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
}
