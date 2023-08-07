import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsInfo, ItemType } from "types/items";

export type InitialStateType = {
  itemsInfo: ItemsInfo;
  itemsInfoDrama: ItemsInfo;
  itemsInfoComedy: ItemsInfo;
  itemsInfoAdventures: ItemsInfo;
  loading: boolean;
  error: unknown;
  favoriteItems: Array<ItemType>;
  currentItem: ItemType | null;
};

const initialState: InitialStateType = {
  itemsInfo: {} as ItemsInfo,
  itemsInfoDrama: {} as ItemsInfo,
  itemsInfoComedy: {} as ItemsInfo,
  itemsInfoAdventures: {} as ItemsInfo,
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

type DeleteItemType = {
  deleteId: number;
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
            "X-API-KEY": "AJ97YQ1-EF0MJEA-HRF7BKT-94NKRNM",
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
          case "приключения":
            dispatch(addItemsToAdventures(itemsInfo));
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
            "X-API-KEY": "AJ97YQ1-EF0MJEA-HRF7BKT-94NKRNM",
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
    addItemsToAdventures: (state, action) => {
      state.itemsInfoAdventures = action.payload;
    },
    addCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    clearCurrentItem: (state) => {
      state.currentItem = null;
    },
    clearCurrentItems: (state) => {
      state.itemsInfo = {} as ItemsInfo;
    },
    addToFavorite: (state) => {
      if (
        state.currentItem &&
        !state.favoriteItems.find((item) => item.id === state?.currentItem?.id)
      ) {
        state.favoriteItems.push(state.currentItem);
      }
    },
    deleteFromFavorite: (state, action: PayloadAction<DeleteItemType>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.deleteId
      );
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
  addItemsToAdventures,
  addCurrentItem,
  clearCurrentItem,
  clearCurrentItems,
  addToFavorite,
  deleteFromFavorite,
} = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
