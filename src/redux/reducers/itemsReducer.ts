import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsInfo, ItemType } from "types/items";

export type InitialStateType = {
  itemsInfo: ItemsInfo;
  itemsInfoDrama: ItemsInfo;
  itemsInfoComedy: ItemsInfo;
  loading: boolean;
  error: unknown;
  favoriteItems: Array<ItemType> | null;
  currentItem: ItemType | null;
};

const initialState: InitialStateType = {
  itemsInfo: {} as ItemsInfo,
  itemsInfoDrama: {} as ItemsInfo,
  itemsInfoComedy: {} as ItemsInfo,
  loading: false,
  error: null,
  favoriteItems: [],
  currentItem: null,
};

export type fetchProps = {
  page: number;
  limit: number;
  genre?: string;
  showAll?: boolean;
};

export const fetchItemsInfo = createAsyncThunk<void, fetchProps>(
  "items/fetchItemsInfo",
  async ({ page, limit, genre, showAll }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1.3/movie?page=${page}&limit=${limit}${
          genre && `&genres.name=${genre}`
        }`,
        {
          headers: {
            "X-API-KEY": "A78YPSY-H8RMTGK-KY1GX5W-A9JRBXE",
          },
        }
      );
      const itemsInfo = await response.json();

      if (!showAll && genre) {
        switch (genre) {
          case "драма":
            dispatch(addItemsToDrama(itemsInfo));
            break;
          case "комедия":
            dispatch(addItemsToComedy(itemsInfo));
            break;
        }
      } else {
        dispatch(addItems(itemsInfo));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchCurrentItemInfo = createAsyncThunk<void, number>(
  "items/fetchItemInfo",
  async (itemId, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://api.kinopoisk.dev/v1.3/movie/${itemId}`,
        {
          headers: {
            "X-API-KEY": "A78YPSY-H8RMTGK-KY1GX5W-A9JRBXE",
          },
        }
      );
      const itemInfo = await response.json();
      dispatch(addCurrentItem(itemInfo));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.itemsInfo = action.payload;
    },
    addItemsToDrama: (state, action) => {
      state.itemsInfoDrama = action.payload;
    },
    addItemsToComedy: (state, action) => {
      state.itemsInfoComedy = action.payload;
    },
    addCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    clearCurrentItem: (state) => {
      state.currentItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItemsInfo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchItemsInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentItemInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentItemInfo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchCurrentItemInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addItems,
  addItemsToDrama,
  addItemsToComedy,
  addCurrentItem,
  clearCurrentItem,
} = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
