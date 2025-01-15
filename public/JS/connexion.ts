let submit = document.getElementById('submit');

let url: string = 'src/page/todo.html';


if (submit) {
    submit.addEventListener('click', () => {
        let error_msg: string = '';
        let checkEmail = document.getElementById('email') as HTMLInputElement | null;
        let checkPassword = document.getElementById('password') as HTMLInputElement | null;

        if (checkEmail) {
            let email: string = checkEmail.value;
            if(!email) {
                error_msg += 'Email est vide \n';
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
                error_msg += 'password est vide \n';
            }
            else {
                console.log('Mot de passe:', password);
            }
        } 
        else {
            console.error('Champ mot de passe introuvable');
        }

        if(error_msg === "") {
            location.href = url;
        }
        else {
            console.log(error_msg);
        }

    });
}
else {
    console.error('Bouton envoyer introuvable');
}
