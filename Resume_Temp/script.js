function updateImage() {
    const fileInput = document.getElementById("profile-image");
    const imagePreview = document.getElementById("profile-preview");
  
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function updateSkill(skillId, value) {
    const skillLevel = document.getElementById(skillId);
    skillLevel.textContent = value;
  }
  