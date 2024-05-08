class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.photo = this.get_random_photo();
        this.$playground = $(`
<div class="ac-game-playground"></div>
`);

        this.hide();

        this.root.$ac_game.append(this.$playground);
        this.start();
    }

    get_random_color() {
        let colors = ["blue", "red", "pink", "grey", "green"];
        return colors[Math.floor(Math.random() * 5)];
    }

    get_random_photo() {
        let photos = ["https://app6801.acapp.acwing.com.cn/static/image/playground/overwatch-userphoto/76.jpg", "https://app6801.acapp.acwing.com.cn/static/image/playground/overwatch-userphoto/genji.jpg", "https://app6801.acapp.acwing.com.cn/static/image/playground/overwatch-userphoto/mei.jpg", "https://app6801.acapp.acwing.com.cn/static/image/playground/overwatch-userphoto/tracer.jpg", "https://app6801.acapp.acwing.com.cn/static/image/playground/overwatch-userphoto/D.Va.jpg"];
        return photos[Math.floor(Math.random() * 5)];
    }

    start() {
        let outer = this;
        $(window).resize(function() {
            outer.resize();
        });
    }

    resize() {
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        let unit = Math.min(this.width / 16, this.height / 9);
        this.width = unit * 16;
        this.height = unit * 9;
        this.scale = this.height;
        if (this.game_map) {
            this.game_map.resize();
        }
    }

    show() {  // 打开playground界面
        this.$playground.show();

        this.resize();
        this.height = this.$playground.height();
        this.width = this.$playground.width();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.15, true));
        for (let i = 0; i < 5; i ++ ) {
              this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, this.get_random_color(), 0.15, false));
        }
    }

    hide() {  // 关闭playground界面
        this.$playground.hide();
    }
}
