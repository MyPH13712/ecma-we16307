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

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        print(AddNewsPage.render());
    },
    "/admin/news/edit:id": ({ data }) => {
        const { id } = data;
        print(EditNewsPage.render(id));
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();

// promise
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(script);
//         };
//         script.onerror = () => {
//             reject(new Error("Lỗi kết nối"));
//         };
//         document.head.append(script);
//     });
// }
// loadScript("https://www.google.com/search?q=d%E1%BB%8Bch&oq=&aqs=chrome.0.35i39i362l8.1559191j0j7&sourceid=chrome&ie=UTF-8")
//     .then((script) => console.log(script))
//     .catch((error) => console.log(error));