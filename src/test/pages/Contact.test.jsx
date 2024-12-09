import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Contact from "../../pages/contact/Contact";
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
});

describe("Test <Contact />", () => {
  test("Debe renderizar el formulario correctamente", () => {
    // Arrange
    render(<Contact />);
    // screen.debug();

    const inputName = screen.getByLabelText("Name");
    const inputLastname = screen.getByLabelText("Lastname");
    const inputEmail = screen.getByLabelText("Email");
    const inputPhone = screen.getByLabelText("Phone");
    const textareaMessage = screen.getByLabelText("Message");
    const buttonSubmit = screen.getByRole("button", { name: /send/i });

    expect(inputName).toBeDefined();
    expect(inputLastname).toBeDefined();
    expect(inputEmail).toBeDefined();
    expect(inputPhone).toBeDefined();
    expect(textareaMessage).toBeDefined();
    expect(buttonSubmit).toBeDefined();
    expect(buttonSubmit.getAttribute("type")).toBe("submit");
  });

  test("Debe permitir escribir en los campos", async () => {
    // Arrange
    render(<Contact />);

    const user = userEvent.setup();
    const inputName = screen.getByLabelText("Name");
    const inputLastname = screen.getByLabelText("Lastname");
    const inputEmail = screen.getByLabelText("Email");
    const inputPhone = screen.getByLabelText("Phone");
    const textareaMessage = screen.getByLabelText("Message");
    const buttonSubmit = screen.getByRole("button", { name: /send/i });

    // Act
    await user.type(inputName, "Humberto");
    await user.type(inputLastname, "Gomez");
    await user.type(inputEmail, "humberto@correo.com");
    await user.type(inputPhone, "1234567890");
    await user.type(textareaMessage, "Este es un mensaje de prueba.");
    user.click(buttonSubmit);

    // Assert
    expect(inputName.value).toBe("Humberto");
    expect(inputLastname.value).toBe("Gomez");
    expect(inputEmail.value).toBe("humberto@correo.com");
    expect(inputPhone.value).toBe("1234567890");
    expect(textareaMessage.value).toBe("Este es un mensaje de prueba.");
  });
});