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
    /* 添加本季新番卡片 */
    var newAnimeDataArray = [
        { date: '2022-12-24', time: '7:00', name: 'UI PUI 天竺鼠車車 駕訓班篇', episode: '第12集', watch: '31万' },
        { date: '2022-12-24', time: '2:25', name: '惑星公主蜥蜴騎士', episode: '第24集', watch: '29.3万' },
        { date: '2022-12-24', time: '1:25', name: '聖劍傳說 Legend of Mana - The Teardrop Crystal -', episode: '第12集', watch: '12.8万' },
        { date: '2022-12-23', time: '23:00', name: '我家師傅沒有尾巴', episode: '第13集', watch: '17.9万' },
        { date: '2022-12-23', time: '01:55', name: '她來自煩星', episode: '第11集', watch: '41.5万' },
        { date: '2022-12-22', time: '23:30', name: '書蟲公主', episode: '第12集', watch: '33.1万' },
        { date: '2022-12-22', time: '01:25', name: 'MUV-LUV ALTERNATIVE 第二季', episode: '第24集', watch: '17.9万' },
        { date: '2022-12-22', time: '00:00', name: '路人超能 100 第三季', episode: '第12集', watch: '135.5万' },
        { date: '2022-12-22', time: '00:00', name: '不道德公會', episode: '第12集', watch: '48.1万' },
        { date: '2022-12-21', time: '22:30', name: '我想成為影之強者！', episode: '第12集', watch: '291.2万' },
        { date: '2022-12-21', time: '00:00', name: '鏈鋸人', episode: '第10集', watch: '72.7万' },
        { date: '2022-12-20', time: '2:19', name: '呆萌酷男孩', episode: '第11集', watch: '29.7万' },
        { date: '2022-12-20', time: '2:00', name: 'BLEACH 死神 千年血戰篇', episode: '第11集', watch: '173.7万' },
        { date: '2022-12-19', time: '21:00', name: '菜鳥鍊金術師開店營業中', episode: '第12集', watch: '96.4万' },
        { date: '2022-12-19', time: '18:00', name: '給不滅的你 第二季', episode: '第9集', watch: '31.9万' },
        { date: '2022-12-19', time: '01:06', name: '我與機器子', episode: '第3集', watch: '7.9万' },
        { date: '2022-12-19', time: '00:30', name: '彼得・格里爾的賢者時間 Super Extra', episode: '第11集', watch: '14万' },
        { date: '2022-12-19', time: '00:30', name: '彼得・格里爾的賢者時間 Super Extra', episode: '第11集', watch: '30.7万' },
        { date: '2022-12-18', time: '22:00', name: 'IDOLiSH7 - 偶像星願 - Third BEAT！', episode: '第25集', watch: '37.3万' },
        { date: '2022-12-18', time: '22:00', name: '夫婦以上，戀人未滿', episode: '第11集', watch: '88.6万' },
        { date: '2022-12-18', time: '05:00', name: '超人力霸王德卡', episode: '第22集', watch: '6.2万' },
        { date: '2022-12-18', time: '01:00', name: '藍色監獄', episode: '第11集', watch: '140万' },
        { date: '2022-12-18', time: '01:00', name: '烙印勇士 黃金時代篇 MEMORIAL EDITION', episode: '第12集', watch: '14万' },
        { date: '2022-12-18', time: '00:30', name: '孤獨搖滾！', episode: '第11集', watch: '304.3万' },
        { date: '2022-12-18', time: '00:00', name: '後宮之烏', episode: '第12集', watch: '59万' },
        { date: '2022-12-17', time: '23:00', name: 'SPY×FAMILY 間諜家家酒', episode: '第24集', watch: '1470.8万' },
        { date: '2022-12-17', time: '22:00', name: '點滿農民相關技能後，不知為何就變強了。', episode: '第12集', watch: '107万' },
        { date: '2022-12-17', time: '22:00', name: '被勇者隊伍開除的馭獸使，邂逅了最強種的貓耳少女', episode: '第12集', watch: '158.8万' },
        { date: '2022-12-17', time: '20:25', name: '入間同學入魔了！第三季', episode: '第11集', watch: '95万' },
        { date: '2022-12-17', time: '17:30', name: '我的英雄學院 第六季', episode: '第125集', watch: '131.8万' },
        { date: '2022-12-14', time: '23:30', name: '轉生就是劍', episode: '第12集', watch: '224.8万' },
        { date: '2022-12-11', time: '17:00', name: '機動戰士鋼彈 水星的魔女', episode: '第10集', watch: '131.4万' },
        { date: '2022-12-10', time: '22:00', name: '因為是反派大小姐所以養了魔王', episode: '第12集', watch: '71.2万' },
        { date: '其他', time: '09:30', name: '電影版 奇巧計程車：撲朔謎林', episode: '', watch: '2.6万' },
        { date: '其他', time: '11:00', name: '再見了，橡果兄弟！', episode: '', watch: '9185' },
    ];
    for (let i = 0; i < newAnimeDataArray.length; i++) {
        createNewAnimeCard();
        giveNewAnimeCardValue(i);
    }

    function createNewAnimeCard() {
        let newanime_block = $('.newanime-block')
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
        ).appendTo(newanime_block);
    }
    function giveNewAnimeCardValue(i) {
        $('.newanime-card-time p').eq(i).html(newAnimeDataArray[i].time);
        $('.newanime-card-episode p').eq(i).html(newAnimeDataArray[i].episode);
        $('.newanime-name p').eq(i).html(newAnimeDataArray[i].name);
        $('.newanime-watch p').eq(i).html(newAnimeDataArray[i].watch);
        /* https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/%E6%8A%84%E8%A2%AD%E5%8A%A8%E7%94%BB%E7%96%AF%E8%AE%A1%E5%88%92/img/anime_card/anime_pic(0).jpg */
        $('.newanime-card-img').eq(i).css('background-image', 'url("../img/anime_card/anime_pic(' + i + ').jpg")')
        /* $('.newanime-card-img').eq(i).css('background-image', 'url("https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/anime_card/anime_pic('+i+').jpg")') */
    }

})