function validerFormulaire() {
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nom.trim() === '') {
        alert('Veuillez saisir votre nom.');
        return false; // Empêche l'envoi du formulaire
    } else if (!/^[a-zA-Z]+$/.test(nom)) {
        alert('Le nom doit contenir uniquement des lettres.');
        return false; // Empêche l'envoi du formulaire
    }
    // Validation du champ "password"
    if (password.trim() === '') {
        alert('Veuillez saisir un mot de passe.');
        return false; // Empêche l'envoi du formulaire
    } else if (!/[A-Z]/.test(password)) {
        alert('Le mot de passe doit contenir au moins une majuscule.');
        return false; // Empêche l'envoi du formulaire
    } else if (!/\d/.test(password)) {
        alert('Le mot de passe doit contenir au moins un chiffre.');
        return false; // Empêche l'envoi du formulaire
    } else if (!/[a-zA-Z]/.test(password)) {
        alert('Le mot de passe doit contenir au moins une lettre.');
        return false; //

}}
