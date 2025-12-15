// 等待文档加载完成
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 导航栏滚动效果 (向下滚动时背景变深)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 5, 5, 0.95)';
            navbar.style.padding = '10px 5%';
        } else {
            navbar.style.background = 'rgba(10, 5, 5, 0.8)';
            navbar.style.padding = '20px 5%';
        }
    });

    // 2. 处理导航链接和地图热点的平滑滚动点击
    // 选择所有以 # 开头的链接 (锚点链接)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认的瞬间跳转

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 计算目标位置的偏移量 (减去导航栏的高度，避免遮挡标题)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // 平滑滚动
                });
            }
        });
    });
});