import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Survey Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "emails" }
]

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, field => {
            return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(v=> console.log(v))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    errors.emails = validateEmails(values.emails || '')

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })

    return errors //if no errors, return {} its OK :)
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm)