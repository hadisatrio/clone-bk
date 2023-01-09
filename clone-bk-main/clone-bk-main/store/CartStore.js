import { toast } from "react-hot-toast";
import create from "zustand";
import { persist } from "zustand/middleware";

// initial cart store
export const CartStore = create(
  persist(
    (set, get) => ({
      // default array carts
      carts: [],
      // store cart
      addCart: async (id, name, price, quantity, image) => {
        try {
          // data cart object
          const dataCart = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            image: image,
          };

          // set new data cart
          const existItem = get().carts.find((x) => x.id === id);
          if (existItem) {
            set((state) => ({
              carts: state.carts?.map((x) =>
                x.id === existItem.id ? { ...existItem, quantity: quantity } : x
              ),
            }));
            toast.success(`${name} - Add to cart`);
          } else {
            set((state) => ({
              carts: [...state.carts, dataCart],
            }));
            toast.success(`${name} - Add to cart`);
          }
        } catch (err) {
          console.log(err);
        }
      },
      // remove one cart
      removeOneCart: (item) =>
        // remove one cart by index
        set((state) => ({
          carts: state.carts.filter((x) => x.id !== item),
        })),
      // remove all cart
      removeAllCart: () => set({ carts: [] }),
    }),
    // set local storage
    {
      name: "carts-bk",
      getStorage: () => localStorage,
    }
  )
);
