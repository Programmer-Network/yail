import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ImageSelector } from "./";
import { IImage } from "./types";

describe("ImageSelector component", () => {
  const mockImages: IImage[] = [
    { id: 1, url: "http://example.com/image1.jpg" },
    { id: 2, url: "http://example.com/image2.jpg" }
  ];

  test("renders correctly - snapshot test", () => {
    const { asFragment } = render(
      <ImageSelector
        images={mockImages}
        value={mockImages[0]!}
        onSelected={vi.fn()}
        onDelete={vi.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders images correctly", () => {
    render(
      <ImageSelector
        images={mockImages}
        value={mockImages[0]!}
        onSelected={vi.fn()}
        onDelete={vi.fn()}
      />
    );
    mockImages.forEach(image => {
      expect(screen.getByTestId(`image-${image.id}`)).toBeInTheDocument();
    });
  });

  test("handles image selection", () => {
    const onSelected = vi.fn();
    render(
      <ImageSelector
        images={mockImages}
        value={mockImages[0]!}
        onSelected={onSelected}
        onDelete={vi.fn()}
      />
    );
    const secondImage = mockImages[1]!;
    fireEvent.click(screen.getByTestId(`image-${secondImage.id}`));
    expect(onSelected).toHaveBeenCalledWith(secondImage);
  });

  test("handles image deletion", async () => {
    const onDelete = vi.fn().mockResolvedValue([]);
    const firstImage = mockImages[0]!;
    render(
      <ImageSelector
        images={mockImages}
        value={firstImage}
        onSelected={vi.fn()}
        onDelete={onDelete}
      />
    );

    const imageElement = screen.getByTestId(`image-${firstImage.id}`);
    fireEvent.mouseEnter(imageElement);

    const deleteIcon = screen.getByTestId(
      `icon-remove-circle-${firstImage.id}`
    );

    fireEvent.click(deleteIcon);

    await vi.waitFor(() => {
      expect(onDelete).toHaveBeenCalledWith(firstImage);
    });
  });

  test("updates selection on prop change", () => {
    const { rerender } = render(
      <ImageSelector
        images={mockImages}
        value={mockImages[0]!}
        onSelected={vi.fn()}
        onDelete={vi.fn()}
      />
    );
    rerender(
      <ImageSelector
        images={mockImages}
        value={mockImages[1]!}
        onSelected={vi.fn()}
        onDelete={vi.fn()}
      />
    );
  });
});
