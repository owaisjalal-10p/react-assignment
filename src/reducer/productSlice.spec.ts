import Product from "../types/Product"; // Adjust the path as necessary
import productReducer, { loadProduct } from "./productSlice"; // Adjust the path as necessary

describe("Product Slice", () => {
  // Define the initial state with explicit type
  const initialState: { value: Product[] } = {
    value: [],
  };

  test("should return the initial state when an unknown action is dispatched", () => {
    expect(productReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  test("should update state with products when loadProduct is dispatched", () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        colour: "Black",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10,
        img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
      },
      {
        id: 2,
        colour: "Stone",
        name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
        price: 4,
        img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
      },
      {
        id: 3,
        colour: "Black",
        name: "Black Frill Tie Shoulder Bodycon Dress",
        price: 7.99,
        img: "https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024",
      },
      {
        id: 5,
        colour: "Red",
        name: "Red Pin Stripe Belt T Shirt Dress",
        price: 17,
        img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
      },
    ];

    const newState = productReducer(initialState, loadProduct(mockProducts));

    // Assert that the state value is updated correctly
    expect(newState.value).toEqual(mockProducts);
  });
});
