import Input from 'components/Input';
import { Button } from 'components/Button';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';

const SignUp = (): JSX.Element => (
  <AuthContainer>
    <Input label="Enter your email address" placeholder="email@gmail.com"/>
    <Input label="Password" placeholder="Type your password" type="password"/>
    <Input label="Confirm password" placeholder="Type your password" type="password"/>
    <Button text="Sign in"/>
  </AuthContainer>
);
export default SignUp;
