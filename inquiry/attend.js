document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();  // 이벤트 버블링 방지
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
        dropdownBtn.setAttribute('aria-expanded', !isVisible);
    });

    // 메뉴 아이템 클릭 시 페이지 이동
    dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const link = item.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
        dropdownBtn.setAttribute('aria-expanded', 'false');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // 테이블 내 모든 td 탐색
    const tds = document.querySelectorAll(".tb tbody td");
    
    tds.forEach(td => {
      // td가 비어있다면
    if (td.textContent.trim() === "") {
        // select 요소 생성
        const select = document.createElement("select");
        select.style.width = "70px";
        select.style.padding = "3px 10px";
        
        // option 생성: 기본값, 출석, 미출석
        const Default = document.createElement("option");
        Default.value = "";
        Default.text = "선택";
        Default.disabled = true;
        Default.selected = true;
        
        const Present = document.createElement("option");
        Present.value = "출석";
        Present.text = "출석";
        
        const Absent = document.createElement("option");
        Absent.value = "미출석";
        Absent.text = "미출석";
        
        // select에 option 추가
        select.appendChild(Default);
        select.appendChild(Present);
        select.appendChild(Absent);
        
        // td 내부 비우고 select 넣기
        td.textContent = "";
        td.appendChild(select);
    }
    });
});

