import './DeliveryForm.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    address: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required()
});

const DeliveryForm = (props) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                phone: '',
                fastDelivery: false
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                props.completeOrder(values)
            }}
        >
            {({ errors, touched, dirty }) => (
                <Form>
                    <div className='form'>
                        <div className='formItem'>
                            <label className='formItemName mr' htmlFor="firstName">First Name: </label>
                            <div>
                                <Field name="firstName" />
                                {errors.firstName && touched.firstName ? (
                                    <div className='error'>{errors.firstName}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='formItem'>
                            <label className='formItemName mr' htmlFor="lastName">Last Name: </label>
                            <div>
                                <Field name="lastName" />
                                {errors.lastName && touched.lastName ? (
                                    <div className='error'>{errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='formItem'>
                            <label className='formItemName mr' htmlFor="address">Address: </label>
                            <div>
                                <Field name="address" />
                                {errors.address && touched.address ? (
                                    <div className='error'>{errors.address}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='formItem'>
                            <label className='formItemName mr' htmlFor="phone">Phone: </label>
                            <div>
                                <Field name="phone" />
                                {errors.phone && touched.phone ? (
                                    <div className='error'>{errors.phone}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className='formItem'>
                            <label className='mr' htmlFor="fastDelivery">Fast Delivery</label>
                            <Field type="checkbox" name="fastDelivery" />
                        </div>

                        <button className='formBtn' disabled={!dirty || Object.keys(errors).length > 0} type="submit">Order</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default DeliveryForm