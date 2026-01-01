import Typography from "../UI/components/Typography.jsx";



function TypographyPage() {
  return (
   // Make a page for every components like this 
    <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <Typography variant="h1" weight="bold" color="primary" size="xl"  >
        Extended Typography Component
      </Typography>

      <Typography variant="p" size="lg" color="secondary">
        This paragraph uses <code>size="lg"</code> and <code>color="secondary"</code>.
      </Typography>

      <Typography variant="p" weight="semibold" color="success">
        Semibold text with success color.
      </Typography>

      <Typography variant="p" color="primary" disabled>
        This text is disabled (faded and not interactive).
      </Typography>

      <Typography variant="p" hidden>
        You won’t see me because I’m hidden.
      </Typography>

      <Typography variant="blockquote" color="warning">
        Good typography is invisible. It serves the content and the reader.
      </Typography>
    </main>
  )
}

export default TypographyPage
