import { createRoot } from "react-dom/client"
import { initialWhales } from "./whales"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App whales={initialWhales} />)
