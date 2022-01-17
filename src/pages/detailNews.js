import data from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailNewsPage = {
    render(id) {
        const found = data.find((element) => element.id === id);
        return /* html */ `
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1>${found.title}</h1>
            <img src="${found.img}" />
            <p>${found.desc}</p>
        </div>
        ${Footer.render()}
        `;
    },
};
export default DetailNewsPage;