$(document).ready(function () {
    /* 本季新番与周期表切换 */
    $('.switcher').click(function () {
        if ($('.anime-menu .bbb').css('left') == '-9px') {
            $('.anime-menu .bbb').css('left', '80px')
            $('.anime-menu .bbb').css('width', '70px')
            $('.switcher p:nth-child(2)').css('color', '#2e2f31');
            $('.switcher p:nth-child(1)').css('color', 'var(--text-secondary-color)');
        } else {
            $('.anime-menu .bbb').css('left', '-9px')
            $('.anime-menu .bbb').css('width', '90px')
            $('.switcher p:nth-child(2)').css('color', 'var(--text-secondary-color)');
            $('.switcher p:nth-child(1)').css('color', '#2e2f31');
        }
    })
    /* 本季新番按热度排序 */
    $('.filter').click(function () {
        /* 隐藏显示更多按钮 */
        hideOrShowCard(0);
        /* 开始排序 */
        var arr = [];
        for (var i = 0; i < $('.newanime-content').length - 1; i++) {
            arr.push($('.newanime-content').eq(i));
        }
        arr.sort(function (a, b) {
            return b.attr('data-id') - a.attr('data-id');
        });
        for (var i = 0; i < arr.length; i++) {
            $(arr[i]).insertBefore($('.newanime-finalcard'));
        }
        hideOrShowCard(1);
    })
    /* 添加本季新番卡片 */
    var newAnimeDataArray = [
        { date: '2022-12-24', time: '07:00', episode: '12', watch: '31', name: 'UI PUI 天竺鼠車車 駕訓班篇' },
        { date: '2022-12-24', time: '02:25', episode: '24', watch: '29.3', name: '惑星公主蜥蜴騎士' },
        { date: '2022-12-24', time: '01:25', episode: '12', watch: '12.8', name: '聖劍傳說 Legend of Mana - The Teardrop Crystal -' },
        { date: '2022-12-23', time: '23:00', episode: '13', watch: '17.9', name: '我家師傅沒有尾巴' },
        { date: '2022-12-23', time: '01:55', episode: '11', watch: '41.5', name: '她來自煩星' },
        { date: '2022-12-22', time: '23:30', episode: '12', watch: '33.1', name: '書蟲公主' },
        { date: '2022-12-22', time: '01:25', episode: '24', watch: '17.9', name: 'MUV-LUV ALTERNATIVE 第二季' },
        { date: '2022-12-22', time: '00:00', episode: '12', watch: '135.5', name: '路人超能 100 第三季' },
        { date: '2022-12-22', time: '00:00', episode: '12', watch: '48.1', name: '不道德公會' },
        { date: '2022-12-21', time: '22:30', episode: '12', watch: '291.2', name: '我想成為影之強者！' },
        { date: '2022-12-21', time: '00:00', episode: '10', watch: '72.7', name: '鏈鋸人' },
        { date: '2022-12-20', time: '02:19', episode: '11', watch: '29.7', name: '呆萌酷男孩' },
        { date: '2022-12-20', time: '02:00', episode: '11', watch: '173.7', name: 'BLEACH 死神 千年血戰篇' },
        { date: '2022-12-19', time: '21:00', episode: '12', watch: '96.4', name: '菜鳥鍊金術師開店營業中' },
        { date: '2022-12-19', time: '18:00', episode: '9', watch: '31.9', name: '給不滅的你 第二季' },
        { date: '2022-12-19', time: '01:06', episode: '3', watch: '7.9', name: '我與機器子' },
        { date: '2022-12-19', time: '00:30', episode: '11', watch: '14', name: '彼得・格里爾的賢者時間 Super Extra' },
        { date: '2022-12-19', time: '00:30', episode: '11', watch: '30.7', name: '彼得・格里爾的賢者時間 Super Extra' },
        { date: '2022-12-18', time: '22:00', episode: '25', watch: '37.3', name: 'IDOLiSH7 - 偶像星願 - Third BEAT！' },
        { date: '2022-12-18', time: '22:00', episode: '11', watch: '88.6', name: '夫婦以上，戀人未滿' },
        { date: '2022-12-18', time: '05:00', episode: '22', watch: '6.2', name: '超人力霸王德卡' },
        { date: '2022-12-18', time: '01:00', episode: '11', watch: '140', name: '藍色監獄' },
        { date: '2022-12-18', time: '01:00', episode: '12', watch: '14', name: '烙印勇士 黃金時代篇 MEMORIAL EDITION' },
        { date: '2022-12-18', time: '00:30', episode: '11', watch: '304.3', name: '孤獨搖滾！' },
        { date: '2022-12-18', time: '00:00', episode: '12', watch: '59', name: '後宮之烏' },
        { date: '2022-12-17', time: '23:00', episode: '24', watch: '1470.8', name: 'SPY×FAMILY 間諜家家酒' },
        { date: '2022-12-17', time: '22:00', episode: '12', watch: '107', name: '點滿農民相關技能後，不知為何就變強了。' },
        { date: '2022-12-17', time: '22:00', episode: '12', watch: '158.8', name: '被勇者隊伍開除的馭獸使，邂逅了最強種的貓耳少女' },
        { date: '2022-12-17', time: '20:25', episode: '11', watch: '95', name: '入間同學入魔了！第三季' },
        { date: '2022-12-17', time: '17:30', episode: '125', watch: '131.8', name: '我的英雄學院 第六季' },
        { date: '2022-12-14', time: '23:30', episode: '12', watch: '224.8', name: '轉生就是劍' },
        { date: '2022-12-11', time: '17:00', episode: '10', watch: '131.4', name: '機動戰士鋼彈 水星的魔女' },
        { date: '2022-12-10', time: '22:00', episode: '12', watch: '71.2', name: '因為是反派大小姐所以養了魔王' },
        { date: '其他', time: '09:30', episode: '1', watch: '2.6', name: '電影版 奇巧計程車：撲朔謎林' },
        { date: '其他', time: '11:00', episode: '1', watch: '0.91', name: '再見了，橡果兄弟！' }
    ];
    for (let i = 0; i < newAnimeDataArray.length; i++) {
        createNewAnimeCard();
        giveNewAnimeCardValue(i);
    }
    function createNewAnimeCard() {
        $('<a>').addClass('newanime-content').attr('href', '#').append(
            $('<div>').addClass('newanime-date'),
            $('<div>').addClass('newanime-card').append(
                $('<div>').addClass('newanime-card-pic').append(
                    $('<div>').addClass('newanime-card-time').append(
                        $('<img>'),
                        $('<p>')
                    ),
                    $('<div>').addClass('newanime-card-suki'),
                    $('<div>').addClass('newanime-card-img'),
                    $('<div>').addClass('newanime-card-episode').append(
                        $('<img>'),
                        $('<p>')
                    )
                ),
                $('<div>').addClass('newanime-card-name').append(
                    $('<div>').addClass('newanime-name').append(
                        $('<p>')
                    ),
                    $('<div>').addClass('newanime-watch').append(
                        $('<img>'),
                        $('<p>')
                    )
                )
            )
        ).insertBefore($('.newanime-finalcard'));
    }
    function giveNewAnimeCardValue(i) {
        $('.newanime-card-time p').eq(i).html(newAnimeDataArray[i].time);
        $('.newanime-card-episode p').eq(i).html('第' + newAnimeDataArray[i].episode + '集');
        $('.newanime-name p').eq(i).html(newAnimeDataArray[i].name);
        $('.newanime-watch p').eq(i).html(newAnimeDataArray[i].watch + '万');
        /* $('.newanime-card-img').eq(i).css('background-image', 'url("../img/anime_card/anime_pic(' + i + ').jpg")') */
        $('.newanime-card-img').eq(i).css('background-image', 'url("https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/anime_card/anime_pic(' + i + ').jpg")')
        $('.newanime-content').eq(i).attr("data-id", newAnimeDataArray[i].watch);
    }
    /* 添加近期热播卡片 */
    var recentHotAnimeDataArray = [
        { date: '2022/10', episode: '共11', watch: '95万', name: '入間同學入魔了！第三季' },
        { date: '2022/10', episode: '共12', watch: '135.5万', name: '路人超能 100 第三季' },
        { date: '2022/10', episode: '共11', watch: '304.3万', name: '孤獨搖滾！' },
        { date: '1996/06', episode: '共341', watch: '335.2万', name: '烏龍派出所' },
        { date: '2022/10', episode: '共12', watch: '131.8万', name: '我的英雄學院 第六季' },
        { date: '2021/04', episode: '共26', watch: '940.9万', name: '86－不存在的戰區－' },
        { date: '2014/04', episode: '共25', watch: '183.5万', name: '排球少年！！' },
        { date: '2022/10', episode: '共12', watch: '96.4万', name: '菜鳥鍊金術師開店營業中' },
        { date: '2022/10', episode: '共11', watch: '173.7万', name: 'BLEACH 死神 千年血戰篇' },
        { date: '2022/10', episode: '共11', watch: '88.6万', name: '夫婦以上，戀人未滿' },
        { date: '2022/09', episode: '共11', watch: '131.4万', name: '機動戰士鋼彈 水星的魔女' },
        { date: '2018/10', episode: '共42', watch: '1180万', name: 'JOJO 的奇妙冒險 黃金之風' },
        { date: '2022/10', episode: '共11', watch: '140万', name: '藍色監獄' },
        { date: '2022/10', episode: '共12', watch: '291.2万', name: '我想成為影之強者！' }]
    for (let index = 0; index < 14; index++) {
        createRecentHotAnimeCard();
        giveRecentHotAnimeCardValue(index);
    }
    function createRecentHotAnimeCard() {
        let x = $('.hot-anime');
        $('<a>').attr({
            href: '#',
            class: 'hot-anime-card'
        }).append(
            $('<div>').addClass('hot-anime-pic').append(
                $('<div>').addClass('newanime-card-suki'),
                $('<div>').addClass('hot-anime-img'),
                $('<div>').addClass('hot-anime-watch')
            ),
            $('<div>').addClass('hot-anime-info').append(
                $('<div>').addClass('hot-anime-name').text('入間同學入魔了！第三季'),
                $('<div>').addClass('hot-anime-information').append(
                    $('<i>').append(
                        $('<p>').text('年份：'),
                        $('<p>').text('2022/10')
                    ),
                    $('<div>').text('共11集')
                )
            )
        ).appendTo(x); // Append the created element to the body

    }
    function giveRecentHotAnimeCardValue(i) {
        $('.hot-anime-name').eq(i).html(recentHotAnimeDataArray[i].name)
        $('.hot-anime-information i p:nth-child(2)').eq(i).html(recentHotAnimeDataArray[i].date)
        $('.hot-anime-img').eq(i).css('background-image', 'url("https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/anime_card/hotAnime/anime_pic(' + i + ').jpg")')
    }
    /* 显示更多按钮 */
    hideOrShowCard(1);
    $('.showMoreBtn').click(function () {
        hideOrShowCard(0);
    })
    function hideOrShowCard(f) {
        for (let index = 18; index <= $('.newanime-content').length; index++) {
            if (f == 1) {
                $('.newanime-content').eq(index).hide();
                $('.showMoreBtn').show();
            } else {
                $('.newanime-content').eq(index).show();
                $('.showMoreBtn').hide();
            }
        }
    }
    /* 发行商频道 */
    let channelLogoInfoArray = [
        'ani-one-logo', 'anipass-logo', 'beast-kingdom-logo', 'dragon-art-logo', 'H2O-logo', 'jy-logo', 'kawa-logo', 'mighty-logo', 'muse-logo', 'nada-holdings-logo', 'pw-logo', 'T&M_logo', 'wan-mi-logo'
    ]
    for (let index = 0; index < channelLogoInfoArray.length; index++) {
        $('.channel').eq(index).css('content', 'url("https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/content/publisher/' + channelLogoInfoArray[index] + '.png")')
    }
    /* 发行商频道浏览按钮 */
    let whereAreYou = 0;
    $('.channel-left').click(function () {
        whereAreYousValue(1)
        $('.channels').css('transform', 'translateX(-' + whereAreYou + 'px)');
        whoShouldBeBlack()
    })
    $('.channel-right').click(function () {
        whereAreYousValue(0)
        $('.channels').css('transform', 'translateX(-' + whereAreYou + 'px)');
        whoShouldBeBlack()
    })
    whoShouldBeBlack();
    function whereAreYousValue(f) {
        if (f == 1) {
            whereAreYou -= 400;
            if (whereAreYou <= 0) {
                whereAreYou = 0
            }
        } else {
            whereAreYou += 400;
            if (whereAreYou > 1000) {
                whereAreYou = 1000
            }
        }
    }
    function whoShouldBeBlack() {
        if (whereAreYou == 0) {
            $('.channel-left').css('background-color', 'rgba(50, 50, 50, 0.2)')
        } else {
            $('.channel-left').css('background-color', '#59d3eb')
        }
        if (whereAreYou == 1000) {
            $('.channel-right').css('background-color', 'rgba(50, 50, 50, 0.2)')
        } else {
            $('.channel-right').css('background-color', '#59d3eb')
        }

    }
    /* 相关新闻 */
    let aboutNewsInfoArray = [
        { title: '《宿命迴響》封測試玩報導 與擁有古典音樂力量的奏者共譜出優美故事', detail: 'DeNA 與萬代南夢宮影像製作（Bandai Namco Filmworks Inc.）共同製作的智慧型手機 RPG《宿命迴響（日文原名：takt op.運命は真紅き旋律の街を）》（iOS / Android）預定於 2023 年春季正式', imgUrl: '《宿命迴響》封測試玩報導 與擁有古典音樂力量的奏者共譜出優美故事' },
        { title: '動畫《英雄傳說 閃之軌跡：北方戰役》手機遊戲確定製作 預計明年在日本推出', detail: '宇峻奧汀日本子公司 USERJOY JAPAN 今（23）日宣布，決定製作智慧型手機遊戲《英雄傳說 閃之軌跡：北方戰役（暫譯，英雄伝説 閃の軌跡：Northern War）》，並於 2023 年在日本正式推出。  官方表', imgUrl: '' },
        { title: '【TiCA23】《鏈鋸人》淀治、真紀真聲優戶谷菊之介、楠木灯將舉辦見面會活動', detail: '羚邦於今（23）日宣布，將於 2023 台北國際動漫節舉辦《鏈鋸人》聲優見面會，邀請到飾演淀治與真紀真的聲優戶谷菊之介、楠木灯登台。  2022 年秋季上線的漫畫改編動畫《鏈鋸人》，由曾經製作《咒術迴戰》、《進擊的巨人 ', imgUrl: '' },
        { title: '《劇場版 歌之☆王子殿下♪ 真愛 ST☆RISH TOURS》主題 Café 即日起正式在台登場', detail: '《劇場版 歌之☆王子殿下♪ 真愛 ST☆RISH TOURS》劇場版主題 Café 自今（12/23）起至 2/2 在三創生活園區登場，全店也以作品主題裝飾，除了主題餐點及限定特典，更推出專屬台灣粉絲的期間限定活動。 ', imgUrl: '' },
        { title: '《火影忍者》動畫 20 週年特展 明日正式開展 展覽內容搶先一覽', detail: '為紀念《火影忍者》動畫邁入 20 週年而在台灣舉行的「火影忍者動畫 20 週年特展」，明日（12 月 24 日）即將於新光三越 A11 六樓正式開展，特展中精選了動畫中的八大經典場景還原，以及結合聲光效果的互動體驗區，帶領火影迷重回動畫中的', imgUrl: '' },
        { title: '《角落小夥伴》宣布第三部電影版將於 2023 年日本上映！', detail: 'San-X 旗下受到許多人喜愛的知名角色系列「角落小夥伴（角落生物）」今（23）日宣布，其動畫電影系列將於 2023 年在日本推出第三部作品的消息。  今年迎接誕生 10 周年的「角落小夥伴」，在 2019 年首度推出第', imgUrl: '' },
        { title: '日本岩手縣將開設以岩石屬性寶可夢為主題的「小拳石公園」', detail: '繼日本香川縣確定開設「呆呆獸公園」後，寶可夢公司（The Pokémon Company）再度宣布與岩手縣聯合打造以岩石屬性寶可夢為設計概念的「小拳石公園」，預計 2023 年 4 月在岩手縣久慈市開幕。  ', imgUrl: '' },
        { title: '【試片】 《輝夜姬想讓人告白-永不結束的初吻》初吻後也要繼續頭腦戰', detail: '由 A-1 Pictures 改編，連續三季都受到許多人喜愛的戀愛動畫《輝夜姬想讓人告白》，終於推出第一個劇場版。這個在日本以特別上映的形式播出的劇場版，不只是完美的銜接了 TV 版第三季的結尾，同時也是主角御行和輝夜兩人戀情的重要轉捩點，', imgUrl: '' },
        { title: '原創電視動畫《THE MARGINAL SERVICE》2023 年 4 月開播 公開首波宣傳影片', detail: '原創電視動畫《THE MARGINAL SERVICE（ザ・マージナルサービス）》，官方宣布動畫將於 2023 年 4 月開播的消息，並且公開了第一波宣傳影片。  雖說目前還無法窺見作品的全面，但與先前不同，這次的宣傳影', imgUrl: '' },
        { title: '【情報】SOLar老師畫的聖誕裝真紀真', detail: '祝大家聖誕快樂以下開放大家當狗(?)來源', imgUrl: '' },
        { title: '【情報】しろまんた《前輩有夠煩》卡在煙囪裡的聖誕雙葉', detail: 'しろまんた@shiromanta1020「引っ張ってください！！！」「請幫我拉出來！！！」https://twitter', imgUrl: '' },
        { title: '【心得】リコリス・リコイル 2022 聖誕蛋糕 分享', detail: '大家好又見面了這次與大家分享的是リコリス・リコイル 2022クリスマスケーキ＜たきな＞官圖開箱！蛋糕內層分佈吃後心得：吃', imgUrl: '' },
        { title: '【討論】《孤獨搖滾！》動畫最終話"早晨降臨在你身上"之討論串(圖多注意)', detail: '巴哈動畫瘋連結圖多注意推特又被洗版了XD最終話標題"君に朝が降る"(早晨降臨在你身上)出自名曲"転がる岩、君に朝が降る"', imgUrl: '' },
        { title: '【情報】無限軌道老師畫的聖誕裝櫛田桔梗', detail: '無限軌道老師在自己的推特上畫了穿聖誕服裝的櫛田桔梗祝大家聖誕快樂https://twitter.com/tomose_s', imgUrl: '' },
        { title: '【繪圖】聖誕節千歌&步夢', detail: '預祝聖誕節快樂!之前4代同堂的這件很喜歡就只挑了推來畫是可以當作聖誕的服裝吧...?不知不覺也畫了第5年的LL聖誕圖呀.', imgUrl: '' },
        { title: '【討論】動畫《被勇者隊伍開除的馭獸使，邂逅了最強種的貓耳少女》第十三話討論串(完)', detail: '#13 みんなの家妮娜想要留在雷因的身邊並成為雷因的力量，最終妮娜也順利和雷因締結契約成功，勇者因為去黑市買戒子殺雷因花', imgUrl: '' },
        { title: '【情報】《秋葉原冥途戰爭》「和平なごみ」、「萬年嵐子」PVC 商品化確定！', detail: '＝＝＝＝＝＝＝＝＝＝＝＝　 フィギュア化決定！＝＝＝＝＝＝＝＝＝＝＝＝秋葉原を舞台に”バッキュン”を繰り広げた「なごみ」', imgUrl: '' },
        { title: '【情報】 TYPE-MOON 官方釋出的《魔法使之夜》2022 年聖誕節賀圖！', detail: 'ハッピーメリークリスマス！聖なる夜に沢山の感謝を込めてhttps://twitter.com/TMitterOffici', imgUrl: '' }
    ]
    giveNewsCardValue(aboutNewsInfoArray);
    function giveNewsCardValue(a) {
        for (let index = 0; index < 18; index++) {
            $('.news-img-block div').eq(index).css('background-image', 'url("https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/content/news/' + a[index].title + '.jpg")')
            $('.news-content-title').eq(index).html(a[index].title)
            $('.news-content-detail').eq(index).html(a[index].detail)
        }
    }
    /* 喜欢功能 */
    console.log($('.newanime-card-suki'));
    // 存储数据
    /*    $('.newanime-card-suki').click(function (ev) {
           console.log($(this).attr('class'));
           if ($(this).attr('class') == 'newanime-card-suki') {
               $(this).addClass('newanime-card-sukied')
           } else { $(this).attr('class', 'newanime-card-suki') }
           rememberSukiOrNot()
           console.log(read('suki'));
           ev.stopPropagation()
           return false;
       })
       function rememberSukiOrNot() {
           for (let index = 0; index < $('.newanime-card-suki').length; index++) {
               if ($(this).attr('class') == 'newanime-card-suki newanime-card-sukied') {
                   console.log('开始记录');
                   let arr = [];
                   let newArr = {};
                   if (localStorage.suki != null) {
                       arr = read('suki')
                   }
                   arr.push(index);
                   save(suki, arr);
               }
           }
       } */


})