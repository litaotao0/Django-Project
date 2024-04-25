class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="main-menu">
    <div class="root">
        <div class="home-page">
            <div class="left">
                <a herf="" class="logo">
                    <img src="../../static/image/menu/overwatch-logo.png">
                </a>
                <div class="ac-game-menu">
                    <div class="ac-game-menu-field">
                        <a herf="" class="ac-game-menu-field-item-single-mode"><span>单人模式</span></a>
                        <a herf="" class="ac-game-menu-field-item-multi-mode"><span>多人模式</span></a>
                        <a herf=""><span>商店</span></a>
                        <a herf=""><span>战令</span></a>
                    </div>
                    <div class="ac-game-menu-field-small">
                        <a href=""><span>社交互动</span></a>
                        <a href=""><span>生涯概况</span></a>
                        <a href="" class="ac-game-menu-field-item-settings"><span>设置</span></a>
                        <a href=""><span>退出游戏</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }

    show() {  //显示menu界面
        this.$menu.show();
    }

    hide() {  //关闭menu界面
        this.$menu.hide();
    }
}
