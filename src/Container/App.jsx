// Re-usable components
import Button from "../Components/UI/components/Button"
import InputElement from "../Components/UI/core/Input";

const App = () => {
  return (
    <>
      <Button variant="warning">HII </Button>
      <Button variant="primary">HII </Button>
      <Button variant="outline"size="lg"> HII </Button>
      <Button variant="secondary"size="lg"> HII </Button>

      <InputElement size="md" placeholder="search"/>
    </>
  )
}

export default App;