const form = document.querySelector('form');
const results = document.getElementById('results');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const fullName = document.getElementById('fullName').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	const fullNameLength = fullName.length;
	const phoneLength = phone.length;
	const emailLength = email.length;
	const passwordLength = password.length;

	const fullNameWords = fullName.split(' ').filter(Boolean).length;
	const phoneWords = phone.split(' ').filter(Boolean).length;
	const emailWords = email.split(' ').filter(Boolean).length;
	const passwordWords = password.split(' ').filter(Boolean).length;

	const fullNameReverse = fullName.split('').reverse().join('');
    const phoneReverse = phone.split('').reverse().join('');
    const emailReverse = email.split('').reverse().join('');
    const passwordReverse = password.split('').reverse().join('');
    
    const fullNameUpper =fullName.toUpperCase();
    const phoneUpper = phone.toUpperCase();
    const emailUpper = email.toUpperCase();
    const passwordUpper = password.toUpperCase();
    
    const fullNameLower =fullName.toLowerCase();
    const phoneLower = phone.toLowerCase();
    const emailLower = email.toLowerCase();
    const passwordLower = password.toLowerCase();
    
    const display = `
        <p>Name: ${fullNameLength} characters, ${fullNameWords} words, ${fullNameReverse} (reversed), ${fullNameUpper} (uppercase), ${fullNameLower} (lowercase)</p>
        <p>Phone Number: ${phoneLength} characters, ${phoneWords} words, ${phoneReverse} (reversed), ${phoneUpper} (uppercase), ${phoneLower} (lowercase)</p>
        <p>Email: ${emailLength} characters, ${emailWords} words, ${emailReverse} (reversed), ${emailUpper} (uppercase), ${emailLower} (lowercase)</p>
        <p>Password: ${passwordLength} characters, ${passwordWords} words, ${passwordReverse} (reversed), ${passwordUpper} (uppercase), ${passwordLower} (lowercase)</p>
    `;

    results.innerHTML = display 
});