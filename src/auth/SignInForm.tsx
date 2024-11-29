import { FieldProps } from '../Componets/Field';
import Form from '../Componets/Form';

const SignInFields: FieldProps[] = [
  { label: 'Username: ', placeholder: 'Please enter your username' },
  {
    label: 'Password: ',
    placeholder: 'Please provide your password',
    type: 'password',
  },
];

export default function SignInForm() {
  return <Form title="SignIn Here..." fields={SignInFields} />;
}
