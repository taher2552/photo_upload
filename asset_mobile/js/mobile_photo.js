
  // Function to handle file change
  // Function to handle file change
  function handleLogoChange() {
    const fileInput = document.querySelector('.institute-logo-input');
    const fileNameDisplay = document.getElementById('logo-name');
    const file = fileInput.files[0];

    if (file) {
      const fileName = file.name;
      const fileType = file.type.split('/')[0]; // Get the file type

      // Check if the file type is an image
      if (fileType === 'image') {
        if (fileName.length > 15) {
          // Truncate the name if it's longer than 15 characters
          const truncatedName = fileName.substring(0, 15) + '...';
          fileNameDisplay.textContent = truncatedName;
        } else {
          fileNameDisplay.textContent = fileName;
        }
      } else {
        // If the selected file is not an image, clear the input
        fileInput.value = ''; // Clear the input value
        fileNameDisplay.textContent = 'Please select an image file';
        // You can display an error message or take other actions as needed
      }
    }
  }



  function handleBannerChange() {
    const fileInput = document.querySelector('.banner-file-input');
    const fileNameDisplay = document.getElementById('banner-name');
    const file = fileInput.files[0];

    if (file) {
      const fileName = file.name;
      const fileType = file.type.split('/')[0]; // Get the file type

      // Check if the file type is an image
      if (fileType === 'image') {
        if (fileName.length > 15) {
          // Truncate the name if it's longer than 15 characters
          const truncatedName = fileName.substring(0, 15) + '...';
          fileNameDisplay.textContent = truncatedName;
        } else {
          fileNameDisplay.textContent = fileName;
        }
      } else {
        // If the selected file is not an image, clear the input
        fileInput.value = ''; // Clear the input value
        fileNameDisplay.textContent = 'Please select an image file';
        // You can display an error message or take other actions as needed
      }
    }
  }



  // Function to handle preview click
  function handleLogoPreviewClick() {
    const fileInput = document.querySelector('.institute-logo-input');
    const imagePreviewModal = document.getElementById('image-preview-modal-1');
    const previewImage = document.getElementById('preview-image-1');

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
      imagePreviewModal.style.display = 'block';
    }
  }

  function handleBannerPreviewClick() {
    const fileInput = document.querySelector('.banner-file-input');
    const imagePreviewModal = document.getElementById('image-preview-modal-2');
    const previewImage = document.getElementById('preview-image-2');

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
      imagePreviewModal.style.display = 'block';
    }
  }

  // Function to close the image preview modal
  function closeLogoPreview() {
    const imagePreviewModal = document.getElementById('image-preview-modal-1');
    imagePreviewModal.classList.add('closing-animation');

    // Add a delay to remove the modal after the animation finishes
    setTimeout(() => {
      imagePreviewModal.style.display = 'none';
      imagePreviewModal.classList.remove('closing-animation');
    }, 500);
  }

  function closeBannerPreview() {
    const imagePreviewModal = document.getElementById('image-preview-modal-2');
    imagePreviewModal.classList.add('closing-animation');

    // Add a delay to remove the modal after the animation finishes
    setTimeout(() => {
      imagePreviewModal.style.display = 'none';
      imagePreviewModal.classList.remove('closing-animation');
    }, 500);
  }




  