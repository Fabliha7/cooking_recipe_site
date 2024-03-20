const updateUserInfoForm = document.getElementById('updateUserInfoForm');
    const profilePictureInput = document.getElementById('profilePicture');
    const previewImage = document.getElementById('previewImage');

    updateUserInfoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            };
            reader.readAsDataURL(profilePictureInput.files[0]);
        }
        // Add logic to handle updating user info
        alert('User info updated successfully!');
    });

    const resetPasswordForm = document.getElementById('resetPasswordForm');

resetPasswordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
        alert('New Password and Confirm Password do not match. Please try again.');
        return; // Prevent form submission
    }

    // Add logic to handle resetting the password
    alert('Password reset successfully!');
});

    function toggleSocialInfo(socialPlatform) {
        const socialInfo = document.getElementById(`${socialPlatform}Info`);
        const arrowIcon = document.querySelector(`.${socialPlatform}-arrow-icon`);

        // Toggle the show class for both social info and arrow icon
        socialInfo.classList.toggle('show');
        arrowIcon.classList.toggle('show');
    }
    function toggleSocialInfoFields() {
    const updateSocialInfoHeader = document.getElementById('updateSocialInfoHeader');
    const arrowIcon = document.querySelector('#updateSocialInfoHeader .update-social-info-arrow-icon');
    const updateSocialInfoButton = document.querySelector('.update-social-info-button');

    // Toggle the show class for all social sections
    const socialSections = document.querySelectorAll('.social-section');
    socialSections.forEach(section => {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });

    arrowIcon.classList.toggle('rotate-arrow-social-info', socialSections[0].style.display === 'block');

    // Toggle the visibility of the "Update Social Info" button
    updateSocialInfoButton.style.display = updateSocialInfoButton.style.display === 'none' ? 'block' : 'none';
}

    function confirmDeleteAccount() {
        const confirmDelete = confirm("Are you sure you want to delete your account?");
        if (confirmDelete) {
            // Add logic to handle account deletion
            alert('Account deleted successfully!');
            // You can redirect to a delete account endpoint or perform other actions here
        }
    }

    function togglePasswordFields() {
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const arrowIcon = document.querySelector('#resetPasswordHeader .reset-password-arrow-icon');

    resetPasswordForm.style.display = resetPasswordForm.style.display === 'none' ? 'block' : 'none';
    arrowIcon.classList.toggle('rotate-arrow', resetPasswordForm.style.display === 'block');
}


function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = document.querySelector(`#${passwordFieldId} ~ .toggle-password`);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = 'visibility_off';
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = 'visibility';
    }

    toggleIcon.classList.toggle('bold');
}

function toggleUserInfoFields() {
    const updateUserInfoHeader = document.getElementById('updateUserInfoHeader');
    const arrowIcon = document.querySelector('#updateUserInfoHeader .update-user-info-arrow-icon');
 

    // Toggle the display property of the user info form
    updateUserInfoForm.style.display = updateUserInfoForm.style.display === 'none' ? 'block' : 'none';

    arrowIcon.classList.toggle('rotate-arrow-user-info', updateUserInfoForm.style.display === 'block');
}
