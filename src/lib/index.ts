import { browser } from "$app/environment";
import { goto } from "$app/navigation";
export const API_URL = "127.0.0.1:9292";
export const HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const logout = () => {
    if (browser) {
        localStorage.setItem("username", "");
        localStorage.setItem("token", "");
        goto("/");
    }
};
