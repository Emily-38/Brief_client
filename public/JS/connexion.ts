let submit = document.getElementById('submit');

let url: string = 'src/page/todo.html';

if (submit) {
    submit.addEventListener('click', () => {
        let checkEmail = document.getElementById('email') as HTMLInputElement | null;
        let checkPassword = document.getElementById('password') as HTMLInputElement | null;

        if (checkEmail) {
            let email: string = checkEmail.value;
            if(!email) {
                console.log('Email est vide');
            }
            else {
                console.log('Email:', email);
            }
        } 
        else {
            console.error('Champ email introuvable');
        }

        if (checkPassword) {
            let password: string = checkPassword.value;
            if(!password) {
                console.log('password est vide');
            }
            else {
                console.log('Mot de passe:', password);
            }
        } 
        else {
            console.error('Champ mot de passe introuvable');
        }

        location.href = url;

    });
}
else {
    console.error('Bouton envoyer introuvable');
}
