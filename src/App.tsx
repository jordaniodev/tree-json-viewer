import { useState } from "react";
import { Grid2 } from "@mui/material";
import { GridContainer } from "./App.style";
import { AsideCard } from "./components/AsideCard/AsideCard";
import { FormJson } from "./components/FormJson/FormJson";
import { TreeViewer } from "./components/TreeViewer/TreeViewer";

const defaultJsonValue = [
  {
    "id": 1,
    "name": "Alice",
    "data": [42, "text", false, null, { "key": "value" }]
  },
  {
    "id": 2,
    "name": "Bob",
    "data": [
	    "super duper extra large maxi mega large long string repeated three times.",
	    3.14,
	    true
	  ]
  }
];

function App() {
  const [jsonValue, setJsonValue] = useState(defaultJsonValue);

  const handleJsonSubmit = (newJsonValue: string) => {
    try {
      const parsedJson = JSON.parse(newJsonValue);
      setJsonValue(parsedJson);
    } catch (error) {
      console.error("Invalid JSON");
    }
  };

  return (
    <GridContainer container spacing={1}>
      <Grid2 size={8}>
        <FormJson onSubmit={handleJsonSubmit} />
      </Grid2>
      <Grid2 size={4}>
        <AsideCard title="Cell Details" icon={<img src="/img/icons/list.svg" />}>
          <TreeViewer jsonValue={jsonValue} />
        </AsideCard>
      </Grid2>
    </GridContainer>
  );
}

export default App;
