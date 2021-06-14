import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Button from "./Button";

beforeEach(cleanup);

it("Renders Button without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Button>Test Button</Button>, div);
});

it("Renders Button with info modifier", () => {
	const { getByText } = render(
		<Button modifier="info">Test with Modifier</Button>
	);

	// Verify from class added from property
	expect(getByText("Test with Modifier")).toHaveClass("info-modifier");
});
