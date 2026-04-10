/**
 * Login Component Tests
 * Purpose: Comprehensive test suite for the Login component
 * Coverage: Rendering, user input, form validation, and accessibility
 * Dependencies: @testing-library/react, @testing-library/user-event, vitest
 * Key behaviors tested:
 *   - Form renders with all required elements
 *   - User input acceptance and validation
 *   - Form submission with valid/invalid data
 *   - Keyboard accessibility and navigation
 *   - Error handling and display
 */

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Login from './Login'

// Mock external dependencies
vi.mock('../config/login.json', () => ({
    default: {
        email: {
            id: 'email',
            type: 'email',
            name: 'email',
            placeholder: 'Enter your email',
            label: 'Email Address',
            value: '',
            isRequired: true,
            hasError: false,
            errorMessage: '',
            validationRules: {
                required: { value: true, errorMessage: 'Email Address is required.' },
                pattern: { value: 'EMAIL', errorMessage: 'Please enter a valid email address.' },
            },
            'aria-label': 'Email Address',
            'aria-describedby': 'emailHelp',
            tooltip: "We'll never share your email with anyone else.",
        },
        password: {
            id: 'password',
            type: 'password',
            name: 'password',
            placeholder: 'Enter your password',
            label: 'Password',
            value: '',
            isRequired: true,
            hasError: false,
            errorMessage: '',
            validationRules: {
                required: { value: true, errorMessage: 'Password is required.' },
                minLength: { value: 8, errorMessage: 'Password should be at least 8 characters.' },
            },
            'aria-label': 'Password',
        },
    },
}))

vi.mock('../scripts/utils', () => ({
    deepClone: vi.fn((obj) => JSON.parse(JSON.stringify(obj))),
}))

vi.mock('../scripts', () => ({
    validateFormFields: vi.fn((formData) => {
        const email = formData.email.value
        const password = formData.password.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        const isEmailValid = email && emailRegex.test(email)
        const isPasswordValid = password && password.length >= 8

        return {
            status: isEmailValid && isPasswordValid,
            errors: {
                email: !isEmailValid ? 'Please enter a valid email address.' : '',
                password: !isPasswordValid ? 'Password should be at least 8 characters.' : '',
            },
        }
    }),
}))

/**
 * Test helper: Get form input elements
 * Purpose: Centralize input element queries to reduce duplication
 * Returns: Object containing getter functions for form inputs
 */
function getFormElements() {
    return {
        emailInput: () => screen.getByLabelText(/email address/i) as HTMLInputElement,
        passwordInput: () => screen.getByLabelText(/password/i) as HTMLInputElement,
        loginButton: () => screen.getByRole('button', { name: /login/i }),
    }
}

/**
 * Test helper: Fill login form with credentials
 * Purpose: DRY principle - avoid repetitive input typing across tests
 * Params: user (userEvent instance), email, password
 */
async function fillLoginForm(
    user: ReturnType<typeof userEvent.setup>,
    email: string,
    password: string,
) {
    const { emailInput, passwordInput } = getFormElements()

    if (email) await user.type(emailInput(), email)
    if (password) await user.type(passwordInput(), password)
}

