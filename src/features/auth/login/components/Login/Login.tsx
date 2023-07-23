import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import PrimaryButton from '../../../../../core/components/buttons/PrimaryButton/PrimaryButton'
import Email from '../../../../../core/components/formFields/Email'
import Password from '../../../../../core/components/formFields/Password'
import styles from './Login.module.scss'

function useFormInit() {
  return useForm<any>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
const Login = () => {
  const useFormReturn = useFormInit()
  const { handleSubmit } = useFormReturn
  const onSubmit = (data: any) => {
    console.log('data', data)
  }
  return (
    <FormProvider {...useFormReturn}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Email/>
          <div className={styles.container}>
            <Password />
          </div>
          <PrimaryButton disabled={false} type="submit" text="Войти"/>
        </form>
      </div>
    </FormProvider>
  )
}

export default Login
