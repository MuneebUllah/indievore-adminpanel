import ErrorBoundary from "components/layout/error-boundary";
import useHttp from "hooks/useHttp";
// import useStore from "hooks/useStore";
import { useEffect } from "react";
import AppRoutes from "routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "styles";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  // const { setDarkTheme } = useStore();
  const { configureHeaders, configureInterceptors } = useHttp();

  const getScreenInfo = () => {
    const { innerWidth: width, innerHeight: height } = window;
    document.body.style.setProperty("--width", `${width}px`);
    document.body.style.setProperty("--height", `${height}px`);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    configureHeaders();
    configureInterceptors();
    document.body.classList.add('p-custom-scrollbar-8');
    window.addEventListener("resize", getScreenInfo);
    window.addEventListener("orientationchange", getScreenInfo);
    getScreenInfo();
  }, []);

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
