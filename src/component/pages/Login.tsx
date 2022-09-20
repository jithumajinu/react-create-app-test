import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import { Form, Button, ButtonToolbar, Schema, Panel, FlexboxGrid } from 'rsuite';
//import JSONTree from 'react-json-tree';

// const JSONView = ({ formValue: any, formError: any }) => (
//   <div style={{ marginBottom: 10 }}>
//     <Panel className="json-tree-wrapper" header={<p>formValue</p>}>
//       <JSONTree data={formValue} />
//     </Panel>

//     <Panel className="json-tree-wrapper" header={<p>formError</p>}>
//       <JSONTree data={formError} />
//     </Panel>
//   </div>
// );

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  age: NumberType('Please enter a valid number.').range(
    18,
    30,
    'Please enter a number from 18 to 30'
  ),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});
const TextField = React.forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

interface FormProp {
  name: String;
  email: String;
  age: String;
  password: String;
  verifyPassword: String;
}

const Login: React.FC = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState<any>({
    name: '',
    email: '',
    age: '',
    password: '',
    verifyPassword: ''
  });

  const handleSubmit = () => {
    // if (!formRef.current.check()) {
    //   console.error('Form Error');
    //   return;
    // }
    console.log(formValue, 'Form Value');
  };

  const handleCheckEmail = () => {
    // formRef.current.checkForField('email', checkResult => {
    //   console.log(checkResult);
    // });
  };

  return (
    <>
      <FlexboxGrid ref={contentRef}>
        <FlexboxGrid.Item colspan={12}>
          <Form 
            onChange={setFormValue}
            onCheck={setFormError}
            formValue={formValue}
            model={model}
          >
            <TextField name="name" label="Username" />
            <TextField name="email" label="Email" />
            <TextField name="age" label="Age" />
            <TextField name="password" label="Password" type="password" autoComplete="off" />
            <TextField
              name="verifyPassword"
              label="Verify password"
              type="password"
              autoComplete="off"
            />

            <ButtonToolbar>
              <Button appearance="primary" onClick={handleSubmit}>
                Submit
              </Button>

              <Button onClick={handleCheckEmail}>Check Email</Button>
            </ButtonToolbar>
          </Form>
        </FlexboxGrid.Item>
        {/* <FlexboxGrid.Item colspan={12}>
        <JSONView formValue={formValue} formError={formError} />
      </FlexboxGrid.Item> */}
      </FlexboxGrid>
    </>
  );
  // let navigate = useNavigate();
  // const [submitted, setSubmitted] = useState(false);
  // const { signIn } = useAuth();

  // async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
  //   event?.preventDefault();
  //   setSubmitted(true);
  //   await signIn();
  //   navigate('/dashboard');
  //   setSubmitted(false);
  // }

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1 style={{ margin: 10 }}>Login</h1>

  //     <form onSubmit={(event) => handleSignIn(event)}>
  //       <button type="submit" className="btn btn-dark">
  //         {!submitted ? `Sign In` : "fav"}
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Login;

// export const Login = () => {

//   return (

//     <div className="at-home">
//       login
//     </div>

//   );
// };

// export default Login;
