import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { postLogIn } from '../../store/slices/AuthSlice'
import { Formik, Field, Form } from "formik";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLogin, error, loading } = useAppSelector((state) => state.auth)

    const loadMessage = () => {
        console.log('loading');
    };

    const successMessage = () => {
        console.log('Logged in');
    };


    useEffect(() => {
        if (error) {
            navigate('/login', { replace: true });
        } else if (loading) {
            loadMessage();
        } else if (isLogin) {
            successMessage();
            navigate('/dashboard', { replace: true });
        }
    }, [error, loading, isLogin, navigate]);

    return (
        <>

            <div className="hero is-fullheight">
                <Formik initialValues={{ email: '', password: '' }}
                onSubmit={(values) => { dispatch(postLogIn(values)) }}
                >
                    <Form>
                        <div className="hero-body is-justify-content-center is-align-items-center">
                            <div className="columns is-flex is-flex-direction-column box">
                                <div className="column">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" placeholder="Email address" className="input is-link form-control" />

                                </div>
                                <div className="column">
                                    <label htmlFor="Name">Password</label>
                                    <Field name="password" type="password" placeholder="Password" className="form-control input is-link" />
                                </div>
                                <div className="column">
                                    <button className="button is-link is-fullwidth" type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Login;
