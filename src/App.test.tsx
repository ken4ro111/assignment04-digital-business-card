import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("HOME画面を表示する", () => {
    render(<App />);

    expect(screen.getByText("HOME画面")).toBeInTheDocument();
  });
});
