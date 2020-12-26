export const checkIfClientSide = (func: any) => {
  if (typeof window !== "undefined" && window) {
    func();
    return true;
  }
  return false;
};

export const pushExternalRoute = (url: string) => {
  checkIfClientSide(() => {
    window.location.href = url;
  });
};

export const pushNewTab = (url: string) => {
  checkIfClientSide(() => {
    setTimeout(function () {
      window.open(url);
    }, 20);
  });
};
