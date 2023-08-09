import React, {useRef, useState} from 'react';
import AppForm from "../components/UI/AppForm.jsx";
import AppInput from "../components/UI/AppInput.jsx";
import AppButton from "../components/UI/AppButton.jsx";
import BgForm from "../assets/bg-form.jpg";
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import AppMessage from "../components/UI/AppMessage.jsx";
import {useRequestManager} from "../hooks/useRequestManager.js";

const REGISTER_URL = '/register'
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: 'onBlur'
    });
    const password = useRef({})
    password.current = watch("password", "");

    const {isLoading, modal, sendRequest, closeModal} = useRequestManager();
    const onSubmit = async (data) => {
        await sendRequest(REGISTER_URL, 'post', data);
        reset()
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="m-auto w-[1170px] bg-[#1E1F24] p-3 flex p-4 rounded-2xl flex items-center justify-between m-4 relative">
                {modal.isOpen &&
                    <AppMessage
                        type={modal.type}
                        message={modal.type}
                        messageText={modal.message}
                        closeModal={closeModal}
                    />
                }
                <div className="flex justify-center w-full ">
                    <div className="flex flex-col gap-y-4 w-[430px]">
                        <h1 className="font-bold text-3xl text-[#E5E6EB]">Регистрация</h1>
                        <p className="text-[#60646C] text-base font-bold">Есть аккаунт? <Link to="/login"
                                                                                              className="text-[#D52026]">Войти</Link>
                        </p>
                        <AppForm onSubmit={handleSubmit(onSubmit)}>
                            <AppInput
                                {...register('name', {
                                    required: "Поле обязательно для заполнения!",
                                    minLength: {
                                        value: 6,
                                        message: "Минимальная длина поля 6 символов!"
                                    }
                                })}
                                errors={errors}
                                placeholder="Введите ФИО"/>
                            <div className="text-base text-red-600 h-[10px]">
                                {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                            </div>
                            <AppInput
                                {...register('login', {
                                    required: "Поле обязательно для заполнения!",
                                    minLength: {
                                        value: 2,
                                        message: "Минимальная длина логина 2 символа!"
                                    }
                                })}
                                errors={errors}
                                placeholder="Введите Логин"
                            />
                            <div className="text-base text-red-600 h-[10px] mb-4">
                                {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
                            </div>
                            <AppInput
                                {...register('email', {
                                    required: "Поле обязательно для заполнения!",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Некорректный e-mail адрес'
                                    },
                                })}
                                errors={errors}
                                placeholder="Введите e-mail адрес"
                            />
                            <div className="text-base text-red-600 h-[10px] mb-4">
                                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
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
                            <AppInput
                                {...register('password_confirmation', {
                                    required: "Поле обязательно для заполнения!",
                                    minLength: {
                                        value: 8,
                                        message: "Минимальная длина пароля 8 символов!"
                                    },
                                    validate: value =>
                                        value === password.current || "Пароли не совпадают"
                                })}
                                errors={errors}
                                placeholder="Подтвердите Пароль"
                            />
                            <div className="text-base text-red-600 h-[10px] mb-4">
                                {errors?.password_confirmation &&
                                    <p>{errors?.password_confirmation?.message || "Error!"}</p>}
                            </div>
                            <AppButton
                                type="primary"
                                btnText="Регистрация"
                                isLoading={isLoading}
                            />
                        </AppForm>
                    </div>
                </div>
                <img src={BgForm} alt="BgForm" className="rounded-2xl"/>
            </div>
        </div>
    );
};

export default Register;