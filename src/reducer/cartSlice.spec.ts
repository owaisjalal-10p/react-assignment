import CartItem from "../types/CartItem"; // Adjust the path as necessary
import cartReducer, {
  addToCart,
  loadCart,
  removeFromCart,
  CartState,
} from "./cartSlice"; // Adjust the path as necessary

describe("Cart Slice", () => {
  const initialState: CartState = {
    value: {},
  };

  test("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle addToCart", () => {
    const newItem: CartItem = {
      product: {
        id: 1,
        name: "Product 1",
        price: 100,
        colour: "red",
        img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
      },
      count: 1,
    };

    const stateAfterAdding = cartReducer(initialState, addToCart(newItem));

    // Assert that the item is added to the cart
    expect(stateAfterAdding.value[newItem.product.id]).toEqual(newItem);

    // Test adding the same item again
    const additionalItem: CartItem = {
      product: {
        id: 1,
        name: "Product 1",
        price: 100,
        colour: "red",
        img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
      },
      count: 2,
    };

    const stateAfterSecondAddition = cartReducer(
      stateAfterAdding,
      addToCart(additionalItem)
    );

    // Assert that the count is updated
    expect(stateAfterSecondAddition.value[newItem.product.id].count).toEqual(3); // 1 + 2
  });

  test("should handle loadCart", () => {
    const itemsToLoad: CartItem[] = [
      {
        product: {
          id: 1,
          name: "Product 1",
          price: 100,
          colour: "red",
          img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
        },
        count: 1,
      },
      {
        product: {
          id: 2,
          name: "Product 2",
          price: 200,
          colour: "red",
          img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
        },
        count: 2,
      },
    ];

    const stateAfterLoading = cartReducer(initialState, loadCart(itemsToLoad));

    // Assert that the state is updated correctly
    expect(stateAfterLoading.value[1]).toEqual(itemsToLoad[0]);
    expect(stateAfterLoading.value[2]).toEqual(itemsToLoad[1]);
    expect(Object.keys(stateAfterLoading.value).length).toBe(2); // There should be 2 items
  });

  test("should handle removeFromCart", () => {
    const itemToAdd: CartItem = {
      product: {
        id: 1,
        name: "Product 1",
        price: 100,
        colour: "red",
        img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
      },
      count: 1,
    };

    // Start with an empty cart and add an item
    let state = cartReducer(initialState, addToCart(itemToAdd));

    // Assert item is added
    expect(state.value[itemToAdd.product.id]).toEqual(itemToAdd);

    // Now remove the item
    state = cartReducer(state, removeFromCart(itemToAdd.product.id));

    // Assert the item is removed
    expect(state.value[itemToAdd.product.id]).toBeUndefined();
  });
});
