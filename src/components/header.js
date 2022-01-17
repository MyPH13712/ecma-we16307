const Header = {
    render() {
        return /* html */`
        <div class="bg-blue-900 py-3 max-w-5xl mx-auto">
            <a href="">
                <img src="https://picsum.photos/180/75" class="mx-auto" alt="">
            </a>
        </div>
        <nav class="max-w-5xl mx-auto bg-orange-600 grid grid-cols-2">
            <ul class="flex">
                <li><a href="/" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Trang chủ</a></li>
                <li><a href="/about" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Giới thiệu</a></li>
                <li><a href="/news" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Tin tức</a></li>
                <li><a href="/product" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Sản phẩm</a></li>
                <li><a href="/admin/dashboard" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Thống kê</a></li>
            </ul>
        </div>
        </nav>`;
    },
};
export default Header;