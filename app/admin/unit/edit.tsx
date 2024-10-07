import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export default function EditUnit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="Id" />
        <TextInput
          source="description"
          validate={[required()]}
          label="Description"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
}
