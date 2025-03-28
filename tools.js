async function getRepos(username, token, dataListRepos) {
    try {

        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const repos = await response.json();

        dataListRepos.dataRepos = repos.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description || "Sem descrição"
        }));

    } catch (error) {
        console.error("Erro ao buscar repositórios:", error.message);
    }
}


module.exports = { getRepos };  // Exporta a função