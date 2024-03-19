import create from "zustand";

const useDarkModeStore = create((set) => ({
  darkMode: localStorage.getItem("darkMode")
    ? JSON.parse(localStorage.getItem("darkMode"))
    : true,
  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

export default useDarkModeStore;
