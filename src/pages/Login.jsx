import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import AppForm from "../components/UI/AppForm.jsx";
import AppInput from "../components/UI/AppInput.jsx";
import AppButton from "../components/UI/AppButton.jsx";
import BgForm from "../assets/bg-form.jpg"
import axios from "../api/axios";
import useAuth from "../hooks/useAuth.js";
import {Link, useLocation, useNavigate} from "react-router-dom";

const LOGIN_URL = '/login'
const COOKIE_URL = '/sanctum/csrf-cookie'
const Login = () => {
        const {setAuth} = useAuth()

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';

        const [errMsg, setErrMsg] = useState('')
        const [isLoading, setIsLoading] = useState(false)
        const {
            register,
            formState: {
                errors,
            },
            handleSubmit,
            reset
        } = useForm({
            mode: 'onBlur'
        });
        const onSubmit = async (data) => {
            setIsLoading(true)
            try {
                await axios.get(COOKIE_URL).then(res => {
                    axios.post(LOGIN_URL, data).then(res => {
                        setAuth(res.data)
                        navigate(from, {replace: true})
                    })
                })
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('Нет ответа сервера');
                } else if (err.response?.status === 400) {
                    setErrMsg('Имя пользователя или пароль отсутствует')
                } else if (err.response?.status === 401) {
                    setErrMsg('Отказ в доступе')
                } else {
                    setErrMsg('Ошибка входа')
                }
            }
            reset()
            setIsLoading(false)
        }
        const logout = async () => {
            await axios.delete('http://localhost:8000/logout', {withCredentials: true,}).then(response => {
                console.log(response)
            })
        }

        return (
            <div className="flex items-center justify-center h-screen">
                <div
                    className="m-auto w-[1170px] bg-[#1E1F24] p-3 flex p-4 rounded-2xl flex items-center justify-between m-4">
                    <div className="flex justify-center w-full ">
                        <div className="flex flex-col gap-y-4 w-[430px]">
                            <h1 className="font-bold text-3xl text-[#E5E6EB]">Вход</h1>
                            <p className="text-[#60646C] text-base font-bold">Нет аккаунта? <Link to="/register"
                                className="text-[#D52026]">Регистрация</Link></p>
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
                                    isLoading={isLoading}
                                />
                            </AppForm>
                            <AppButton
                                type="primary"
                                btnText="Выйти"
                                isLoading={isLoading}
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