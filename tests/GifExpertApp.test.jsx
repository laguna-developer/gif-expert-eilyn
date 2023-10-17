import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
	test("should ", () => {
		render(<GifExpertApp />);

		screen.debug();
	});
});
