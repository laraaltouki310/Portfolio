function openModal(imageSrc) {
      const modal = document.getElementById('imageModal');
      const expandedImg = document.getElementById('imgExpanded');
      
      expandedImg.src = imageSrc;
      modal.style.display = 'flex';
    }

    // دالة إغلاق النافذة
    function closeModal() {
      const modal = document.getElementById('imageModal');
      modal.style.display = 'none';
    }

    // إغلاق النافذة عند الضغط على زر Esc من الكيبورد
    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });


function showPage(pageId, btnElement) {
    const currentBtn = document.querySelector('.bar .tab-btn.active');
    const activePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);

    if (!targetPage || activePage === targetPage) return;

    if (currentBtn) currentBtn.classList.remove('active');
    if (btnElement) btnElement.classList.add('active');

    if (activePage) {
        activePage.classList.remove('show');
        setTimeout(() => {
            activePage.classList.remove('active');
            revealNewPage(targetPage);
        }, 400);
    } else {
        revealNewPage(targetPage);
    }
}

function revealNewPage(pageElement) {
    pageElement.classList.add('active');
    
    setTimeout(() => {
        pageElement.classList.add('show');
    }, 10);
}

function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgExpanded");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}