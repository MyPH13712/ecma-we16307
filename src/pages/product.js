import Header from "../components/header";
import Footer from "../components/footer";

const ProductPage = {
    render() {
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
                <h1>Product Page</h1>
            </div>
        ${Footer.render()}
            `;
    },
};
export default ProductPage;