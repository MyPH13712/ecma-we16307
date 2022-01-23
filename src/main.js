import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import DetailNewsPage from "./pages/detailNews";
import NewsPage from "./pages/news";
import NotFoundPage from "./pages/notfound";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";
import EditNewsPage from "./pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render();
    document.getElementById("footer").innerHTML = Footer.render();

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/signup": () => {
        print(SignUp);
    },
    "/signin": () => {
        print(SignIn);
    },
    "/news": () => {
        print(NewsPage);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/admin/news/edit:id": ({ data }) => {
        const { id } = data;
        print(EditNewsPage.render(id));
    },

});
router.resolve();