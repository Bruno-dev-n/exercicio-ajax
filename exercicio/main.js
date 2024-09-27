document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        try {
            const name = document.getElementById('name');
            const usename = document.getElementById('username');
            const photo = document.getElementById('avatar');
            const repos = document.getElementById('repos');
            const followers = document.getElementById('followers');
            const following = document.getElementById('following');
            const link = document.getElementById('link');
            
            fetch('https://api.github.com/users/Bruno-dev-n')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function(json) {
                    name.innerText = json.name;
                    usename.innerText = json.login;
                    photo.src = json.avatar_url;
                    repos.innerText = json.public_repos;
                    following.innerText = json.following;
                    followers.innerText = json.followers;
                    link.href = json.html_url;
                })
                .catch(function(error) {
                    alert("Erro tente de novo");
                    console.error('Erro ao processar a resposta do fetch:', error);
                });
        } catch (error) {
            console.error('Erro ao executar o código:', error);
            alert("Erro tente de novo")
        }
    }, 2000);
});
