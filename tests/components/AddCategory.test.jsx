import { describe, test, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
	test("Debe cambiar el valor de la caja de texto ", () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: "Nicolas" } });

		expect(input.value).toBe("Nicolas");
	});

	test("Debe llamar onNewCategory si el input tiene un valor ", () => {
		const inputValue = "NatalySofia";
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
		//screen.debug();
	});

	test("No debe llamar el onNewCategory si esta vacio ", () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole("form");
		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
