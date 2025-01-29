const Content = () => {
  // ErrorBoundary Test -----------------------------------
  const test = false
  if (test) throw new Error('Błąd w komponencie Main')
  // ------------------------------------------------------

  return <main className="content">Część główna</main>
}

export default Content
