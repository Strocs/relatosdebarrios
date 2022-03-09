const urlHash = () => {
    window.addEventListener("hashchange", () => {
        history.replaceState({}, null, window.location.hash.replace("#", "/"));
  });
}

export default urlHash