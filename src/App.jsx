import { AuthorBox } from "./AuthorBox";
import { StyledAuthorBox } from "./StyledAuthorBox";
import { Button } from "antd";
import StyledButton from "./StyledButton";

function App() {
  return (
    <>
      sass
      {/* sass */}
      <AuthorBox />
      <AuthorBox isPrimary />
      styled
      {/* styled */}
      <StyledAuthorBox />
      <StyledAuthorBox isPrimary />
      Antd button
      <Button>Hola</Button>
      Antd Styled Button
      <StyledButton>Hola</StyledButton>
    </>
  );
}

export default App;
