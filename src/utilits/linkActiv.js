export const linkActiv = (active) => {
    const baseS = { textDecoration: "none" };
    if (active.isActive) {
        return { color: "#fff", ...baseS };
    }
    return { color: "#000", ...baseS };
};
