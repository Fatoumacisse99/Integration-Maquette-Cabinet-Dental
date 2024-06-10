function validerFormulaire() {
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation du champ "name"
    if (nom.trim() === '') {
        alert('Veuillez saisir votre nom.');
        return false; // Empêche l'envoi du formulaire
    }

    // Validation du champ "email"
    if (!isValidEmail(email)) {
        alert('Veuillez saisir une adresse e-mail valide.');
        return false;
    }

    // Validation du champ "password"
    if (password.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        return false;
    }

    // Vous pouvez ajouter d'autres validations ici

    return true; // Autorise l'envoi du formulaire si tout est valide
}

// Fonction pour vérifier si l'adresse e-mail est valide
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
