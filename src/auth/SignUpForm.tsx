import { FieldProps } from '../Componets/Field';
import Form from '../Componets/Form';

const SignUpFields: FieldProps[] = [
  { label: 'Username: ', placeholder: 'Please enter your username' },
  { label: 'Firstname: ', placeholder: 'Please enter your firstname' },
  { label: 'LastName: ', placeholder: 'Please enter your lastname' },
  { label: 'Email: ', placeholder: 'Please enter your email', type: 'email' },
  {
    label: 'Password: ',
    placeholder: 'Please provide your password',
    type: 'password',
  },
];

export default function SignUpForm() {
  return <Form title="SignUp Here..." fields={SignUpFields} />;
}
