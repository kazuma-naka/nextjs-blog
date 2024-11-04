import { render, screen } from "@testing-library/react";
import Home from "@/pages/";

describe("Home Page", () => {
  it("リンクページを持つ", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: "最初の投稿" });
    expect(link).toBeInTheDocument();
  });
});
