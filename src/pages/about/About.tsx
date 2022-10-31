import React from 'react';
import {
  Row,
  Col,
  Panel,
  Form,
  Button,
  Schema,
  Grid,
  Input,
  Whisper,
  Tooltip,
  InputGroup,
  DatePicker,
  DateRangePicker
} from 'rsuite';

function asyncCheckUsername(name: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (name === 'abc') {
        resolve(false);
      } else {
        resolve(true);
      }
    }, 500);
  });
}

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType()
    .addRule((value: any, _data: any) => {
      return true;
      //return asyncCheckUsername(value);
    }, 'Duplicate username')
    .isRequired('This field is required.'),
});

const nameRule = Schema.Types.StringType().isRequired('This field is required.');
const emailRule = Schema.Types.StringType().isEmail('Please enter a valid email address.');
const dateofbirthRule = Schema.Types.StringType()
  .addRule((value: string, data: any) => {
    return true;
  }, 'Duplicate username')
  .isRequired('This field is required.');

function UsernameField() {
  return (
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" rule={nameRule} />
    </Form.Group>
  );
}

function EmailField() {
  return (
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" rule={emailRule} />
    </Form.Group>
  );
}

function DateField() {
  return (
    <Form.Group
      controlId="fromDate"
      id="dateofbirth"
      aria-invalid="true"
      aria-errormessage="dateofbirth-error-message"
    >
      <Form.ControlLabel>fromDate</Form.ControlLabel>
      {/* <DateRangePicker
        format="yyyy-MM-dd"
        defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-03-01 23:59:59')]}
      /> */}
      <DatePicker className="error-date" name="dateofbirth" oneTap style={{ width: 200 }} />
      <Form.ControlLabel style={{ color: 'red' }}>This field is required</Form.ControlLabel>
    </Form.Group>
  );
}

const About = () => {
  const styles = {
    width: 300,
    marginBottom: 10,
  };

  return (
    <Panel className="rs-panel-main" header={<h3 className="title">About</h3>}>
      {/* <Row gutter={30} className="dashboard-header">
      <Col xs={8}>
        <Panel className="trend-box bg-gradient-red">
          <div className="title">Page Views </div>
          <div className="value">281,358</div>
        </Panel>
      </Col>
      <Col xs={8}>
        <Panel className="trend-box bg-gradient-green">
          <div className="title">Visits </div>
          <div className="value">251,901</div>
        </Panel>
      </Col>
      <Col xs={8}>
        <Panel className="trend-box bg-gradient-blue">
          <div className="title">Unique Visitors</div>
          <div className="value">25,135</div>
        </Panel>
      </Col>
    </Row> */}
      <Panel className="rs-panel-content">
        <Grid fluid>
          {/* <Row> Dashboard </Row> */}
          <Row>
            <Form>
              <UsernameField />
              <EmailField />
              <DateField />
              {/* <DatePicker name="dateofbirth" oneTap style={{ width: 200 }}  /> */}
              <Button appearance="primary" type="submit">
                Submit
              </Button>
            </Form>
            {/* <Whisper
              trigger="contextMenu"
              speaker={<Tooltip arrow={false}>data error</Tooltip>}
            >
              <Input style={{ width: 300 }} placeholder="Default Input" />
            </Whisper>
            <InputGroup style={styles}>
              <InputGroup.Addon> @</InputGroup.Addon>
              <Input />
            </InputGroup> */}
            About What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or non-characteristic words etc.
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why
            do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or non-characteristic words
            etc.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or non-characteristic words
            etc.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or non-characteristic words
            etc.What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
            and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
            sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Row>
        </Grid>
      </Panel>
    </Panel>
  );
};

export default About;
