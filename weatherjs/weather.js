class Weather {
    constructor(city, state) {
        this.apiKey = 'cfbdebe8411917befab3078cc4283266';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}