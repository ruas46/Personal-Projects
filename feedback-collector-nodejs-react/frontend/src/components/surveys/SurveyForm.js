import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, field => {
            return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })

    return errors //if no errors, return {} its OK :)
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)