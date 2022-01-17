import data from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const NewsPage = {
    render() {
        return /* html */ `
        <div class="max-w-5xl mx-auto">
            <header>
                ${Header.render()}
            </header>
            <section class="news">
                <h2 class="max-w-5xl mx-auto font-semibold text-2xl text-sky-800 uppercase my-4">Tin tức</h2>
                <div class="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                ${data.map((post) => `
                        <div class="border p-3">
                            <a href="/news/${post.id}">
                                <img src="${post.img}"  />
                            </a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                `).join("")}
                </div>
            </section>
        </div>
        ${Footer.render()}
        `;
    },
};
export default NewsPage;