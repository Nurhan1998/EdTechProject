import Input from 'components/Input';
import { Button } from 'components/Button';
import AuthLayout from 'components/AuthLayout';

const SignUp = (): JSX.Element => (
  <AuthLayout>
    <Input label="Enter your email address" placeholder="email@gmail.com"/>
    <Input label="Password" placeholder="Type your password" type="password"/>
    <Input label="Confirm password" placeholder="Type your password" type="password"/>
    <Button text="Sign in"/>
  </AuthLayout>
);
export default SignUp;
