import React, { useState } from 'react';
import Select, {
  components,
  MultiValueGenericProps,
  MultiValueProps,
  OnChangeValue,
  Props,
} from 'react-select';
//import { Field, Form, Formik, FormikActions, FormikProps } from 'formik';
import {
  Row,
  Col,
  Panel,
  Button,
  Schema,
  Grid,
  Input,
  Whisper,
  Tooltip,
  InputGroup,
  DatePicker,
  DateRangePicker,
} from 'rsuite';
import useAuth from '../../context/AuthContext';
//import useAuth from '@src/context/useAuth';

import { useAppContext } from '../../context/AppContext';

const About = () => {
  const { authUser } = useAppContext();

  console.log('%c:authUser', 'color:yellow', authUser);
 // const { login, loading, error } = useAuth();

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   login(formData.get('email') as string, formData.get('password') as string);
  // }

  const styles = {
    width: 300,
    marginBottom: 10,
  };

  const languageOptions = [
    {
      label: 'Chinese',
      value: 'zh-CN',
    },
    {
      label: 'English (US)',
      value: 'en-US',
    },
    {
      label: 'English (GB)',
      value: 'en-GB',
    },
    {
      label: 'French',
      value: 'fr-FR',
    },
    {
      label: 'Spanish',
      value: 'es-ES',
    },
  ];

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = useState<any>([]);

  // const onChange = (option: readonly Option[], actionMeta: ActionMeta<Option>) => {
  //   console.log('%c onchange:', 'color:yellow');
  // };

  console.log('%cselectedOption:', 'color:yellow', selectedOption);

  return (
    <Panel className="rs-panel-main" header={<h3 className="title">About</h3>}>
      <Panel className="rs-panel-content">
        <Grid fluid>
          <Row style={{ height: '500px' }}>
            {/* <Field
              className="custom-select"
              name="multiLanguages"
              options={languageOptions}
              component={CustomSelect}
              placeholder="Select multi languages..."
              isMulti={true}
            /> */}

            {/* <CustomSelect   name="multiLanguages" options={languageOptions} isMulti={true} /> */}

            <Select
              defaultValue={[options[2]]}
              isMulti
              name="colors"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={setSelectedOption}
            />
          </Row>
        </Grid>
      </Panel>
    </Panel>
  );
};

export default About;
