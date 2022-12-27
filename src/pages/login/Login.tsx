import React, { useRef } from 'react';
import { Form, Button, Panel, Stack, Schema } from 'rsuite';
import useAuth from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { StringType } = Schema.Types;

const model = Schema.Model({
  username: StringType().isRequired('Username is required.'),
  password: StringType(), // allows impersonate
});
const TextField = React.forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group className="form-group" controlId={`${name}-4`} ref={ref}>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const Login = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState<Record<string, any>>({
    username: '',
    password: '',
  });
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   login(formData.get('email') as string, formData.get('password') as string);
  // };

  // const handleSubmit = async () => {
  //   console.log('%c handleSubmit:', 'color:yellow');
  //   const formData = {};

  //   await login('', '');
  //   const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, 2000));

  //   console.log('%clogin:', 'color:yellow');
  //   navigate('/admin');
  // };

  async function handleSubmit() {
    if (Object.keys(formError).length !== 0) {
      return;
    }
    const isSignedIn = await login(formValue.username, formValue.password);
    if (isSignedIn) {
      console.log('%c isSignedIn :', 'color:yellow', isSignedIn);
      navigate('/admin');
      //  notifyMessage('Login Success', 'SUCCESS', 4000);
    } else {
      console.log('%c isSignedIn else :', 'color:yellow', isSignedIn);
      //  notifyMessage('Incorrect username or password', 'ERROR');
    }
  }

  return (
    <Stack
      ref={contentRef}
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh',
      }}
    >
      <Panel bordered style={{ background: '#fff', width: 400 }} header={<h3>Sign In</h3>}>
        <Form
          fluid
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <Form.Group>
            <Form.ControlLabel>Username or email address</Form.ControlLabel>
            <TextField name="username" />
            {/* <Form.Control name="name" /> */}
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <span>Password</span>
              {/* <a style={{ float: 'right' }}>Forgot password?</a> */}
            </Form.ControlLabel>
            {/* <Form.Control name="name" type="password" /> */}
            <TextField name="password" type="password" autoComplete="off" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <Button disabled={loading} appearance="primary" onClick={handleSubmit}>
                Sign in
              </Button>
            </Form.ControlLabel>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
};

export default Login;
