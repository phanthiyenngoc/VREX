import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import "./App.css";
import { css } from "@emotion/react";

function App() {
  const theme = useTheme();
  return (
    <div>
      <div
        css={css`
          color: #20b2aa;
          :hover {
            color: #2e8b57;
          }
        `}
      >
        margin-right:{theme.spacing(4)}
      </div>
      <Button variant="text">Hello World</Button>
    </div>
  );
}

export default App;
