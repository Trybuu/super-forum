export type PasswordTestResult = {
  message: string
  isValid: boolean
}

export const isPasswordValid = (password: string): PasswordTestResult => {
  const passwordTestResult: PasswordTestResult = {
    message: '',
    isValid: false,
  }
  const strongPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8})',
  )

  if (password.length < 8) {
    passwordTestResult.message = 'Hasło musi zawierać minimum 8 znaków.'
    passwordTestResult.isValid = false
  }
  if (!strongPassword.test(password)) {
    passwordTestResult.message =
      'Hasło musi zawierać co najmniej jedną wielką i jedną małą literę, cyfrę oraz znak specjalny.'
  }

  return passwordTestResult
}
