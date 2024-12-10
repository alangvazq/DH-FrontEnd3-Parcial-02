import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Contact from "../../pages/contact/Contact";
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
});

describe("Test Contact", () => {
  test("Escribir campos", async () => {
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
    await user.type(inputName, "Alan");
    await user.type(inputLastname, "García");
    await user.type(inputEmail, "alan@correo.com");
    await user.type(inputPhone, "1234567890");
    await user.type(textareaMessage, "Mensaje de prueba.");
    user.click(buttonSubmit);

    // Assert
    expect(inputName.value).toBe("Alan");
    expect(inputLastname.value).toBe("García");
    expect(inputEmail.value).toBe("alan@correo.com");
    expect(inputPhone.value).toBe("1234567890");
    expect(textareaMessage.value).toBe("Mensaje de prueba.");
  });
});