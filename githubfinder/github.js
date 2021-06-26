class Github {
    constructor() {
        this.client_id = 'ac02c0ad7f40bfcb2906';
        this.client_secret = '42db60e922b1591efa57f7106c1390522d175daa';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}

// ?client_id=${this.client_id}&client_secret=${this.client_secret}