import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import AppForm from "../components/UI/AppForm.jsx";
import AppInput from "../components/UI/AppInput.jsx";
import AppButton from "../components/UI/AppButton.jsx";
import BgForm from "../assets/bg-form.jpg"
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";
const Login = () => {
        const [isLoading, setIsLoading] = useState(false)
        const navigate = useNavigate();
        const location = useLocation();
        const {signIn} = useAuth();
        const fromPage = location.state?.from?.pathname || '/'
        const {
            register,
            formState: {
                errors,
            },
            handleSubmit,
            reset
        } = useForm({
            mode: "onBlur"
        });
        const onSubmit = async (data) => {
            setIsLoading(true)
            const form = data
            const user = {
                name: form.login,
                password: form.password
            }
            await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(async response => {
                await axios.post('http://localhost:8000/login', data, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    setIsLoading(false)
                    signIn(user, () => navigate(fromPage, {replace: true}))
                })
            })
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
                            <p className="text-[#60646C] text-base font-bold">Нет аккаунта? <span
                                className="text-[#D52026]">Регистрация</span></p>
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
                        </div>
                    </div>
                    <img src={BgForm} alt="BgForm" className="rounded-2xl"/>
                </div>
            </div>
        );
    }
;

export default Login;