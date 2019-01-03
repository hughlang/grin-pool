
import { connect } from 'react-redux'
import { SubmitFeedback } from '../../containers/SubmitFeedback/SubmitFeedback.js'
import { submitFeedbackForm } from '../actions/minerDataActions.js'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitFeedbackForm: (input: string) => dispatch(submitFeedbackForm(input))
  }
}

export const SubmitFeedbackConnector = connect(mapStateToProps, mapDispatchToProps)(SubmitFeedback)
