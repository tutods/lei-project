import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import ReactDOM from "react-dom";
import StatusBadge from "./StatusBadge";

beforeEach(cleanup);

it("Renders Status Badge without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<StatusBadge status="Ativo" />, div);
});

it("Renders Status Badge with active class text", () => {
	const { getByTestId } = render(<StatusBadge status="Ativo" />);

	// Have class
	expect(getByTestId("status-badge")).toHaveClass("active-status");
});

it("Renders Status Badge with Ativo text", () => {
	const { getByTestId } = render(<StatusBadge status="Ativo" />);

	// Have activo text
	expect(getByTestId("status-badge")).toHaveTextContent("Ativo");
});
