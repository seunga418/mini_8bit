// function toggleDropdown(event) {
//     event.stopPropagation();
//     const dropdownContent = event.currentTarget.nextElementSibling;
//     const isVisible = dropdownContent.style.display === 'block';

//     // 모든 드롭다운 닫기
//     document.querySelectorAll('.dropdowns').forEach(dc => dc.style.display = 'none');

//     // 현재 드롭다운 토글
//     dropdownContent.style.display = isVisible ? 'none' : 'block';
// }

// window.addEventListener('click', () => {
//     document.querySelectorAll('.dropdowns').forEach(dc => dc.style.display = 'none');
// });

// function showBox(boxId) {
//     // 모든 박스를 숨기기
//     const boxes = document.querySelectorAll('.content-box');
//     boxes.forEach(box => box.style.display = 'none');

//     // 해당 박스만 표시
//     const selectedBox = document.getElementById(boxId);
//     if (selectedBox) {
//         selectedBox.style.display = 'block';
//     }
// }
// function H() {
//     showBox('homeBox');
// }
// function classcheck() {
//     showBox('checkBox');
// }
// function roomcheck() {
//     showBox('loginBox');
// }
// window.addEventListener('DOMContentLoaded', () => {
//     // 페이지 로딩이 끝나면 홈 화면 표시
//     showBox('homeBox');
// });
// window.addEventListener('DOMContentLoaded', () => {
//     showBox('loginBox');  // 로그인 페이지에서 loginBox 보이게
// });

