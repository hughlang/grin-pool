import React from 'react'
import { Redirect } from 'react-router-dom'
import { Alert, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody } from 'reactstrap'
import Spinner from 'react-spinkit'

export class SubmitFeedback extends React.Component {
  state = { redirectToReferrer: false }
  constructor () {
    super()
    this.state = {
      input: '',
      isAllowingLogs: false
    }
  }

  onChangeInput = (e) => {
    const input = e.target.value
    this.setState({
      input
    })
  }

  renderSpinner = () => {
    return <Spinner name='circle' color='white' fadeIn='none' style={{ marginLeft: 'auto', marginRight: 'auto', height: 21 }} />
  }

  submitFeedbackForm = (e) => {
    e.preventDefault()
    const { submitFeedbackForm } = this.props
    const { input } = this.state
    submitFeedbackForm(input)
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) return <Redirect to={from} />

    return (
      <Container className='dashboard'>
        <Row>
          <Col xs={12} md={12} lg={12} xl={12}>
            <h3 className='page-title'>Submit Feedback</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={6} xl={6}>
            <Card>
              <CardBody>
                <h4 className="account__subhead subhead">Start mining GRIN today</h4>
                <Form className='login-form'>
                  <FormGroup>
                    <Label>Feedback:</Label>
                    <Input rows={6} type="textarea" name="text" onChange={this.onChangeInput} />
                  </FormGroup>
                  <div>
                    {this.props.authError && (
                      <Alert color='danger' style={{ textAlign: 'center' }}>
                        {this.props.authError}
                      </Alert>
                    )}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <button onClick={this.register} className="btn btn-outline-primary account__btn account__btn--small">{'Reset'}</button>
                    <button onClick={this.submitFeedbackForm} className="btn btn-primary account__btn account__btn--small">{'Submit'}</button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
