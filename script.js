document.addEventListener('DOMContentLoaded', function() {
  // 添加一些简单的交互功能，比如导航菜单的响应式处理
  const navToggle = document.createElement('div');
  navToggle.innerHTML = '&#9776;'; // 汉堡图标
  navToggle.style.display = 'none';
  navToggle.style.cursor = 'pointer';
  navToggle.style.position = 'absolute';
  navToggle.style.top = '10px';
  navToggle.style.right = '20px';
  navToggle.style.fontSize = '24px';
  document.querySelector('header').appendChild(navToggle);

  navToggle.addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          document.querySelector('nav ul').classList.remove('active');
          navToggle.style.display = 'none';
      } else {
          navToggle.style.display = 'block';
      }
  });

  if (window.innerWidth <= 768) {
      navToggle.style.display = 'block';
  }
});
