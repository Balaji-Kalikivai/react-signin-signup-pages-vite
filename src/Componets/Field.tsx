export interface FieldProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export default function Field(props: FieldProps) {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type || 'text'} placeholder={props.placeholder} />
    </div>
  );
}
