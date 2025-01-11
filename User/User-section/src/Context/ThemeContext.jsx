import { createContext, useContext } from "react";

export const ThemeContext = createContext(undefined);

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContext.Provider");
    }
    return context;
}
