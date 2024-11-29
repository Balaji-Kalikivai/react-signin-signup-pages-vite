import Field, { FieldProps } from './Field';

interface Formrops {
  title: string;
  fields: FieldProps[];
}

export default function Form(props: Formrops) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="form-container">
        {props.fields.map(function (fields) {
          return (
            <Field
              label={fields.label}
              placeholder={fields.placeholder}
              type={fields.type}
            />
          );
        })}
      </div>
      <button>Submit</button> <br />
      <br />
    </div>
  );
}
