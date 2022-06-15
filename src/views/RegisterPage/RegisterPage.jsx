import { NavLink } from 'react-router-dom';
import { validationRegisterSchema } from 'utilits/validationForms';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Title from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { ListAuth } from 'components/ListAuth/ListAuth.styled';
import { useRegistrationUserMutation } from 'server/authFetch';
import { isAuth, newToken } from 'redux/sliceAuth';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [createUser, { isError }] = useRegistrationUserMutation();

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handleName = event => {
    setName(event.target.value);
  };

  const onSubmitLogin = async event => {
    event.preventDefault();
    try {
      await validationRegisterSchema.validate({ email, password });
    } catch (error) {
      toast.warn(`${error}`);
      return;
    }
    const send = {
      name: name,
      email: email,
      password: password,
    };
    const responsRegister = await createUser(send);
    console.log(responsRegister);
    if (responsRegister.error?.status === 400) {
      toast.error('User dublicate');
      return;
    }
    if (responsRegister.data) {
      dispatch(newToken(responsRegister.data.token));
      dispatch(isAuth(responsRegister.data.user.name));
      toast.success('Create new user!');
    }
  };
  return (
    <ListAuth>
      <Title>Register please</Title>

      <NavLink to="/">Home</NavLink>
      <form onSubmit={onSubmitLogin}>
        <label>
          Full-name:
          <input
            required
            type="text"
            name="fullName"
            value={name}
            onChange={handleName}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label>
          Password:
          <input
            required
            type="text"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <p>
        <span>Do you have login?</span>
        <NavLink to="/auth/login">Login</NavLink>
      </p>
    </ListAuth>
  );
};
export default Registration;
