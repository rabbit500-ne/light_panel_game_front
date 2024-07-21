class LightPuzzleGame {
    constructor() {
        this.lights = Array.from(document.querySelectorAll('.light'));
        this.statusMessage = document.getElementById('status-message');
        this.correctPattern = [];
        this.playerPattern = [];
        this.currentStage = 1;
        this.isPlaying = false;

        this.initEventListeners();
        this.autoStartGame();
    }

    initEventListeners() {
        this.lights.forEach(light => {
            light.addEventListener('click', () => this.handleLightClick(light));
        });
    }

    autoStartGame() {
        this.statusMessage.textContent = 'ゲームが3秒後に始まります...';
        setTimeout(() => this.startGame(), 3000);
    }

    startGame() {
        this.isPlaying = true;
        this.playerPattern = [];
        this.statusMessage.textContent = `ステージ ${this.currentStage}`;
        this.correctPattern = this.generatePattern();
        this.showPattern();
    }

    generatePattern() {
        const pattern = [];
        const patternLength = Math.min(3 + this.currentStage, 16);
        while (pattern.length < patternLength) {
            const randomLight = Math.floor(Math.random() * 16);
            if (pattern.length === 0 || pattern[pattern.length - 1] !== randomLight) {
                pattern.push(randomLight);
            }
        }
        return pattern;
    }

    async showPattern() {
        this.statusMessage.textContent = 'パターンを記憶してください';
        for (const lightIndex of this.correctPattern) {
            await this.flashLight(this.lights[lightIndex]);
        }
        this.statusMessage.textContent = 'Ready';
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.statusMessage.textContent = 'パターンを再現してください';
        this.playerPattern = [];
    }

    async flashLight(light) {
        light.classList.add('on');
        await new Promise(resolve => setTimeout(resolve, 500));
        light.classList.remove('on');
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    handleLightClick(light) {
        if (!this.isPlaying) return;

        const lightIndex = parseInt(light.dataset.id);
        this.playerPattern.push(lightIndex);
        this.flashLight(light);

        if (this.playerPattern.length === this.correctPattern.length) {
            this.checkPattern();
        }
    }

    checkPattern() {
        const isCorrect = this.playerPattern.every((light, index) => light === this.correctPattern[index]);
        if (isCorrect) {
            this.statusMessage.textContent = '正解！次のステージへ進みます';
            this.currentStage++;
            setTimeout(() => this.startGame(), 2000);
        } else {
            this.statusMessage.textContent = '不正解。もう一度挑戦してください';
            setTimeout(() => this.startGame(), 2000);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LightPuzzleGame();
});