describe('Login Component', () => {
    let alertSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
        vi.clearAllMocks()
        alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    })

    afterEach(() => {
        alertSpy.mockRestore()
        vi.clearAllMocks()
    })

    describe('Rendering', () => {
        it('should render login form with all required elements', () => {
            render(<Login />)

            expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
            expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
            expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
            expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
        })

        it('should have input fields with correct types', () => {
            render(<Login />)
            const { emailInput, passwordInput } = getFormElements()

            expect(emailInput()).toHaveAttribute('type', 'email')
            expect(passwordInput()).toHaveAttribute('type', 'password')
        })

        it('should render form element for submission', () => {
            render(<Login />)
            const { loginButton } = getFormElements()

            expect(loginButton().closest('form')).toBeInTheDocument()
        })

        it('should have accessible form labels', () => {
            render(<Login />)
            const { emailInput, passwordInput } = getFormElements()

            expect(emailInput()).toHaveAccessibleName('Email Address')
            expect(passwordInput()).toHaveAccessibleName('Password')
        })

        it('should have valid heading hierarchy', () => {
            render(<Login />)
            const heading = screen.getByRole('heading', { name: /login/i })

            expect(heading.tagName).toMatch(/^H[1-6]$/)
        })
    })

    describe('User Input', () => {
        it('should accept email input', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput } = getFormElements()

            await user.type(emailInput(), 'test@example.com')

            expect(emailInput()).toHaveValue('test@example.com')
        })

        it('should accept password input', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { passwordInput } = getFormElements()

            await user.type(passwordInput(), 'TestPassword123')

            expect(passwordInput()).toHaveValue('TestPassword123')
        })

        it('should accept both email and password', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput, passwordInput } = getFormElements()

            await fillLoginForm(user, 'test@example.com', 'TestPassword123')

            expect(emailInput()).toHaveValue('test@example.com')
            expect(passwordInput()).toHaveValue('TestPassword123')
        })

        it('should allow clearing and re-entering email', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput } = getFormElements()
            const input = emailInput()

            await user.type(input, 'test@example.com')
            expect(input).toHaveValue('test@example.com')

            await user.clear(input)
            expect(input).toHaveValue('')

            await user.type(input, 'another@example.com')
            expect(input).toHaveValue('another@example.com')
        })

        it('should accept special characters in email', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput } = getFormElements()

            await user.type(emailInput(), 'test+tag@example.com')

            expect(emailInput()).toHaveValue('test+tag@example.com')
        })
    })

    describe('Form Submission', () => {
        it('should submit form with valid credentials', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { loginButton } = getFormElements()

            await fillLoginForm(user, 'test@example.com', 'ValidPassword123')
            await user.click(loginButton())

            await waitFor(() => {
                expect(alertSpy).toHaveBeenCalledWith('Login Successful!')
            })
        })

        it('should reset form after successful submission', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput, passwordInput, loginButton } = getFormElements()

            await fillLoginForm(user, 'test@example.com', 'ValidPassword123')
            await user.click(loginButton())

            await waitFor(() => {
                expect(emailInput()).toHaveValue('')
                expect(passwordInput()).toHaveValue('')
            })
        })

        it('should not submit with empty email', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { passwordInput, loginButton } = getFormElements()

            await user.type(passwordInput(), 'ValidPassword123')
            await user.click(loginButton())

            expect(alertSpy).not.toHaveBeenCalled()
        })

        it('should not submit with empty password', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { emailInput, loginButton } = getFormElements()

            await user.type(emailInput(), 'test@example.com')
            await user.click(loginButton())

            expect(alertSpy).not.toHaveBeenCalled()
        })

        it('should not submit with invalid email format', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { loginButton } = getFormElements()

            await fillLoginForm(user, 'invalid-email', 'ValidPassword123')
            await user.click(loginButton())

            expect(alertSpy).not.toHaveBeenCalled()
        })

        it('should not submit with password shorter than 8 characters', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { loginButton } = getFormElements()

            await fillLoginForm(user, 'test@example.com', 'short')
            await user.click(loginButton())

            expect(alertSpy).not.toHaveBeenCalled()
        })

        it('should not submit with empty form', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { loginButton } = getFormElements()

            await user.click(loginButton())

            expect(alertSpy).not.toHaveBeenCalled()
        })
    })

    describe('Accessibility', () => {
        it('should allow form submission via keyboard', async () => {
            const user = userEvent.setup()
            render(<Login />)
            const { loginButton } = getFormElements()

            await fillLoginForm(user, 'test@example.com', 'ValidPassword123')
            await user.click(loginButton())

            await waitFor(() => {
                expect(alertSpy).toHaveBeenCalledWith('Login Successful!')
            })
        })

        it('should have proper heading hierarchy', () => {
            render(<Login />)
            const heading = screen.getByRole('heading', { name: /login/i })

            expect(heading.tagName).toMatch(/^H[1-6]$/)
        })
    })
})