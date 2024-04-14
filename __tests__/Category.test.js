import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CategoryCard from "../components/CategoryCard";

const TestComponent = () => {
  return (
    <CategoryCard
      id="category-card-dairy-eggs"
      title="Dairy & Eggs"
      image="https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png"
    />
  );
};

describe("Category Card component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<TestComponent />);
    const button = getByTestId("category-card-dairy-eggs");
    expect(button).toBeDefined();
  });

  it("renders title and image", () => {
    const onPressMock = jest.fn();
    const { getByTestId, getByText } = render(<TestComponent />);
    getByText("Dairy & Eggs");
  });
});
