import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <div class="bg-blue-900 py-3 max-w-5xl mx-auto flex items-center justify-between">
            <a href="">
                <img src="https://picsum.photos/180/75" class="mx-auto" alt="">
            </a>
        </div>
        <nav class="max-w-5xl mx-auto bg-orange-600 grid grid-cols-2">
            <ul class="flex">
                <li><a href="/" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Trang chủ</a></li>
                <li><a href="/about" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Giới thiệu</a></li>
                <li><a href="/news" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Tin tức</a></li>
                <li><a href="/products" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Sản phẩm</a></li>
                <li><a href="/admin/dashboard" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Thống kê</a></li>
            </ul>
            ${localStorage.getItem("user") ? `
            <ul class="flex">
              <li class="flex items-center">Xin chao <a href="/" class="block mx-3 px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
              <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
          </ul>
          ` : ""}
        </div>
        </nav>`;
    },
    afterRender() {
        // Lấy thông tin từ localStorage
        // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("Logout thành công");
            });
        }
    },

};

export default Header;