    function navigateTo(path) {
    alert("Navigasi ke: " + path);
    // window.location.href = path; // Aktifkan ini untuk redirect sungguhan
  }
  
  function saveDraft() {
    alert("Artikel disimpan sebagai draft!");
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("Artikel berhasil diunggah!");
    // Submit ke server bisa ditambahkan di sini
  }
  function changeTab(button, tabName) {
    // Reset semua tab
    const allTabs = document.querySelectorAll('.tab-item');
    const allContents = document.querySelectorAll('.tab-content');
    const icons = button.parentNode.querySelectorAll('.icon');
  
    allTabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    allContents.forEach(content => {
      content.classList.remove('active');
    });
  
    // Aktifkan tab yang dipilih
    button.classList.add('active');
    document.getElementById(`content-${tabName}`).classList.add('active');
  
    // Ganti Icon
    icons.forEach(icon => {
      if (icon.closest('button').classList.contains('active')) {
        if(tabName === 'obat'){
          icon.src = 'icon-obat-active.png';
        }else if(tabName === 'pertolongan'){
          icon.src = 'icon-pertolongan-active.png';
        }else if(tabName === 'artikel'){
          icon.src = 'icon-artikel-active.png';
        }
      } else {
        if(tabName === 'obat'){
          icon.src = 'icon-obat.png';
        }else if(tabName === 'pertolongan'){
          icon.src = 'icon-pertolongan.png';
        }else if(tabName === 'artikel'){
          icon.src = 'icon-artikel.png';
        }
      }
    });
  }
