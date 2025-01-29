import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode | React.ReactNode[]
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  info: object
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: '' },
    }
  }

  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true }
  }

  componentDidCatch(error: Error | null, info: object): void {
    console.error('error: ', error)
    this.setState({ hasError: true, error, info })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Coś poszło nie tak. Proszę odświeżyć stronę.</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
