const DISABLE_SCROLL_CLASSNAME = 'disable-scroll';
const disableBodyScroll = (value: boolean): void => {
  if (typeof document === undefined) return;

  if (value) {
    if (document.body.classList.contains(DISABLE_SCROLL_CLASSNAME)) return;
    document.body.classList.add(DISABLE_SCROLL_CLASSNAME);
  } else {
    if (!document.body.classList.contains(DISABLE_SCROLL_CLASSNAME)) return;
    document.body.classList.remove(DISABLE_SCROLL_CLASSNAME);
  }
};
export default disableBodyScroll;
