import { render, screen } from "@testing-library/react";

import { Avatar } from "./";

describe("Avatar component", () => {
  test("renders an image when src is provided", () => {
    render(
      <Avatar
        alt='Test Avatar'
        src='https://avatars.githubusercontent.com/u/2085263?v=4'
      />
    );
    const image = screen.getByRole("img", { name: "Test Avatar" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/2085263?v=4"
    );
  });

  test("renders a BoringAvatars SVG when src is not provided", () => {
    render(<Avatar />);
    const avatarParent = screen.getByTestId("svg-avatar-parent");
    const svg = avatarParent.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  test("applies custom size and colors", () => {
    const customColors = ["#FF5733", "#33FF57"];
    render(<Avatar size={100} colors={customColors} />);
  });

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(<Avatar alt='Test Avatar' />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("throws an error for invalid URL", () => {
    const invalidSrc = "invalid-url";
    expect(() => render(<Avatar src={invalidSrc} />)).toThrow(
      "Invalid URL provided"
    );
  });
});
