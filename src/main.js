import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import CartPage from "./pages/cart";
import NotFoundPage from "./pages/notfound";
import DashBoardPage from "./pages/admin/dashboard";
import AdminPosts from "./pages/admin/posts";
import AdminAddPosts from "./pages/admin/posts/add";
import AdminEditPosts from "./pages/admin/posts/edit";
// phương thức lấy dữ liệu
// http://localhost:3001/catePosts/1?_embed=posts

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            console.log("ahihi");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/cart": () => {
        print(CartPage);
    },
    "/admin/dashboard": () => {
        print(DashBoardPage);
    },
    "/admin/posts": () => {
        print(AdminPosts);
    },
    "/admin/posts/add": () => {
        print(AdminAddPosts);
    },
    "/admin/posts/:id/edit": ({ data }) => {
        print(AdminEditPosts, data.id);
    },
});
router.notFound(() => print(NotFoundPage));
router.resolve();