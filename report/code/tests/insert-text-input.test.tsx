import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

it("Input have email", () => {
	const onSuccess = (token: string, remember: boolean) => {
		console.log(token);
	};

	const div = document.createElement("div");
	const component = render(<Login onLoginSuccess={onSuccess} />);

	const emailInput = component.getByTestId("email-input");
	userEvent.paste(emailInput, "email@example.pt");

	expect(emailInput.getAttribute("value")).toBe("email@example.pt");
});
