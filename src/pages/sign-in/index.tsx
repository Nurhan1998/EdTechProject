import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


import { HOME_PAGE } from 'configuration/urls';

import { Button } from 'components/Button';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import Input from 'components/Input';

import { signInRequest } from 'store/users/actions';
import { signInSelectData, signInSelectFetching } from 'store/users/selectors';


const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const singInData = useSelector(signInSelectData);
  const signInFetching = useSelector(signInSelectFetching);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (): void => {
    dispatch(signInRequest({ email, password }));
  };
  useEffect(() => {
    if (singInData) {
      router.push(HOME_PAGE);
    }
  }, [singInData, router]);

  return (
    <AuthContainer>
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        label="Email"
        placeholder="email"
        type="text"
      />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
        placeholder="password"
        type="password"
      />
      <Button disabled={!!signInFetching} onClick={signIn} text="Sign in"/>
    </AuthContainer>
  );

};
export default SignIn;
