function handleFileChange() {
    const fileInput = document.querySelector('input[type="file"]');
    const fileNameDisplay = document.getElementById('file-name');
    const file = fileInput.files[0];
    fileNameDisplay.textContent = file.name;
  }
  
  function handlePreviewClick() {
    const fileInput = document.querySelector('input[type="file"]');
    const imagePreviewModal = document.getElementById('image-preview-modal');
    const previewImage = document.getElementById('preview-image');
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
  
      reader.readAsDataURL(fileInput.files[0]);
      imagePreviewModal.style.display = 'block';
    }
  }
  
  // Close the image preview modal
  const closeModal = document.getElementById('close-preview');
  closeModal.addEventListener('click', function () {
    const imagePreviewModal = document.getElementById('image-preview-modal');
    imagePreviewModal.style.display = 'none';
  });
  