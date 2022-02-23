const urlHash = () => {
    window.addEventListener("hashchange", function() {
        history.replaceState({}, null, window.location.hash.replace("#", "/"));
  });
}

export default urlHash