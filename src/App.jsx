import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Loader from "./pages/Loader";
import Footer from "./components/Footer";
// This is for lazy loading
const Home = lazy(() => import("./pages/Home"));
const RecipePage = lazy(() => import("./pages/RecipePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
