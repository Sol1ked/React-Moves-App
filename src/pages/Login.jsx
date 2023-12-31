import React from 'react';
import {useForm} from "react-hook-form";
import AppForm from "../components/UI/AppForm.jsx";
import AppInput from "../components/UI/AppInput.jsx";
import AppButton from "../components/UI/AppButton.jsx";
import BgForm from "../assets/bg-form.jpg"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useLoading} from "../hoc/LoadingProvider.jsx";
import AppMessage from "../components/UI/AppMessage.jsx";

const Login = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const fromPage = location.state?.from?.pathname || '/';
        const {signIn, signOut} = useAuth();
        const {notification, hideNotification} = useLoading()
        const {
            register,
            formState: {errors},
            handleSubmit,
            reset
        } = useForm({
            mode: 'onBlur'
        });

        const onSubmit = async (data) => {
            await signIn(data);
            navigate(fromPage, {replace: true});
            reset();
        };

        const logout = async () => {
            await signOut(() => {
                navigate('/login', {replace: true})
            });
        };
        return (
            <div className="flex items-center justify-center h-screen">
                <div
                    className="m-auto w-[1170px] bg-[#1E1F24] p-3 flex p-4 rounded-2xl flex items-center justify-between m-4 relative">
                    {notification.isOpen &&
                        <AppMessage
                            type={notification.type}
                            message={notification.type}
                            messageText={notification.message}
                            closeModal={hideNotification}
                        />
                    }
                    <div className="flex justify-center w-full">
                        <div className="flex flex-col gap-y-4 w-[430px]">
                            <h1 className="font-bold text-3xl text-[#E5E6EB]">Вход</h1>
                            <p className="text-[#60646C] text-base font-bold">Нет аккаунта? <Link to="/register"
                                                                                                  className="text-[#D52026]">Регистрация</Link>
                            </p>
                            <AppForm onSubmit={handleSubmit(onSubmit)}>
                                <AppInput
                                    {...register('login', {
                                        required: "Поле обязательно для заполнения!",
                                        minLength: {
                                            value: 2,
                                            message: "Минимальная длина логина 2 символов!"
                                        }
                                    })}
                                    errors={errors}
                                    placeholder="Введите логин"/>
                                <div className="text-base text-red-600 h-[10px]">
                                    {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
                                </div>
                                <AppInput
                                    {...register('password', {
                                        required: "Поле обязательно для заполнения!",
                                        minLength: {
                                            value: 8,
                                            message: "Минимальная длина пароля 8 символов!"
                                        }
                                    })}
                                    errors={errors}
                                    placeholder="Введите Пароль"
                                />
                                <div className="text-base text-red-600 h-[10px] mb-4">
                                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                                </div>
                                <AppButton
                                    type="primary"
                                    btnText="Войти"
                                />
                            </AppForm>
                            <AppButton
                                type="primary"
                                btnText="Выйти"
                                onClick={logout}
                            />
                        </div>
                    </div>
                    <img src={BgForm} alt="BgForm" className="rounded-2xl"/>
                </div>
            </div>
        );
    }
;

export default Login;